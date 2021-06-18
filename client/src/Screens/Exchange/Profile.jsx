/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button, Input, Form, Select,
} from 'antd';
import { FaPen } from 'react-icons/fa';
import User from '../../Containers/userContainer';
import countryOptions from '../../Data/countryOptions';
import languageOptions from '../../Data/languageOptions';
import timezoneOptions from '../../Data/timezoneOptions';
import Level from '../../Components/Reusable/Level';
import Edit from '../../Components/Reusable/Edit';
import { years, months, getDays } from '../../Data/dateOptions';

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #efefef;
    margin-bottom: 30px;
    justify-content: space-between;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;

const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;

`;

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
`;

const Title = styled.p`
    font-size: 2.5em;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 0px;
`;

const HeaderTitle = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 0px;
`;

const InfoTitle = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    color: #1c1c1c;
    min-width: 150px;
    margin-right: 10px;
`;

const InfoContent = styled.p`
    font-weight: 400;
    font-size: 1.1em;
    color: #6e6e6e;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding-right: 25px;
`;

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
`;

const EmptyText = styled.p`
    font-size: 1.1em;
    margin-bottom: 12px;
`;

const FormItem = styled(Form.Item)`
  width: 100%;
`;

const PenIcon = styled(FaPen)`
    color: #6e6e6e;
    :hover {
        cursor: pointer;
    }
`;

const Profile = () => {
  const [editing, setEditing] = useState('');
  const [inputYear, setInputYear] = useState(2002);
  const [inputMonth, setInputMonth] = useState(1);
  const user = User.useContainer();
  return (
    <>
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
              setEditing('name');
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
              setEditing('bio');
            }}
          />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>Date of birth</InfoTitle>
            {editing !== 'dob'
              ? <InfoContent>{user.user.dob || 'Not specified'}</InfoContent>
              : (
                <Edit setEditing={setEditing} initialValues={{ year: user.user.dob?.year || 2002, month: user.user.dob?.month || 1, day: user.user.dob?.day || 1 }}>
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
                    name="day"
                  >
                    <Select
                      showSearch
                      placeholder="Select a day"
                    >
                      {getDays(inputYear, inputMonth).map((day) => <Select.Option key={day}>{day}</Select.Option>)}
                    </Select>
                  </FormItem>
                </Edit>
              )}
          </ItemRow>
          {!editing && (
          <PenIcon
            onClick={() => {
              setEditing('dob');
            }}
          />
          )}
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
            <InfoContent>{countryOptions.filter((e) => e.key === user.user.living)[0]?.value || 'Not specified'}</InfoContent>
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
      </HeaderContainer>
      <ContentContainer>
        {user.user.native.map((language) => (
          <ContentRow>
            <ItemRow>
              <InfoTitle>{languageOptions.filter((e) => e.key === language.key)[0]?.value || 'No Language'}</InfoTitle>
              <Level level={language.level} />
            </ItemRow>

          </ContentRow>
        ))}
        {user.user.target.map((language) => (
          <ContentRow>
            <ItemRow>
              <InfoTitle>{languageOptions.filter((e) => e.key === language.key)[0]?.value || 'No Language'}</InfoTitle>
              <Level level={language.level} />
            </ItemRow>
          </ContentRow>
        ))}
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>Communication Tools</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <EmptyContainer>
          <EmptyText>No communications tools found</EmptyText>
          <Button type="primary">Add one</Button>
        </EmptyContainer>
      </ContentContainer>
    </>
  );
};

export default Profile;
