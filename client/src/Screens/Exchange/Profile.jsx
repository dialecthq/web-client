import React from 'react'
import styled from 'styled-components'
import {Button} from 'antd'
import User from '../../Containers/userContainer'
import countryOptions from '../../Data/countryOptions'
import languageOptions from '../../Data/languageOptions'
import timezoneOptions from '../../Data/timezoneOptions'
import Level from '../../Components/Reusable/Level'
import {FaPen} from 'react-icons/fa'
import { useState } from 'react'

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #efefef;
    margin-bottom: 30px;
    justify-content: space-between;
`

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
`

const EditText =  styled.p`
    font-size: 1.1.em;
    color: #9C77FF;
    font-weight: 400;
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`

const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

`

const ItemRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

const Title = styled.p`
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

const InfoTitle = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    color: #1c1c1c;
    min-width: 150px;
    margin-right: 10px;
`

const InfoContent = styled.p`
    font-weight: 400;
    font-size: 1.1em;
    color: #6e6e6e;
`

const EmptyContainer = styled.div`
    display: flex;
    width: 100%;
    color: #454545;
    border-radius: 10px;
    border: 2px dashed #e8e8e8;
    height: 160px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const EmptyText = styled.p`
    font-size: 1.1em;
    margin-bottom: 12px;
`

const Profile = () => {
    const [editing, setEditing] = useState('')
    const user = User.useContainer()
    return (
        <>
            <TitleContainer>
                <Title>Profile</Title>
            </TitleContainer>
            <HeaderContainer>
                <HeaderTitle>Basic Information</HeaderTitle>
                <EditText 
                    onClick={() => {
                        setEditing('basic')
                    }}
                >
                    edit
                </EditText>
            </HeaderContainer>
            <ContentContainer>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Display Name</InfoTitle>
                        <InfoContent>{user.user.name}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Bio</InfoTitle>
                        <InfoContent>{user.user.bio || 'No bio yet'}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Date of Birth</InfoTitle>
                        <InfoContent>{user.user.dateOfBirth || 'Not specified'}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Gender</InfoTitle>
                        <InfoContent>{user.user.gender || 'Not specified'}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>From</InfoTitle>
                        <InfoContent>{countryOptions.filter((e) => e.key === user.user.country)[0]?.value || 'Not specified'}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Living in</InfoTitle>
                        <InfoContent>{countryOptions.filter((e) => e.key === user.user.living)[0]?.value  || 'Not specified'}</InfoContent>
                    </ItemRow>
                </ContentRow>
                <ContentRow>
                    <ItemRow>
                        <InfoTitle>Timezone</InfoTitle>
                        <InfoContent>{timezoneOptions.filter((e) => e.key === user.user.timezone)[0]?.text || 'Not specified'}</InfoContent>
                    </ItemRow>
                </ContentRow>
            </ContentContainer>
            <HeaderContainer>
                <HeaderTitle>Languages</HeaderTitle>
                <EditText>edit</EditText>
            </HeaderContainer>
            <ContentContainer>
                {user.user.native.map((language) => {
                    return (
                        <ContentRow>
                            <ItemRow>
                                <InfoTitle>{languageOptions.filter((e) => e.key === language.key)[0]?.value || 'No Language'}</InfoTitle>
                                <Level level={language.level}/>
                            </ItemRow>
    
                        </ContentRow>
                    )
                })}
                {user.user.target.map((language) => {
                    return (
                        <ContentRow>
                            <ItemRow>
                                <InfoTitle>{languageOptions.filter((e) => e.key === language.key)[0]?.value || 'No Language'}</InfoTitle>
                                <Level level={language.level}/>
                            </ItemRow>
                        </ContentRow>
                    )
                })}
            </ContentContainer>
            <HeaderContainer>
                <HeaderTitle>Communication Tools</HeaderTitle>
                <EditText>edit</EditText>
            </HeaderContainer>
            <ContentContainer>
                <EmptyContainer>
                    <EmptyText>No communications tools found</EmptyText>
                    <Button type="primary">Add one</Button>
                </EmptyContainer>
            </ContentContainer>
        </>
    )
}

export default Profile