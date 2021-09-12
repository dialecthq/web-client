import React, { useState } from 'react'
import styled from 'styled-components'
import {
  FaBars,
  FaQuestion,
  FaSignOutAlt,
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaChalkboardTeacher
} from 'react-icons/fa'
import {
  Popover, Divider, Menu, Button, Skeleton
} from 'antd'
import { useHistory } from 'react-router-dom'
import Logo from 'Img/logo.svg'
import User from 'Utils/state/userContainer'
import HeaderLogo from 'Components/common/HeaderLogo'
import Coin from 'Img/token.svg'
import { Cross as Hamburger } from 'hamburger-react'
import Avatar from 'Components/common/Avatar'
import strings from 'Utils/data/strings'
import { logout } from 'Utils/apis/UserAPI'

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-purple);
  z-index: 5;
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
  justify-content: center;
  align-items: center;

  display: ${(p) => (p.desktop ? 'flex' : 'none')};

  @media screen and (max-width: 768px) {
    display: ${(p) => (p.mobile ? 'flex' : 'none')};
  }
`

const AvatarIMG = styled.div`
  border-radius: 36px;
  box-shadow: ${(p) => (p.active
    ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
    : 'none')};
  transition: 0.2s box-shadow ease-in-out;
  :hover {
    cursor: pointer;
  }
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
  color: #1c1c1c78;
`

const Emph = styled.span`
  font-weight: 500;
  color: #1c1c1c1c;
`

const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  color: #454545;
  :hover {
    background: #efefef;
  }
`

const MenuModal = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  padding-top: 120px;
  padding-left: 24px;
  padding-right: 24px;
  top: ${(p) => (p.visible ? '0px' : 'calc(-100vh)')};
  opacity: ${(p) => (p.visible ? 1 : 0.1)};
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: #fff;
  transition: 0.4s all ease-in-out;

  @media screen and (min-width: 769px) {
    top: calc(-100vh);
  }
`

const ButtonText = styled.span`
  font-weight: 500;
  font-size: 1.2em;
  color: ${(p) => (p.white ? '#fff' : 'inherit')};
`

const MenuButton = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const MenuContent = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 20px;
`

const TokenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  height: 40px;
  margin-right: 10px;
`

const Header = () => {
  const { user } = User.useContainer()
  const history = useHistory()
  const [ppOpen, setPPOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const profilePopover = (
    <ProfilePopoverContainer style={{ minWidth: 200 }}>
      {user ? (
        <>
          <Username>
            {`${strings.signedInAs.capitalize()}:`}
            {' '}
            <Emph style={{ color: '#000' }}>
              @
              {user.username}
            </Emph>
          </Username>
          <Username>
            {strings.currentBalance}
            :
            {' '}
            <Emph style={{ color: '#000' }}>
              {user.tokens.toLocaleString(strings.getLanguage()) || 0}
              {' '}
            </Emph>
            <img src={Coin} alt="token" style={{ height: 16, marginRight: 5 }} />
          </Username>
          <Divider style={{ margin: '12px 0px' }} />
        </>
      ) : (
        <Skeleton />
      )}
      <Menu style={{ width: '100%' }}>
        <MenuItem icon={<FaQuestion />} key="help">
          {strings.help.capitalize()}
        </MenuItem>
        <MenuItem
          icon={<FaUser />}
          key="profile"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            history.push('/profile')
          }}
        >
          {strings.profile.capitalize()}
        </MenuItem>
        <MenuItem
          key="sign-out"
          icon={<FaSignOutAlt />}
          onClick={() => {
            logout()
            history.push('/')
          }}
        >
          {strings.signOut.capitalize()}
        </MenuItem>
      </Menu>
    </ProfilePopoverContainer>
  )

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <NavContent desktop mobile>
            <HeaderLogo light />
          </NavContent>
          <NavContent desktop>
            {user ? (
              <TokenContainer>
                <Username>
                  <Emph style={{ color: '#000', fontWeight: 700 }}>
                    {user.tokens.toLocaleString(strings.getLanguage()) || 0}
                  </Emph>
                  <img src={Coin} alt="token" style={{ height: 16, marginLeft: 5 }} />
                </Username>
              </TokenContainer>
            ) : null}
            <Popover
              content={profilePopover}
              placement="bottomLeft"
              trigger="click"
              visible={ppOpen}
              onVisibleChange={setPPOpen}
            >
              <AvatarIMG active={ppOpen} size={36}>
                <Avatar size={36} user={user} />
              </AvatarIMG>
            </Popover>
          </NavContent>
          <NavContent mobile>
            <Hamburger
              color="#fff"
              rounded
              toggled={menuVisible}
              onToggle={() => setMenuVisible(!menuVisible)}
            />
          </NavContent>
        </NavWrapper>
      </NavContainer>
      <MenuModal visible={menuVisible}>
        {user ? (
          <MenuContent>
            <ButtonText style={{ color: '#1c1c1c78' }}>
              {`${strings.signedInAs.capitalize()}:`}
              {' '}
              <Emph style={{ color: '#000' }}>
                @
                {user.username}
              </Emph>
            </ButtonText>
            <ButtonText style={{ color: '#1c1c1c78' }}>
              {strings.currentBalance}
              :
              {' '}
              <Emph style={{ color: '#1c1c1c' }}>
                {user.tokens.toLocaleString(strings.getLanguage) || 0}
                {' '}
              </Emph>
              <img src={Coin} alt="token" style={{ height: 16, marginRight: 5 }} />
            </ButtonText>
          </MenuContent>
        ) : (
          <Skeleton />
        )}
        <MenuButton
          onClick={() => {
            setMenuVisible(false)
            history.push('/about')
          }}
        >
          <ButtonText>{strings.help.capitalize()}</ButtonText>
        </MenuButton>
        <MenuButton
          onClick={() => {
            setMenuVisible(false)
            history.push('/profile')
          }}
          style={{ marginBottom: 50 }}
        >
          <ButtonText>{strings.profile.capitalize()}</ButtonText>
        </MenuButton>
        {!user ? (
          <>
            <Button
              block
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                marginBottom: 10,
                height: 60
              }}
              onClick={() => {
                setMenuVisible(false)
              }}
            >
              <ButtonText>{strings.logIn.capitalize()}</ButtonText>
            </Button>
            <Button
              block
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                height: 60
              }}
              type="primary"
              onClick={() => {
                setMenuVisible(false)
              }}
            >
              <ButtonText>{strings.getStarted.capitalize()}</ButtonText>
            </Button>
          </>
        ) : (
          <Button
            type="primary"
            block
            style={{
              height: 60,
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
            onClick={() => {
              setMenuVisible(false)
              logout()
              history.push('/')
            }}
          >
            <ButtonText>{strings.signOut.capitalize()}</ButtonText>
          </Button>
        )}
      </MenuModal>
    </>
  )
}

export default Header
