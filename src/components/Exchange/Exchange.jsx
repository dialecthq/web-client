/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import User from '@utils/state/userContainer'
import LanguageCard from '@components/Exchange/components/LanguageCard'
import USA from '@img/flags/usa.svg'
import rooms from '@utils/data/rooms'
import Page from '@components/Exchange/components/Page'

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
  color: #1c1c1c;
  opacity: 0.7;
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
  margin-bottom: 10px;
`

const Home = () => (
  <Page>
    <TitleContainer>
      <Title>Welcome to dialect!</Title>
      <SubTitle>Click any room to connect with native speakers</SubTitle>
    </TitleContainer>
    <SectionTitleContainer>
      <SectionTitle>Available Rooms</SectionTitle>
    </SectionTitleContainer>
    <ContentContainer>
      {
        rooms.map((room) => <LanguageCard room={room} />)
      }
    </ContentContainer>

  </Page>
)

export default Home
