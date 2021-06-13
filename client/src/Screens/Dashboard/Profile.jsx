import React from 'react'
import styled from 'styled-components'
import User from '../../Containers/userContainer'

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #efefef;
    margin-bottom: 20px;
`

const Name = styled.p`
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

const Profile = () => {
    const user = User.useContainer()
    return (
        <>
            <HeaderContainer>
                <Name>{user.user.name}</Name>
            </HeaderContainer>
            <HeaderContainer>
                <HeaderTitle>Basic Information</HeaderTitle>
            </HeaderContainer>
            <HeaderContainer>
                <HeaderTitle>Languages</HeaderTitle>
            </HeaderContainer>
            <HeaderContainer>
                <HeaderTitle>Communication Tools</HeaderTitle>
            </HeaderContainer>
        </>
    )
}

export default Profile