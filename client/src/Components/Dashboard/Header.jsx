import React from 'react'
import styled from 'styled-components'
import Logo from '../../Img/logo.svg'
import {FaBars} from 'react-icons/fa'

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    z-index: 4;
    border-bottom: 1px solid #efefef;
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

const Link = styled.a`
    font-size: 1em;
    color: #454545;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Title = styled.p`
    font-size: 2em;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: 959px) {
        display: none;
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

const MenuIcon = styled(FaBars)`
    height: 24px;
    width: 24px;
    color: #454545;
    margin-right: 10px;
    @media screen and (min-width: 769px) {
        display: none;
    }

`

const Header = () => {
    return (
        <NavContainer>
                <NavWrapper>
                    <NavContent>
                        <MenuIcon />
                        <img src={Logo} style={{height: 36, width:36}} alt="logo"/>
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
    )
}

export default Header