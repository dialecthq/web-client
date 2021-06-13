import React from 'react'
import styled from 'styled-components'
import Logo from '../../Img/logo.svg'
import User from '../../Containers/userContainer'
import {FaHome, FaUser, FaCog, FaCalendarAlt, FaChalkboardTeacher} from 'react-icons/fa'

const ProfileContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 38px;
`

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
`

const Name = styled.p`
    margin-top: 10px;
    margin-bottom: 0px;
    color: #454545;
    font-size: 1.3em;
    font-weight: 500;
`   

const Username = styled.p`
    font-size: 1em;
    color: #6e6e6e;
    font-weight: 400;
    margin-bottom: 20px;
`

const ProfileLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    color: #454545;
    transition: 0.2s all ease-in-out;

    :hover {
        cursor: pointer; 
        color: #bda1ff;
    }
`

const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #a8a8a8;
    border-radius: 100px;
`

const AvatarImg = styled.img`
    filter: grayscale(100%);
`

const ProfileLinkText = styled.p`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 0px;
`

const ProfileNav  = () => {
    const user = User.useContainer()

    return (
        <ProfileContainer>
            <ProfileWrapper>
            <Avatar>
                <AvatarImg src={Logo} style={{height: 72, width: 72}}/>
            </Avatar>
            <Name>{user.user.name}</Name>
            <Username>@{user.user.username}</Username>
                <ProfileLink>
                    <FaHome />
                    <ProfileLinkText>Home</ProfileLinkText>
                </ProfileLink>
                <ProfileLink>
                    <FaCalendarAlt />
                    <ProfileLinkText>Schedule</ProfileLinkText>
                </ProfileLink>
                <ProfileLink>
                    <FaChalkboardTeacher />
                    <ProfileLinkText>Find</ProfileLinkText>
                </ProfileLink>
                <ProfileLink>
                    <FaUser/>
                    <ProfileLinkText>Profile</ProfileLinkText>
                </ProfileLink>
                <ProfileLink>
                    <FaCog />
                    <ProfileLinkText>Settings</ProfileLinkText>
                </ProfileLink>
            </ProfileWrapper>
        </ProfileContainer>
    )
}

export default ProfileNav