import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, Rate, Button } from 'antd'
import { useTimer } from 'react-timer-hook'
import { leaveRoom } from '@utils/apis/RoomAPI'
import UserContainer from '@utils/state/userContainer'
import { FaArrowLeft } from 'react-icons/fa'
import Coin from '@img/token.svg'
import { useHistory } from 'react-router-dom'

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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`
const format = (digit) => {
  if (digit.toString().length === 1) {
    return `0${digit}`
  }
  return `${digit}`
}

const RateModal = styled.div`

`

const TimerModal = styled(Modal)`
  width: 300px !important;
`

const Timer = ({ room }) => {
  const { user } = UserContainer.useContainer()
  const history = useHistory()
  const [visible, setVisible] = useState(false)
  const [stars, setStars] = useState(5)
  const time = new Date()
  time.setSeconds(time.getSeconds() + 5)
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
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      setVisible(true)
      // leaveRoom(user, room)
    }
  })

  return (
    <Container>
      <Time>{`${format(minutes)}:${format(seconds)}`}</Time>
      <TimerModal
        visible={visible}
        footer={null}
        onCancel={null}
        title="How was the conversation?"
        closable={false}
      >
        <Rate
          value={stars}
          onChange={(value) => setStars(value)}
          allowClear={false}
        />
        <ButtonContainer>
          <Button
            block
            style={{ marginRight: 5 }}
            icon={(
              <FaArrowLeft
                style={{ marginRight: 5 }}
              />
            )}
            onClick={() => {
              leaveRoom(user, room)
              setVisible(false)
              history.push('/exchange')
            }}
          >
            Return
          </Button>
          <Button
            type="primary"
            block
            style={{ marginLeft: 5 }}
            icon={<img src={Coin} alt="token" style={{ height: 16, marginRight: 5 }} />}
            onClick={() => {
              leaveRoom(user, room)
              setVisible(false)
            }}
          >
            Continue
          </Button>
        </ButtonContainer>
      </TimerModal>
    </Container>
  )
}

export default Timer
