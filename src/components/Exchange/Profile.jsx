/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Button, Input, Form, Select,
} from 'antd'
import { FaPen } from 'react-icons/fa'
import User from '@utils/state/userContainer'
import countryOptions from '@utils/data/CountryOptions'
import languageOptions from '@utils/data/LanguageOptions'
import timezoneOptions from '@utils/data/TimezoneOptions'
import levelOptions from '@utils/data/levelOptions'
import Level from '@components/common/Level'
import Edit from '@components/common/Edit'
import Page from '@components/Exchange/components/Page'
import { years, months, getDays } from '@utils/data/dateOptions'

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
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;

`

const ItemRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(100% - 25px);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

const Title = styled.p`
    font-size: 2.5em;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0px;
`

const HeaderTitle = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0px;
`

const InfoTitle = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    color: #fff;
    min-width: 150px;
    margin-right: 10px;
`

const InfoContent = styled.p`
    font-weight: 400;
    font-size: 1.1em;
    color: #f8f8f8;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-right: 25px;
`

const FormItem = styled(Form.Item)`
  width: 100%;
  margin-right: 10px;
`

const PenIcon = styled(FaPen)`
    color: #fff;
    :hover {
        cursor: pointer;
    }
`

const Profile = () => {
  const [editing, setEditing] = useState('')
  const [inputYear, setInputYear] = useState(2002)
  const [inputMonth, setInputMonth] = useState(1)
  const user = User.useContainer()
  return (
    <Page>
      <TitleContainer>
        <Title>Profile</Title>
      </TitleContainer>
      <HeaderContainer>
        <HeaderTitle>Basic Information</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Display Name</InfoTitle>
            {editing !== 'name'
              ? <InfoContent>{user.user.name}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ name: user.user.name }}>
                  <FormItem
                    name="name"
                    validateTrigger="onBlur"
                    rules={[{ required: true, message: 'Please input your name.' }]}
                  >
                    <Input />
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('name')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Bio</InfoTitle>
            {editing !== 'bio'
              ? <InfoContent>{user.user.bio || 'No bio yet'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ bio: user.user.bio || '' }}>
                  <FormItem
                    name="bio"
                    validateTrigger="onBlur"
                    rules={[{ required: true, message: 'Please input your bio.' }]}
                  >
                    <Input.TextArea autoSize />
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('bio')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Date of birth</InfoTitle>
            {editing !== 'dob'
              ? <InfoContent>{`${user.user.dob?.day} - ${user.user.dob?.month} - ${user.user.dob?.year}` || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ year: user.user.dob?.year || 2002, month: user.user.dob?.month || 1, day: user.user.dob?.day || 1 }}>
                  <FormItem
                    name="day"
                  >
                    <Select
                      showSearch
                      placeholder="Select a day"
                    >
                      {getDays(inputYear, inputMonth).map((day) => <Select.Option key={day}>{day}</Select.Option>)}
                    </Select>
                  </FormItem>
                  <FormItem
                    name="month"
                  >
                    <Select
                      showSearch
                      placeholder="Select a month"
                      onChange={setInputMonth}
                    >
                      {months.map((month) => <Select.Option key={month}>{month}</Select.Option>)}
                    </Select>
                  </FormItem>
                  <FormItem
                    name="year"
                  >
                    <Select
                      showSearch
                      placeholder="Select a year"
                      onChange={setInputYear}
                    >
                      {years.map((year) => <Select.Option key={year}>{year}</Select.Option>)}
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('dob')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Gender</InfoTitle>
            {editing !== 'gender'
              ? <InfoContent>{user.user.gender || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ gender: user.user.gender || 'Other' }}>
                  <FormItem
                    name="gender"
                  >
                    <Select
                      showSearch
                      placeholder="Select a gender"
                    >
                      <Select.Option key="Male">Male</Select.Option>
                      <Select.Option key="Female">Female</Select.Option>
                      <Select.Option key="Other">Other</Select.Option>
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('gender')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>From</InfoTitle>
            {editing !== 'country'
              ? <InfoContent>{countryOptions.filter((e) => e.key === user.user.country)[0]?.value || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ country: countryOptions.filter((e) => e.key === user.user.country)[0]?.value || 'Not specified' }}>
                  <FormItem
                    name="country"
                  >
                    <Select
                      showSearch
                      placeholder="Select a country"
                    >
                      {countryOptions.map((country) => <Select.Option key={country.value}>{country.value}</Select.Option>)}
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('country')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Living in</InfoTitle>
            {editing !== 'living'
              ? <InfoContent>{countryOptions.filter((e) => e.key === user.user.living)[0]?.value || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ country: countryOptions.filter((e) => e.key === user.user.living)[0]?.value || 'Not specified' }}>
                  <FormItem
                    name="living"
                  >
                    <Select
                      showSearch
                      placeholder="Select a country"
                    >
                      {countryOptions.map((country) => <Select.Option key={country.value}>{country.value}</Select.Option>)}
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('living')
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Timezone</InfoTitle>
            {editing !== 'timezone'
              ? <InfoContent>{timezoneOptions.filter((e) => e.key === user.user.timezone)[0]?.text || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ timezone: timezoneOptions.filter((e) => e.key === user.user.timezone)[0]?.value || 'Not specified' }}>
                  <FormItem
                    name="timezone"
                  >
                    <Select
                      showSearch
                      placeholder="Select a timezone"
                    >
                      {timezoneOptions.map((timezone) => <Select.Option key={timezone.value}>{`${timezone.value} - ${timezone.text}`}</Select.Option>)}
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing('timezone')
              }}
            />
          )}
        </ContentRow>
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>Languages</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        {user.user.languages.map((language, i) => (editing !== language.key ? (
          <ContentRow key={language.key}>
            <ItemRow>
              <InfoTitle>{languageOptions.filter((e) => e.key === language.key)[0]?.value || 'No Language'}</InfoTitle>
              <Level level={language.level} />
            </ItemRow>
            {!editing && (
              <PenIcon
                onClick={() => {
                  setEditing(language.key)
                }}
              />
            )}
          </ContentRow>
        ) : (
          <Edit index={i} key={language.key} setEditing={setEditing} initialValues={{ language: languageOptions.filter((e) => e.key === language.key)[0]?.value || 'Not specified', level: levelOptions.filter((e) => e.key === language.level)[0]?.value }}>
            <FormItem
              name="language"
            >
              <Select
                showSearch
                placeholder="Select a language"
              >
                {languageOptions.map((languageOption) => <Select.Option key={languageOption.value}>{languageOption.value}</Select.Option>)}
              </Select>
            </FormItem>
            <FormItem
              name="level"
            >
              <Select
                showSearch
                placeholder="Select a level"
              >
                {levelOptions.map((level) => (
                  <Select.Option key={level.value}>{level.value}</Select.Option>
                ))}
              </Select>
            </FormItem>
          </Edit>
        )))}
      </ContentContainer>
      {/* <HeaderContainer>
        <HeaderTitle>Communication Tools</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <EmptyContainer>
          <EmptyText>No communications tools found</EmptyText>
          <Button type="primary">Add one</Button>
        </EmptyContainer>
      </ContentContainer> */}
    </Page>
  )
}

export default Profile
