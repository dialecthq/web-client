/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  LiveKitRoom, AudioRenderer, ControlsView, useParticipant
} from 'livekit-react'
import { createLocalTracks } from 'livekit-client'
import RoomAPI from '@utils/apis/RoomAPI'
import fire from '@utils/fire'
import userContainer from '@utils/state/userContainer'
import { useHistory } from 'react-router-dom'
/*
Playground lets you build a real-time video room using LiveKit's React component.
Feel free to cutomize the code below to your heart's content.
Send this page to a friend or open it in a new browser tab to see multi-user conferencing in action.

In scope:
  `token`: An access token that joins the room, valid for 2h.
  `LiveKitRoom`: React component for manages LiveKit room state
  `ControlsView`: Component that renders control buttons
  `ParticipantView`: Component that renders video UI for a participant
  `AudioRenderer`: Component that plays back audio tracks
  `useParticipant`: Hook to manage participant state, use to render custom participant UI
  `createLocalTracks`: LiveKit helper to initialize local video & audio
  `styled`: See https://styled-components.com/ for details
  `keyframes`: See https://styled-components.com/docs/api#keyframes for details
*/

// this is our demo server for demonstration purposes. It's easy to deploy your own.
const url = 'ws://localhost:7880'

const StageLayout = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-columns: auto;
  row-gap: 1rem;
  height: 100%;
  overflow: hidden;
`

const StageCenter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  max-height: 96px;
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
    return <StageMessage><div>Room closed</div></StageMessage>
  }

  return (
    <StageLayout>
      <div style={{
        overflowY: 'scroll',
        padding: '1.5rem'
      }}
      >
        <StageCenter>
          {participants.map((participant) => (
            <RenderParticipant
              key={participant.sid}
              participant={participant}
            />
          ))}
          {audioTracks.map((track) => (
            <AudioRenderer key={track.sid} track={track} isLocal={false} />
          ))}
        </StageCenter>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: '1.5rem'
      }}
      >
        <ControlsView
          room={room}
          enableScreenShare={false}
          enableVideo={false}
          onLeave={() => room.disconnect()}
        />
      </div>
    </StageLayout>
  )
}

const ParticipantHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-gap: 1rem;
`
const ParticipantAvatar = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #00153C;
  border: 4px solid rgba(0, 125, 255, 0);
  color: white;
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ParticipantName = styled.div`
  max-width: 96px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MuteIcon = styled.div`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  font-size: 1.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.75rem;
  padding-bottom: 0.75rem;
  border: 0.25rem solid #000;
`

function RenderParticipant({ participant }) {
  const {
    isLocal, isMuted, isSpeaking, subscribedTracks
  } = useParticipant(participant)

  const styles = {}
  if (isSpeaking) {
    styles.border = '4px solid #5A8BFF'
  }

  let nameStyles = {}
  const makers = ['dsa', 'dz', 'dc', 'herzog']
  if (makers.includes(participant.identity)) {
    nameStyles = {
      background: 'linear-gradient(262.65deg ,#6ee2e2,#5a8bff)',
      webkitBackgroundClip: 'text',
      webkitTextFillColor: 'transparent'
    }
  }

  return (
    <ParticipantHolder>
      <ParticipantAvatar style={styles}>
        <span style={{
          lineHeight: 1,
          fontSize: '4rem',
          fontWeight: 'bold',
          padding: 0,
          margin: 0,
          display: 'inline-block',
          marginTop: '0.6rem',
          textTransform: 'uppercase'
        }}
        >
          <img
            style={{
              width: '64px',
              height: '64px'
            }}
            src={`https://minecraftskinstealer.com/api/v1/skin/download/cube/${participant.metadata}`}
          />
        </span>
        { isMuted
          && (
            <MuteIcon>
              <span style={{
                fontSize: '1.3rem'
              }}
              >
                🔇

              </span>
            </MuteIcon>
          ) }
      </ParticipantAvatar>
      <ParticipantName style={nameStyles}>
        {`@${participant.metadata}`}
      </ParticipantName>
    </ParticipantHolder>
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
  const user = userContainer.useContainer()
  const history = useHistory()

  useEffect(() => {
    if (!user.user) {
      history.push('/')
    }
    RoomAPI.join(fire.auth().currentUser.uid, user.user.username, 'heyhey').then((data) => {
      console.log(data.data.token)
      setToken(data.data.token)
    }).catch(() => {
      console.log('beyooooooond')
    })
  }, [])
  if (!token || !user.user) return null
  return (
    <div style={{ height: '100vh' }}>
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
