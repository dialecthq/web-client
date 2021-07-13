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

import { useParticipant } from 'livekit-react'

const Container = styled.div`
    width: 24px;
    height: 24px;
    background: ${(p) => (p.muted ? '#ff0000' : '#0000ff')};
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
    />
  )
}

export default MuteButton
