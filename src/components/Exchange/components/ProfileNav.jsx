import React from 'react'
import styled from 'styled-components'
import {
  FaHome, FaUser, FaCalendarAlt, FaChalkboardTeacher
} from 'react-icons/fa'
import Logo from 'Img/logo.svg'
import User from 'Utils/state/userContainer'
import ExchangeState from 'Utils/state/exchangeContainer'

const ProfileContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 38px;

  @media screen and (max-width: 768px) {
    left: 18px;
    display: none;
  }
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  color: #454545;
  font-size: 1.3em;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Username = styled.p`
  font-size: 1em;
  color: #6e6e6e;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ProfileLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: ${(p) => (p.active ? '#bda1ff' : '#454545')};
  transition: 0.2s color ease-in-out;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    svg {
      height: 18px;
      width: 18px;
    }
  }
`

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #a8a8a8;
  border-radius: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const AvatarImg = styled.img`
  filter: grayscale(100%);
  height: 72px;
  width: 72px;

  @media screen and (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
`

const ProfileLinkText = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ProfileNav = () => {
  const user = User.useContainer()
  const exchangeState = ExchangeState.useContainer()

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <Avatar>
          <AvatarImg src={Logo} />
        </Avatar>
        <Name>{user.user.name}</Name>
        <Username>
          @
          {user.user.username}
        </Username>
        <ProfileLink
          active={exchangeState.page === 'home'}
          onClick={() => exchangeState.setPage('home')}
        >
          <FaHome />
          <ProfileLinkText>Home</ProfileLinkText>
        </ProfileLink>
        <ProfileLink
          active={exchangeState.page === 'profile'}
          onClick={() => exchangeState.setPage('profile')}
        >
          <FaUser />
          <ProfileLinkText>Profile</ProfileLinkText>
        </ProfileLink>
        <ProfileLink
          active={exchangeState.page === 'schedule'}
          onClick={() => exchangeState.setPage('schedule')}
        >
          <FaCalendarAlt />
          <ProfileLinkText>Schedule</ProfileLinkText>
        </ProfileLink>
        <ProfileLink
          active={exchangeState.page === 'find'}
          onClick={() => exchangeState.setPage('find')}
        >
          <FaChalkboardTeacher />
          <ProfileLinkText>Find</ProfileLinkText>
        </ProfileLink>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

export default ProfileNav
