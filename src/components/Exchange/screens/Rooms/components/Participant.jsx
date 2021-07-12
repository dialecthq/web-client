import React from 'react'
import styled from 'styled-components'
import { useParticipant } from 'livekit-react'

const Container = styled.div`
    width: 400px;
    height: 400px;
    background-color: #251B3D;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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
  border: ${(p) => (p.isSpeaking ? '7px solid #81FDE3' : '7px solid #fff')};
  transition: 0.2s border ease-in-out;
`
const NameContainer = styled.div`
    padding: 7px 14px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    background: #180F25;
    color: #fff;
    border-radius: 20px;
`

const Name = styled.p`
    color: #fff;
    font-size: 1em;
    font-weight: 400;
`

function Participant({ participant }) {
  const {
    isLocal, isMuted, isSpeaking, subscribedTracks
  } = useParticipant(participant)

  return (
    <Container>
      <ParticipantAvatar isSpeaking={isSpeaking}>
        <img
          style={{
            width: '64px',
            height: '64px'
          }}
          alt="hey"
          src={`https://minecraftskinstealer.com/api/v1/skin/download/cube/${participant.metadata}`}
        />
      </ParticipantAvatar>
      <NameContainer>
        <Name>{`@${participant.metadata}`}</Name>
      </NameContainer>
    </Container>
  )
}

export default Participant
