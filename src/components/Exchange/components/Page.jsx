/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// Components
import Footer from '@components/landing/components/common/Footer'
import Header from './Header'

const PageContainer = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
    min-height: 100vh;
    background: var(--dark-background);
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
    margin-bottom: 60px;
    width: 100%;
`

const Page = ({ children }) => (
  <>
    <PageContainer>
      <PageWrapper>
        <Header />
        <PageContent>
          {children}
        </PageContent>
      </PageWrapper>
    </PageContainer>
    <Footer />
  </>
)

export default Page
