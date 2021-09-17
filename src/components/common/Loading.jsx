import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Progress } from "antd"
import HeaderLogo from "./HeaderLogo"
import { Oval } from "@agney/react-loading"

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
        <Oval color="#81FDE3" width={48} style={{ marginTop: 20 }} />
      </LoadingWrapper>
    </LoadingContainer>
  )
}

export default Loading
