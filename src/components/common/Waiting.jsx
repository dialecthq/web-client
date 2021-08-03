import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { BallTriangle, TailSpin, ThreeDots } from '@agney/react-loading'
import { Button } from 'antd'
import HeaderLogo from '@components/common/HeaderLogo'
import { leaveWaitingRoom } from '@utils/apis/RoomAPI'
import { useHistory } from 'react-router-dom'
import UserContainer from '@utils/state/userContainer'

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-background);
    color: var(--text-color);
`

const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px;
    min-width: 200px;

`

const Text = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
    letter-spacing: 0.05em;
`

const HeaderContainer = styled.div`
  
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

const HeaderWrapper = styled.div`
width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    padding: 8px 24px;
`

const Loading = ({ message }) => {
  const history = useHistory()
  const { user } = UserContainer.useContainer()
  return (
    <LoadingContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <Button
            icon={<FaArrowLeft style={{ marginRight: 5 }} />}
            onClick={() => {
              history.push('/exchange')
            }}
          >
            Back
          </Button>
          <HeaderLogo />
        </HeaderWrapper>
      </HeaderContainer>
      <LoadingWrapper>
        <ThreeDots height={24} color="#81FDE3" style={{ marginBottom: 20 }} />
        <Text>{message}</Text>
      </LoadingWrapper>
    </LoadingContainer>
  )
}

export default Loading