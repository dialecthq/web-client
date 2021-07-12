/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import User from '@utils/state/userContainer'
import LanguageCard from '@components/Exchange/components/LanguageCard'
import USA from '@img/flags/usa.svg'
import rooms from '@utils/data/rooms'

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #efefef;
    margin-bottom: 30px;
    justify-content: space-between;
`

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`

const Title = styled.p`
    font-size: 2.5em;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 0px;
`

const HeaderTitle = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 0px;
`

const Home = () => {
  const user = User.useContainer()
  return (
    <>
      <TitleContainer>
        <Title>Home</Title>
      </TitleContainer>
      <HeaderContainer>
        <HeaderTitle>My Rooms</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <LanguageCard title="English" flag={USA} />
        <LanguageCard />
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>Other Rooms</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        {
          rooms.map((room) => <LanguageCard title={room.language} flag={room.flag} />)
        }
      </ContentContainer>

    </>
  )
}

export default Home
