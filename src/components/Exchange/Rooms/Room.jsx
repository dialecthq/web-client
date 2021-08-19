/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  LiveKitRoom, AudioRenderer, ControlsView, useParticipant
} from 'livekit-react'
import { useHistory, Redirect } from 'react-router-dom'
import fire from '@utils/fire'

import { createLocalTracks } from 'livekit-client'
import userContainer from '@utils/state/userContainer'

import {
  checkWaitingRoom, addToWaitingRoom, createRoom, joinRoom, checkNative, checkTokens, getRoom
} from '@utils/apis/RoomAPI'
import ServerDown from '@img/server_down.svg'
import rooms from '@utils/data/rooms'

import Waiting from '@components/common/Waiting'
import Error from '@components/common/Error'
import Participant from './components/Participant'
import RoomHeader from './components/RoomHeader'
import Controls from './components/Controls'

const url = 'ws://localhost:7880'

const StageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark-background);
  padding: 10px 24px;
  position: relative;
`

const StageCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

// renderStage prepares the layout of the stage using subcomponents. Feel free to
// modify as you see fit. It uses the built-in ParticipantView component in this
// example; you may use a custom component instead.
function renderStage({ roomState }) {
  const {
    room, participants, audioTracks, isConnecting, error
  } = roomState

  if (isConnecting) {
    return <Waiting message=" 🔗 connecting to your partner ..." />
  }
  if (error) {
    return (
      // <StageMessage>
      //   <div>
      //     Error:
      //     {' '}
      //     {error.message}
      //   </div>
      // </StageMessage>
      <Error errorMessage={error.message} imgLink={ServerDown} />
    )
  }
  if (!room) {
    return <Error errorMessage="room closed" imgLink={ServerDown} />
  }

  return (
    <StageContainer>
      <RoomHeader numParticipants={participants.length} room={room} />
      <StageCenter>
        {participants.map((participant) => (
          <Participant
            key={participant.sid}
            participant={participant}
          />
        ))}
        {audioTracks.map((track) => (
          <AudioRenderer key={track.sid} track={track} isLocal={false} />
        ))}
      </StageCenter>
      <Controls room={room} participants={participants} />
      {/* <MuteButton room={room} />
      <ControlsView
        room={room}
        enableScreenShare={false}
        enableVideo={false}
        onLeave={() => room.disconnect()}
      /> */}
    </StageContainer>
  )
}

async function handleConnected(room) {
  const tracks = await createLocalTracks({
    audio: true,
    video: false,
  })
  tracks.forEach((track) => {
    room.localParticipant.publishTrack(track)
  })
}

function RoomComponent() {
  const [token, setToken] = useState(null)
  const [waiting, setWaiting] = useState(true)
  const [error, setError] = useState(null)
  const { user } = userContainer.useContainer()
  const history = useHistory()
  const caroline = 'Pretty'
  const otherBitches = 'ugly ew'

  useEffect(async () => {
    const languageValue = window.location.pathname.split('/').pop()
    const language = rooms.filter((e) => e.value === languageValue)[0]
    if (!language) {
      setError('Could not find the requested language')
      return null
    }

    const isNative = await checkNative(user, language)
    if (!isNative) {
      const tokens = await checkTokens(user)
      if (!tokens) {
        setWaiting(false)
        setError('No tokens left you beyondini')
        return null
      }
    }

    const subscriber = fire.firestore().collection('audio-rooms')
      .where('active', '==', true)
      .where('participants', 'array-contains', user.uid)
      .onSnapshot(async (querySnapshot) => {
        setWaiting(true)

        let roomID = querySnapshot.docs[0]?.id || null
        if (!roomID) {
          const partnerID = await checkWaitingRoom(user, language)
          if (!partnerID) {
            addToWaitingRoom(user, language)
            setToken(null)
          } else {
            roomID = await createRoom([user.uid, partnerID], language)
            if (!roomID) {
              setToken(null)
            } else {
              const newTokenResult = await joinRoom(user, language, roomID)
              if (!newTokenResult.data.token) {
                setToken(null)
              } else {
                setWaiting(false)
                setToken(newTokenResult.data.token)
              }
            }
          }
        } else {
          const newTokenResult = await joinRoom(user, language, roomID)
          if (!newTokenResult.data.token) {
            setToken(null)
          } else {
            setWaiting(false)
            setToken(newTokenResult.data.token)
          }
        }
      })
    return () => subscriber()
  }, [])

  if (error) return <Error errorMessage={error} imgLink={ServerDown} />

  if (waiting) return <Waiting message="🔎 looking for a partner" />
  if (!token) return <Error errorMessage="No token beyondie" imgLink={ServerDown} />

  return (
    <div style={{ height: '100vh', minHeight: 700 }}>
      <LiveKitRoom
        url={url}
        token={token}
        stageRenderer={renderStage}
        onConnected={(room) => { handleConnected(room) }}
      />
    </div>
  )
}

export default RoomComponent
