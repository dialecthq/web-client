import React from 'react'
import User from '../Containers/userContainer'
import styled from 'styled-components'
import Logo from '../Img/logo.svg'
import {FaHome, FaUser, FaCog, FaCalendarAlt, FaChalkboardTeacher} from 'react-icons/fa'

const DashboardContainer = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    overflow: scroll;
`
const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 4;
    border-bottom: 1px solid #d4d4d4;
    height: 55px;
    position: fixed;
    width: 100%;
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding-left: 18px;
    padding-right: 18px;
`

const NavContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.p`
    font-size: 2em;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
`

const LogoImg = styled.img`
    height: 48px;
    width: 48px;
`

const Link = styled.a`
    font-size: 1em;
    color: #454545;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 500;
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

const HomeContainer = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    margin-top: 55px;
`

const HomeWrapper = styled.div`
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

const ProfileLinkText = styled.p`
    font-size: 1.1em;
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 0px;
`
const Dashboard = () => {
    const user = User.useContainer()

    return (
        <DashboardContainer>
            <NavContainer>
                <NavWrapper>
                    <NavContent>
                        <LogoImg src={Logo} style={{height: 36, width:36}}/>
                        <Title>Langi</Title>
                        <Link>Exchange</Link>
                        <Link>Tutors</Link>
                        <Link>Community</Link>
                        <Link>Vocab</Link>
                    </NavContent>
                    <NavContent>
                        <Avatar>
                            <AvatarImg src={Logo} style={{height: 22, width: 22}} />
                        </Avatar>
                    </NavContent>
                </NavWrapper>
            </NavContainer>
            <HomeContainer>
                <HomeWrapper>
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
                </HomeWrapper>
            </HomeContainer>
        </DashboardContainer>
    )
}

export default Dashboard