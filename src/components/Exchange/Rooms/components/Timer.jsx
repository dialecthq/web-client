import React from 'react'
import styled from 'styled-components'
import { useTimer } from 'react-timer-hook'
import { leaveRoom } from '@utils/apis/RoomAPI'
import UserContainer from '@utils/state/userContainer'

const Container = styled.div`
    height: 48px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: var(--dark-background);
    border: 1px solid #d4d4d4;
`

const Time = styled.p`
    font-size: 1.1em;
    font-weight: 600;
    color: #1c1c1c;
    letter-spacing: 0.1em;
`

const format = (digit) => {
  if (digit.toString().length === 1) {
    return `0${digit}`
  }
  return `${digit}`
}

const Timer = ({ room }) => {
  const { user } = UserContainer.useContainer()
  const time = new Date()
  time.setSeconds(time.getSeconds() + 180)
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, onExpire: () => leaveRoom(user, room) })

  return (
    <Container>
      <Time>{`${format(minutes)}:${format(seconds)}`}</Time>
    </Container>
  )
}

export default Timer
