/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  Button, Input, Form, Select, Upload, message, Popconfirm
} from 'antd'
import { FaPen, FaTrash, FaUpload } from 'react-icons/fa'
import User from '@utils/state/userContainer'
import countryOptions from '@utils/data/CountryOptions'
import languageOptions from '@utils/data/LanguageOptions'
import timezoneOptions from '@utils/data/TimezoneOptions'
import levelOptions from '@utils/data/levelOptions'
import Level from '@components/common/Level'
import Edit from '@components/common/Edit'
import Page from '@components/Exchange/components/Page'
import { years, months, getDays } from '@utils/data/dateOptions'
import fire from '@utils/fire'
import Logo from '@img/logo.svg'
import { Helmet } from 'react-helmet'
import { IoLanguage } from 'react-icons/io5'

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #efefef;
    margin-bottom: 30px;
    justify-content: space-between;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    color: var(--text-color);
    margin-bottom: 0px;
`

const HeaderTitle = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0px;
`

const InfoTitle = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    color: var(--text-color);
    min-width: 150px;
    margin-right: 10px;
`

const InfoContent = styled.p`
    font-weight: 400;
    font-size: 1.1em;
    color: #808080;
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
    color: var(--text-color);
    opacity: 0.8;
    :hover {
        cursor: pointer;
        opacity: 0.6
    }
`

const GarbageIcon = styled(FaTrash)`
  color: var(--error-red);
  :hover {
    cursor: pointer;
    opacity: 0.7
  }
`

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 144px;
  width: 144px;
  border-radius: 100px;
  overflow: hidden;
`

const Avatar = styled.img`
  filter: ${(p) => (p.isAvatar ? 'none' : 'grayscale(100%)')};
  height: 168px;
  width: 168px;
  object-fit: contain;
`

const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`

const PictureActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 50px;
`

const Subtitle = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  color: #1c1c1c;
  opacity: 0.7;
`

const AddLanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Profile = () => {
  const [editing, setEditing] = useState('')
  const [inputYear, setInputYear] = useState(2002)
  const [inputMonth, setInputMonth] = useState(1)
  const { user, setUser, userAPI } = User.useContainer()

  return (
    <Page>
      <Helmet>
        <title>
          🧘 Profile - @
          {`${user.username}`}
        </title>
      </Helmet>
      <TitleContainer>
        <Title>Profile</Title>
        <Subtitle>
          <span style={{ marginRight: 10 }}>🧘</span>
          Let everyone know who you are
        </Subtitle>
      </TitleContainer>
      <HeaderContainer>
        <HeaderTitle>User Avatar</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <PictureContainer>
          <AvatarContainer>
            <Avatar src={user.avatarURL || Logo} isAvatar={user.avatarURL} alt="profile picture" />
          </AvatarContainer>
          <PictureActionContainer>
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                  message.error(`${file.name} is not a png or jpg file`)
                }
                return file.type === 'image/png' || file.type === 'image/jpeg' ? true : Upload.LIST_IGNORE
              }}
              customRequest={async ({ file, onSuccess, onError }) => {
                const storage = fire.storage()
                const metadata = {
                  contentType: file.type
                }
                const storageRef = await storage.ref()
                const imgFile = storageRef.child(`${fire.auth().currentUser.uid}/profile.png`)
                try {
                  const image = await imgFile.put(file, metadata)
                  const avatarURL = await imgFile.getDownloadURL()
                  await fire.firestore().collection('users').doc(user.uid).update({
                    avatarURL
                  })

                  const userRef = await fire.firestore().collection('users').doc(user.uid).get()
                  setUser(userRef.data())
                  onSuccess(null, image)
                } catch (e) {
                  onError(e)
                }
              }}
            >
              <Button icon={<FaUpload style={{ marginRight: 5 }} />}>{user.avatarURL ? 'Change' : 'Upload'}</Button>
            </Upload>
            {
              user.avatarURL ? (
                <Button
                  style={{ marginTop: 10 }}
                  icon={<FaTrash style={{ marginRight: 5 }} />}
                  danger
                  onClick={() => {
                    userAPI.removeAvatarURL()
                  }}
                >
                  Remove avatar
                </Button>
              ) : null
            }
          </PictureActionContainer>
        </PictureContainer>
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>Basic Information</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Display Name</InfoTitle>
            {editing !== 'name'
              ? <InfoContent>{user.name}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ name: user.name }}>
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
              ? <InfoContent>{user.bio || 'No bio yet'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ bio: user.bio || '' }}>
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
              ? <InfoContent>{user.dob ? `${user.dob?.day} / ${user.dob?.month} / ${user.dob?.year}` : 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ year: user.dob?.year || 2002, month: user.dob?.month || 1, day: user.dob?.day || 1 }}>
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
              ? <InfoContent>{user.gender || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ gender: user.gender || 'Other' }}>
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
              ? <InfoContent>{countryOptions.filter((e) => e.key === user.country)[0]?.value || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ country: countryOptions.filter((e) => e.key === user.country)[0]?.value || 'Not specified' }}>
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
              ? <InfoContent>{countryOptions.filter((e) => e.key === user.living)[0]?.value || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ country: countryOptions.filter((e) => e.key === user.living)[0]?.value || 'Not specified' }}>
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
              ? <InfoContent>{timezoneOptions.filter((e) => e.key === user.timezone)[0]?.text || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ timezone: timezoneOptions.filter((e) => e.key === user.timezone)[0]?.value || 'Not specified' }}>
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
        {user.languages.map((language, i) => (editing !== language.key ? (
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
            <Popconfirm
              title="Are you sure you want to delete this language?"
              placement="topLeft"
              onConfirm={() => {
                userAPI.deleteLanguage(language.key)
                setEditing(null)
                message.success('Successfully deleted language')
              }}
              okText="Yes"
              cancelText="No"
              icon={null}
            >
              <GarbageIcon size={24} color="#e86461" style={{ marginBottom: 24 }} />
            </Popconfirm>

          </Edit>
        )))}
        <AddLanguageContainer>
          {
            !editing
              ? (
                <Button
                  icon={<IoLanguage style={{ marginRight: 5 }} />}
                  onClick={() => {
                    setEditing('new')
                  }}
                >
                  Add language
                </Button>
              )
              : editing === 'new'
                ? (
                  <Edit index={user.languages.length} key={user.languages.length} setEditing={setEditing}>
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
                )
                : null
          }
        </AddLanguageContainer>
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
