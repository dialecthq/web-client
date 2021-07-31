import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '@img/logo.svg'
import { Progress } from 'antd'

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-background)
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
    font-size: 1.2em;
    font-weight: 500;
    color: #454545;
    margin-top: 30px;
    margin-bottom: 0px;
    text-align: center;
`

const Loading = () => {
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    setLoaded(100)
  })

  return (
    <LoadingContainer>
      <LoadingWrapper>
        <img src={Logo} alt="text" />
        <Progress strokeColor="#81FDE3" percent={loaded} showInfo={false} />
      </LoadingWrapper>
    </LoadingContainer>
  )
}

export default Loading
