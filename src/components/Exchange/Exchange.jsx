/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import UserContainer from 'Utils/state/userContainer'
import LanguageCard from 'Components/exchange/components/LanguageCard'
import USA from 'Img/flags/usa.svg'
import rooms from 'Utils/data/rooms'
import Page from 'Components/exchange/components/Page'
import { Helmet } from 'react-helmet'
import { Skeleton } from 'antd'
import strings from 'Utils/data/strings'

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
`
const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 5px;
`

const SubTitle = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  color: #1c1c1c70;
`

const SectionTitle = styled.p`
  font-size: 1.6em;
  font-weight: 600;
  color: #1c1c1c;
`

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Home = () => {
  const { user } = UserContainer.useContainer()

  const langIsNative = (key) => user.languages.some((e) => e.key === key && e.level === 7)

  return (
    <Page>
      <Helmet>
        <title>
          💬
          {strings.exchange}
        </title>
      </Helmet>
      <TitleContainer>
        <Title>{strings.welcomeToDialect}</Title>
        <SubTitle>
          <span style={{ marginRight: 10, color: '#1c1c1c' }}>💬</span>
          {strings.clickAny}
        </SubTitle>
      </TitleContainer>
      <SectionTitleContainer>
        <SectionTitle>{strings.nativeRooms}</SectionTitle>
        <SubTitle>
          <span style={{ marginRight: 10, color: '#1c1c1c' }}>🎁</span>
          {strings.getTokens}
        </SubTitle>
      </SectionTitleContainer>
      <ContentContainer>
        {user ? (
          rooms.filter((e) => langIsNative(e.key)).map((room) => <LanguageCard room={room} />)
        ) : (
          <Skeleton />
        )}
      </ContentContainer>
      <SectionTitleContainer>
        <SectionTitle>{strings.targetRooms}</SectionTitle>

        <SubTitle>
          <span style={{ marginRight: 10, color: '#1c1c1c' }}>💸</span>
          {strings.spendTokens}
        </SubTitle>
      </SectionTitleContainer>
      <ContentContainer>
        {user ? (
          rooms.filter((e) => !langIsNative(e.key)).map((room) => <LanguageCard room={room} />)
        ) : (
          <Skeleton />
        )}
      </ContentContainer>
    </Page>
  )
}

export default Home
