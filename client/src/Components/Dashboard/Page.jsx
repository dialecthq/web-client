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
    margin-top: 55px;
`

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    align-items: center;
    max-width: 1200px;
    padding: 18px;
    width: 100%;
    position: relative;
`

const Page = ({children}) => {
    return (
        <PageContainer>
            <PageWrapper>
                <ProfileNav/>
                {children}
                <Footer />
            </PageWrapper>
        </PageContainer>
    )
}

export default Page