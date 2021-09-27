/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { message } from "antd"
import {
  createLocalAudioTrack,
  createLocalVideoTrack,
  LocalTrackPublication,
  LocalVideoTrack,
  Room,
  Track,
  VideoPresets
} from "livekit-client"
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa"

import { useParticipant } from "livekit-react"
import axios from "axios"

const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-background);
  margin-left: 10px;
  border: 1px solid #d4d4d4;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const MuteButton = ({ room }) => {
  const { publications, isMuted, unpublishTrack } = useParticipant(room.localParticipant)
  const audioPub = publications.find((val) => val.kind === Track.Kind.Audio)

  return (
    <Container
      muted={!audioPub || isMuted}
      onClick={async () => {
        axios.post("/api/set_timer")
        if (!audioPub || isMuted) {
          if (audioPub) {
            audioPub.unmute()
            message.success({
              content: "Microphone is on",
              icon: <FaMicrophone size={24} style={{ marginRight: 10 }} />,
              duration: 1
            })
          } else {
            // track not published
            const audioTrack = await createLocalAudioTrack()
            room.localParticipant.publishTrack(audioTrack)
          }
        } else {
          audioPub.mute()
          message.success({
            content: "Microphone is off",
            icon: <FaMicrophoneSlash size={24} style={{ marginRight: 10 }} />,
            duration: 1
          })
        }
      }}
    >
      {!audioPub || isMuted ? (
        <FaMicrophoneSlash size={24} color="#1c1c1c" />
      ) : (
        <FaMicrophone size={24} color="#1c1c1c" />
      )}
    </Container>
  )
}

export default MuteButton
