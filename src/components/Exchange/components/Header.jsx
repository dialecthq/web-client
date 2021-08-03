/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  FaBars, FaQuestion, FaSignOutAlt, FaHome, FaUser, FaCalendarAlt, FaChalkboardTeacher,
} from 'react-icons/fa'
import { Popover, Divider, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import Logo from '@img/logo.svg'
import User from '@utils/state/userContainer'
import HeaderLogo from '@components/common/HeaderLogo'

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-purple);
    z-index: 4;
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
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

const Avatar = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
    border-radius: 100px;
    overflow: hidden;
    box-shadow: ${(p) => (p.active ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;' : 'none')};
    transition: 0.2s box-shadow ease-in-out;
    :hover {
        cursor: pointer;
    }
`

const AvatarImg = styled.img`
    filter: ${(p) => (p.isAvatar ? null : 'grayscale(100%)')};
    max-height: 56px;
    max-width: 56px;
    height: auto;
    width: auto;
`

const MenuIcon = styled(FaBars)`
    height: 24px;
    width: 24px;
    color: #454545;
    margin-right: 10px;
    :hover {
        cursor: pointer;
    }
    @media screen and (min-width: 769px) {
        display: none;
    }

`

const ProfilePopoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 12px 0px;
`

const Username = styled.p`
    font-size: 0.9em;
    margin-bottom: 0px;
    margin: 0px 12px;
    color: #454545;
    opacity: 0.6;
`

const MenuItem = styled(Menu.Item)`
    display: flex;
    align-items: center;
    color: #454545;
    :hover {
        background: #efefef;
    }
`

const Header = () => {
  const { user, userAPI } = User.useContainer()
  const history = useHistory()
  const [ppOpen, setPPOpen] = useState(false)

  const profilePopover = (
    <ProfilePopoverContainer style={{ minWidth: 200 }}>
      <Username>
        signed in as
        {' '}
        <span style={{ color: '#000' }}>
          @
          {user.username}
        </span>
      </Username>
      <Divider style={{ margin: '12px 0px' }} />
      <Menu style={{ width: '100%' }}>
        <MenuItem icon={<FaQuestion />} key="help">Help</MenuItem>
        <MenuItem
          icon={<FaUser />}
          key="profile"
          onClick={() => {
            history.push('/profile')
          }}
        >
          Profile

        </MenuItem>
        <MenuItem
          key="sign-out"
          icon={<FaSignOutAlt />}
          onClick={() => {
            userAPI.logout()
            history.push('/')
          }}
        >
          Sign out
        </MenuItem>
      </Menu>

    </ProfilePopoverContainer>
  )

  return (
    <NavContainer>
      <NavWrapper>
        <NavContent>
          <HeaderLogo light />
        </NavContent>
        <NavContent>
          <Popover
            content={profilePopover}
            placement="bottomLeft"
            trigger="click"
            visible={ppOpen}
            onVisibleChange={setPPOpen}
          >
            <Avatar active={ppOpen}>
              <AvatarImg
                isAvatar={user.avatarURL}
                src={user.avatarURL ? user.avatarURL : Logo}
              />
            </Avatar>
          </Popover>
        </NavContent>
      </NavWrapper>
    </NavContainer>
  )
}

export default Header