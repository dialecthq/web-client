/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { LiveKitRoom, AudioRenderer, ControlsView, useParticipant } from "livekit-react"
import Seo from "../components/seo/Seo"
import { createLocalTracks } from "livekit-client"
import userContainer from "../utils/state/userContainer"
import strings from "../utils/data/strings"
import { useRouter } from "next/router"

import {
  checkWaitingRoom,
  addToWaitingRoom,
  createRoom,
  joinRoom,
  checkNative,
  checkTokens,
  getRoom
} from "../utils/apis/RoomAPI"
import ServerDown from "../../public/server_down.svg"
import rooms from "../utils/data/rooms"

import Waiting from "../components/common/Waiting"
import Error from "../components/common/Error"
import fire from "../utils/fire"
import Participant from "../components/exchange/rooms/Participant"
import RoomHeader from "../components/exchange/rooms/RoomHeader"
import Controls from "../components/exchange/rooms/Controls"

const url = "wss://dialect-livekit.fly.dev:443"

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
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 959px) {
    justify-content: space-around;
  }
`

const StageDiv = styled.div`
  height: 100vh;

  @media screen and (max-width: 959px) {
    min-height: 200px;
  }
`

// renderStage prepares the layout of the stage using subcomponents. Feel free to
// modify as you see fit. It uses the built-in ParticipantView component in this
// example; you may use a custom component instead.
function renderStage({ roomState }) {
  const { room, participants, audioTracks, isConnecting, error } = roomState

  if (isConnecting) {
    return <Waiting message={` 🔗 ${strings.connectingToYourPartner} ...`} />
  }
  if (error) {
    return <Error errorMessage={error.message} imgLink={ServerDown} />
  }
  if (!room) {
    return <Error errorMessage="room closed" imgLink={ServerDown} />
  }

  return (
    <StageContainer>
      <RoomHeader numParticipants={participants.length} room={room} />
      <StageCenter>
        {participants.map((participant) => (
          <Participant key={participant.sid} participant={participant} />
        ))}
        {audioTracks.map((track) => (
          <AudioRenderer key={track.sid} track={track} isLocal={false} />
        ))}
      </StageCenter>
      <Controls room={room} participants={participants} />
    </StageContainer>
  )
}

async function handleConnected(room) {
  const tracks = await createLocalTracks({
    audio: true,
    video: false
  })
  tracks.forEach((track) => {
    room.localParticipant.publishTrack(track)
  })
}

export default function RoomComponent() {
  const [error, setError] = useState(null)
  const { user } = userContainer.useContainer()
  const router = useRouter()
  const { token } = router.query

  if (error) return <Error errorMessage={error} imgLink={ServerDown} />

  if (!token) return <Error errorMessage="No token beyond" imgLink={ServerDown} />

  return (
    <StageDiv>
      <Seo
        title={`Exchange - Learn a new language today`}
        description="Give the gift of language."
      />
      <LiveKitRoom
        url={url}
        token={token}
        stageRenderer={renderStage}
        onConnected={(room) => {
          handleConnected(room)
        }}
      />
    </StageDiv>
  )
}
