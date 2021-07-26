/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { ImConnection } from 'react-icons/im'
import { FaUser, FaArrowLeft } from 'react-icons/fa'
import HeaderLogo from '@components/common/HeaderLogo'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    padding: 8px 24px;
`

const RoomName = styled.p`
  font-size: 1.1em;
  color: #fff;
  margin-right: 15px;
`

const AmountContainer = styled.div`
  padding: 5px 10px;
  border: 0.5px solid #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const Amount = styled.p`
  margin-left: 5px;
  color: #fff;
`

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  transition: 0.2s opacity ease-in-out;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const BackText = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1em;
  margin-left: 5px;
`

const RoomHeader = ({ numParticipants, room }) => (
  <Container>
    <Wrapper>
      <HeaderLogo light />
      <ImConnection
        size={24}
        color="#FF51A4"
        style={{ transform: 'rotate(270deg)', marginRight: 5, marginLeft: 10 }}
      />
      <RoomName>English</RoomName>
      <AmountContainer>
        <FaUser size={14} color="#fff" />
        <Amount>{numParticipants}</Amount>
      </AmountContainer>
    </Wrapper>
  </Container>
)

export default RoomHeader
