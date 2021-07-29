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
  color: var(--text-color);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const CardWrapper = styled.div`
  width: 100% ;
  height: 100%;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--layer-background);
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
  font-size: 1.3em;
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
    height: 28px;
    width: 28px;
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
            {/* <FaGhost size={16} style={{ marginLeft: 10 }} />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum> */}
          </CardPeople>
        </CardContent>
        <CardContent>
          <Button
            block
            type="primary"
            icon={<FaMicrophoneAlt style={{ marginRight: 5 }} />}
            onClick={() => {
              history.push({
                pathname: `/join/${room.value}`,
              })
            }}
          >
            Join
          </Button>
        </CardContent>
      </CardWrapper>
    </CardContainer>
  )
}

export default LanguageCard
