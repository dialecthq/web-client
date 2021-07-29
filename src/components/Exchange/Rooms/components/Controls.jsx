import React from 'react'
import styled from 'styled-components'
import UserContainer from '@utils/state/userContainer'
import MuteButton from './MuteButton'
import LeaveButton from './LeaveButton'
import Timer from './Timer'

const Container = styled.div`
    background: var(--layer-background);
    border-radius: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    padding: 10px 20px;
    border: 1px solid var(--border-color);
`

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 45px;
`

const RoomNames = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    color: var(--text-color);
`

const RoomDescription = styled.p`
    font-size: 1em;
    font-weight: 300;
    color: #c4c4c4;
`

const Controls = ({ room, participants }) => {
  const { user } = UserContainer.useContainer()
  const otherParticipant = participants.filter((e) => e.metadata !== user.username)[0]
  return (
    <Container>
      <InformationContainer>
        <RoomNames>{otherParticipant ? `You and @${otherParticipant}` : 'You are alone'}</RoomNames>
        <RoomDescription>23 other people in English rooms</RoomDescription>
      </InformationContainer>
      <Timer room={room} />
      <MuteButton room={room} />
      <LeaveButton room={room} />
    </Container>
  )
}
export default Controls
