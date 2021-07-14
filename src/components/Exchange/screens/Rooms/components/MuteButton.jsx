/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import {
  createLocalAudioTrack,
  createLocalVideoTrack,
  LocalTrackPublication,
  LocalVideoTrack,
  Room,
  Track,
  VideoPresets,
} from 'livekit-client'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'

import { useParticipant } from 'livekit-react'

const Container = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #251B3D;


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
        if (!audioPub || isMuted) {
          if (audioPub) {
            audioPub.unmute()
          } else {
          // track not published
            const audioTrack = await createLocalAudioTrack()
            room.localParticipant.publishTrack(audioTrack)
          }
        } else {
          audioPub.mute()
        }
      }}
    >
      {
        !audioPub || isMuted
          ? <FaMicrophone size={24} color="fff" />
          : <FaMicrophoneSlash size={24} color="#fff" />
      }

    </Container>
  )
}

export default MuteButton
