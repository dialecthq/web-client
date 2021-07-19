import React from 'react'
import styled from 'styled-components'
import { BiDoorOpen } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EE315E;
    margin-left: 10px;


    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
`

const LeaveButton = ({ room }) => {
  const history = useHistory()
  return (
    <Container
      onClick={() => {
        room.disconnect()
        history.push('/exchange')
      }}
    >
      <BiDoorOpen size={24} color="#fff" />
    </Container>
  )
}

export default LeaveButton
