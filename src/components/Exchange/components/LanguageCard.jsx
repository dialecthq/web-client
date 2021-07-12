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

  @media screen and (max-width: 768px) {
    height: 100px;
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
  border: 1px solid #d4d4d4;
  background: #fff;
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
  font-size: 1.2em;
  font-weight: 500;
`

const CardPeople = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardNum = styled.p`
  font-size: 0.75;
  font-weight: 400;
  color: #d8d8d8;
  margin-left: 5px;
`

const Flag = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 10px;
`

const LanguageCard = ({ title, flag }) => {
  const [filled, setFilled] = useState(false)
  const history = useHistory()
  return (
    <CardContainer>
      <CardWrapper>
        <CardContent>
          <CardPeople style={{ marginRight: 20 }}>
            <Flag src={flag} alt="flag" />
            <CardTitle>{title}</CardTitle>
          </CardPeople>

          <CardPeople>
            <FaUserAlt size={14} color="#d8d8d8" />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum>
            <FaGhost size={14} color="#d8d8d8" style={{ marginLeft: 10 }} />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum>
            {
              filled
                ? <FaStar size={22} color="#FFBE0F" style={{ marginLeft: 10 }} onClick={() => setFilled(!filled)} />
                : <FaRegStar size={22} color="#FFBE0F" style={{ marginLeft: 10 }} onClick={() => setFilled(!filled)} />
            }
          </CardPeople>
        </CardContent>
        <CardContent>
          <Button block style={{ marginRight: 5 }} icon={<FaHeadphonesAlt style={{ marginRight: 5 }} />}>Just Listen</Button>
          <Button
            block
            type="primary"
            style={{ marginLeft: 5 }}
            icon={<FaMicrophoneAlt style={{ marginRight: 5 }} />}
            onClick={() => {
              history.push('/room')
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
