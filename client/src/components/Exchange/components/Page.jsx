/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// Components
import Footer from './Footer'
import ProfileNav from './ProfileNav'

const PageContainer = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding: 18px;
    padding-top: 0px;
    width: 100%;
    position: relative;
`

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-left: 250px;
    min-height: 100vh;
    width: 100%;
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
    }
`

const Page = ({ children }) => (
  <PageContainer>
    <PageWrapper>
      <ProfileNav />
      <PageContent>
        {children}
      </PageContent>
      <Footer />
    </PageWrapper>
  </PageContainer>
)

export default Page
