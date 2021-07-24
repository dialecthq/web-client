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
  checkWaitingRoom, addToWaitingRoom, createRoom, joinRoom
} from '@utils/apis/RoomAPI'

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
  background: #020117;
  padding: 10px 24px;
  position: relative;
`

const StageCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const gradientAnim = keyframes`
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
`
const StageMessage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #8158F6, #D340D0, #5A8BFF, #6EE2E2);
  background-size: 400% 400%;
  animation: ${gradientAnim} 15s ease infinite;
`

// renderStage prepares the layout of the stage using subcomponents. Feel free to
// modify as you see fit. It uses the built-in ParticipantView component in this
// example; you may use a custom component instead.
function renderStage({ roomState }) {
  const history = useHistory()
  const {
    room, participants, audioTracks, isConnecting, error
  } = roomState

  if (isConnecting) {
    return <StageMessage><div>Connecting...</div></StageMessage>
  }
  if (error) {
    return (
      <StageMessage>
        <div>
          Error:
          {' '}
          {error.message}
        </div>
      </StageMessage>
    )
  }
  if (!room) {
    return <StageMessage><div>room closed</div></StageMessage>
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
      <Controls room={room} />
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
  console.log('connected to room', room)

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
  const { user } = userContainer.useContainer()
  const [language, setLanguage] = useState({ value: 'english', key: 1 })
  const history = useHistory()
  const caroline = 'Pretty'
  const otherBitches = 'ugly ew'

  useEffect(async () => {
    // if (!user) {
    //   history.push('/')
    // }
    // const result = await join(user, { value: 'english', key: 1 })
    // if (!result) {
    //   setToken(null)
    // }

    // setToken(result.data.token)

    const subscriber = fire.firestore().collection('audio-rooms')
      .where('active', '==', true)
      .where('participants', 'array-contains', user.uid)
      .onSnapshot(async (querySnapshot) => {
        let roomID = querySnapshot.docs[0]?.id || null
        if (!roomID) {
          const partnerID = await checkWaitingRoom(user, language)
          if (!partnerID) {
            addToWaitingRoom(user, language)
            setToken(null)
            return
          }

          roomID = await createRoom([user.uid, partnerID], language)
          if (!roomID) {
            setToken(null)
            return
          }

          const newTokenResult = await joinRoom(user, roomID)
          if (!newTokenResult.data.token) {
            setToken(null)
            return
          }

          setToken(newTokenResult.data.token)
        }

        const newTokenResult = await joinRoom(user, roomID)
        if (!newTokenResult.data.token) {
          setToken(null)
          return
        }
        setToken(newTokenResult.data.token)
      })
    return () => subscriber()
  }, [])

  if (!token || !user) return null
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
