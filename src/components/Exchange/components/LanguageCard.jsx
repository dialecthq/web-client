/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import {
  FaUserAlt, FaGhost, FaStar, FaRegStar, FaMicrophoneAlt, FaHeadphonesAlt
} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const CardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const CardWrapper = styled.div`
  width: 100% ;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid#38295B;
  background: #251B3D;
  transition: 0.2s all ease-in-out;
  overflow: hidden;
`

const CardContent = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.p`
  font-size: 1.4em;
  font-weight: 500;
`

const CardPeople = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardNum = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin-left: 5px;
`

const Flag = styled.img`
    height: 36px;
    width: 36px;
    margin-right: 10px;
`

const LanguageCard = ({ room }) => {
  const history = useHistory()
  return (
    <CardContainer>
      <CardWrapper>
        <CardContent>
          <CardPeople style={{ marginRight: 20 }}>
            <Flag src={room.flag} alt="flag" />
            <CardTitle>{room.value}</CardTitle>
          </CardPeople>

          <CardPeople>
            <FaUserAlt size={16} />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum>
            <FaGhost size={16} style={{ marginLeft: 10 }} />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum>
          </CardPeople>
        </CardContent>
        <CardContent>
          <Button type="primary" color="#81FDE3" block style={{ marginRight: 5, background: ' #81FDE3', color: '#000' }} icon={<FaHeadphonesAlt style={{ marginRight: 5 }} />}>Just Listen</Button>
          <Button
            block
            type="primary"
            style={{ marginLeft: 5 }}
            icon={<FaMicrophoneAlt style={{ marginRight: 5 }} />}
            onClick={() => {
              history.push({
                pathname: `/join/${room.value}`,
              })
            }}
          >
            Talk

          </Button>
        </CardContent>
      </CardWrapper>
    </CardContainer>
  )
}

export default LanguageCard
