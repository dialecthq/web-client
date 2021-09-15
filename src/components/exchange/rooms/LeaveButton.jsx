import React from 'react'
import styled from 'styled-components'
import { BiDoorOpen } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { leaveRoomEarly } from '../../../Utils/apis/RoomAPI'
import { getUser } from '../../../Utils/apis/UserAPI'
import UserContainer from '../../../Utils/state/userContainer'

const Container = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ee315e;
  margin-left: 10px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const LeaveButton = ({ room }) => {
  const router = useRouter()
  const { user, setUser } = UserContainer.useContainer()
  return (
    <Container
      onClick={async () => {
        await leaveRoomEarly(user, room)
        const userRef = await getUser()
        setUser(userRef.data())
        router.push('/exchange')
      }}
    >
      <BiDoorOpen size={24} color="#fff" />
    </Container>
  )
}

export default LeaveButton
