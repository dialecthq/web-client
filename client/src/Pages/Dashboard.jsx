import React, {useEffect} from 'react'
import User from '../Containers/userContainer'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// Components
import Header from '../Components/Dashboard/Header'
import Page from '../Components/Dashboard/Page'
import Loading from './Loading'

const DashboardContainer = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: scroll;
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
            <Page>
                <h1>hello</h1>
            </Page>
        </DashboardContainer>)
    )
}

export default Dashboard