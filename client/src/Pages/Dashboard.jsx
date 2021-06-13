import React, {useEffect} from 'react'
import User from '../Containers/userContainer'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// Components
import Header from '../Components/Dashboard/Header'
import Footer from '../Components/Dashboard/Footer'
import ProfileNav from '../Components/Dashboard/ProfileNav'
import Loading from './Loading'

const DashboardContainer = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: scroll;
`

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
    justify-content: center;
    align-items: center;
    height: 10000px;
    max-width: 1200px;
    padding: 18px;
    width: 100%;
    position: relative;
`

const Dashboard = () => {
    const user = User.useContainer()
    const history = useHistory()

    useEffect(() => {
        if(!user.user) {
            setTimeout(() => {
                axios.get('http://localhost:9000/user').then((data) => {
                if(data.data.user) {
                    user.setUser(data.data.user)
                } else {
                    history.push('/')
                }
            }).catch(() => {
                history.push('/')
            })
            }, 1000)
        }
    }, [user, history])

    return (
        !user.user 
        ? (<Loading />)
        : (
        <DashboardContainer>
            <Header />
            <PageContainer>
                <PageWrapper>
                    <ProfileNav/>
                    <Footer />
                </PageWrapper>
            </PageContainer>
        </DashboardContainer>)
    )
}

export default Dashboard