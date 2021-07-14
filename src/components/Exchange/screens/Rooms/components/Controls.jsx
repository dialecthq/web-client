import React from 'react'
import styled from 'styled-components'
import MuteButton from './MuteButton'
import LeaveButton from './LeaveButton'

const Container = styled.div`
    background: #110A1F;
    border-radius: 20px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    padding: 10px 20px;
    border: 2px solid #1F1239;
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
    color: #fff;
`

const RoomDescription = styled.p`
    font-size: 1em;
    font-weight: 300;
    color: #d4d4d4;
`

const Controls = ({ room }) => (
  <Container>
    <InformationContainer>
      <RoomNames>You and @seed</RoomNames>
      <RoomDescription>23 other people in English rooms</RoomDescription>
    </InformationContainer>
    <MuteButton room={room} />
    <LeaveButton room={room} />
  </Container>
)
export default Controls
