import React, { useState } from "react"
import styled from "styled-components"
import { Modal, Rate, Button } from "antd"
import { useTimer } from "react-timer-hook"
import { useRouter } from "next/router"
import firebase from "firebase"
import { leaveRoom, spendToken, addToken, finishRoom } from "../../../utils/apis/RoomAPI"
import UserContainer from "../../../utils/state/userContainer"
import fire from "../../../utils/fire"
import { getUser } from "../../../utils/apis/UserAPI"
import Loading from "../../../components/common/Loading"

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

const TimerModal = styled(Modal)`
  width: 300px !important;
`

const Timer = ({ room }) => {
  const { user, setUser } = UserContainer.useContainer()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { roomMeta, isNative } = JSON.parse(room.localParticipant.metadata)
  const time = new Date()
  time.setTime(roomMeta.endTime)
  const { seconds, minutes } = useTimer(
    {
      expiryTimestamp: time,
      onExpire: async () => {
        setLoading(true)
        if (!isNative) {
          await spendToken(user)
        } else {
          await addToken(user)
        }
        await finishRoom(room)
        const userRef = await getUser()
        setUser(userRef.data())
        await leaveRoom(user, room)
        setLoading(false)
        router.push(`/rate?id=${room.name}`)
      }
    },
    []
  )

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Time>{`${format(minutes)}:${format(seconds)}`}</Time>
    </Container>
  )
}

export default Timer
