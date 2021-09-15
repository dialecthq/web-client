import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'
import HeaderLogo from './HeaderLogo'

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-background);
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  min-width: 200px;
`

const Loading = () => {
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    setLoaded(100)
  })

  return (
    <LoadingContainer>
      <LoadingWrapper>
        <HeaderLogo />
        <Progress
          strokeColor="#81FDE3"
          percent={loaded}
          showInfo={false}
          style={{ marginTop: 20 }}
        />
      </LoadingWrapper>
    </LoadingContainer>
  )
}

export default Loading
