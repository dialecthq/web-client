import React from 'react'
import styled from 'styled-components'
import { useParticipant } from 'livekit-react'
import { FaMicrophoneSlash, FaMicrophone } from 'react-icons/fa'

const Container = styled.div`
    width: 400px;
    height: 400px;
    background-color: var(--layer-background);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 10px;
    border: ${(p) => (p.isSpeaking ? '2px solid #81FDE3' : '2px solid #F6F6F6')};
    transition: 0.2s border ease-in-out;

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

const InformationContainer = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MutedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    padding: 7px 14px;
    background: var(--dark-background);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 20px;
    margin-right: 5px;
    height: 32px;

`

const NameContainer = styled.div`
    padding: 7px 14px;
    background: var(--dark-background);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 20px;
`

const Name = styled.p`
    color: var(--text-color);
    font-size: 1em;
    font-weight: 400;
`

function Participant({ participant }) {
  const {
    isLocal, isMuted, isSpeaking, subscribedTracks
  } = useParticipant(participant)

  return (
    <Container isSpeaking={isSpeaking}>
      <ParticipantAvatar>
        <img
          style={{
            width: '64px',
            height: '64px'
          }}
          alt="hey"
          src={`https://minecraftskinstealer.com/api/v1/skin/download/cube/${participant.metadata}`}
        />
      </ParticipantAvatar>
      <InformationContainer>
        {isMuted
        && (
          <MutedContainer>
            <FaMicrophoneSlash />
          </MutedContainer>
        )}

        <NameContainer>
          <Name>{`@${participant.metadata}`}</Name>
        </NameContainer>
      </InformationContainer>
    </Container>

  )
}

export default Participant
