import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 55px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RoomHeader = () => (
  <Container />
)

export default RoomHeader
