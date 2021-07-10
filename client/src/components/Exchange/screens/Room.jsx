import { LiveKitRoom } from 'livekit-react'
import { createLocalAudioTrack, createLocalVideoTrack } from 'livekit-client'
import React from 'react'
// CSS should be explicitly imported if using the default UI
import 'livekit-react/dist/index.css'
// used by the default ParticipantView to maintain video aspect ratio.
// this CSS must be imported globally
// if you are using a custom Participant renderer, this import isn't necessary.
import 'react-aspect-ratio/aspect-ratio.css'

async function onConnected(room) {
  const audioTrack = await createLocalAudioTrack()
  await room.localParticipant.publishTrack(audioTrack)
  const videoTrack = await createLocalVideoTrack()
  await room.localParticipant.publishTrack(videoTrack)
}

const RoomPage = () => {
  const url = 'ws://localhost:7880'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjg0ODA0MDgsImlzcyI6IkFQSU5ldzVYUW5GTUo1ZiIsImp0aSI6Im15aWRlbnRpdCIsIm5iZiI6MTYyNTg4ODQwOCwidmlkZW8iOnsicm9vbSI6Im15cm9vbSIsInJvb21Kb2luIjp0cnVlfX0.SosSTS2dWU4crj_mCgbEjeqWiqw4pYu25AP1j7YgrkE'
  return (
    <div className="roomContainer">

      <LiveKitRoom url={url} token={token} onConnected={(room) => onConnected(room)} />
    </div>
  )
}

export default RoomPage
