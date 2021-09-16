/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input, Form, Select, Upload, message, Popconfirm } from "antd";
import { FaPen, FaTrash, FaUpload, FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { IoLanguage } from "react-icons/io5";
import { useRouter } from "next/router";
import Avatar from "../components/common/Avatar";
import User from "../utils/state/userContainer";
import countryOptions from "../utils/data/CountryOptions";
import rooms from "../utils/data/rooms";
import timezoneOptions from "../utils/data/TimezoneOptions";
import levelOptions from "../utils/data/levelOptions";
import Level from "../components/common/Level";
import Edit from "../components/common/Edit";
import Page from "../components/exchange/Page";
import { years, months, getDays } from "../utils/data/dateOptions";
import fire from "../utils/fire";
import Logo from "../../public/logo.svg";
import strings from "../utils/data/strings";

import {
  removeAvatarURL,
  uploadAvatarUrl,
  validate,
  deleteLanguage,
  getUser,
} from "../utils/apis/UserAPI";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #efefef;
  margin-bottom: 30px;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  color: var(--text-color);
  margin-bottom: 0px;
`;

const HeaderTitle = styled.p`
  font-size: 1.3em;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0px;
`;

const InfoTitle = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  color: var(--text-color);
  min-width: 150px;
  margin-right: 10px;
`;

const InfoContent = styled.p`
  font-weight: 400;
  font-size: 1.1em;
  color: #808080;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding-right: 25px;
`;

const FormItem = styled(Form.Item)`
  width: 100%;
  margin-right: 10px;
`;

const PenIcon = styled(FaPen)`
  color: var(--text-color);
  opacity: 0.8;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const GarbageIcon = styled(FaTrash)`
  color: var(--error-red);
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const PictureActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 50px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  color: #1c1c1c;
  opacity: 0.7;
`;

const AddLanguageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Profile = () => {
  const [editing, setEditing] = useState("");
  const [inputYear, setInputYear] = useState(2002);
  const [inputMonth, setInputMonth] = useState(1);
  const { user, setUser } = User.useContainer();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  return (
    <Page>
      <Helmet>
        <title>
          🧘 {strings.profile.capitalize()} - @{`${user?.username}`}
        </title>
      </Helmet>
      <TitleContainer>
        <div>
          <Button
            style={{ marginBottom: 20 }}
            icon={<FaArrowLeft style={{ marginRight: 5 }} />}
            onClick={() => {
              router.push("/exchange");
            }}
          >
            {strings.back}
          </Button>
        </div>
        <Title>{strings.profile.capitalize()}</Title>
        <Subtitle>
          <span style={{ marginRight: 10 }}>🧘</span>
          {strings.letEveryoneKnow}
        </Subtitle>
      </TitleContainer>
      <HeaderContainer>
        <HeaderTitle>{strings.userAvatar}</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <PictureContainer>
          <Avatar size={144} user={user} />
          <PictureActionContainer>
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                if (file.type !== "image/png" && file.type !== "image/jpeg") {
                  message.error(strings.isNotJPGPNG);
                }
                return file.type === "image/png" || file.type === "image/jpeg"
                  ? true
                  : Upload.LIST_IGNORE;
              }}
              customRequest={async ({ file, onSuccess, onError }) => {
                await uploadAvatarUrl(user, file, onSuccess, onError);
                const userRef = await getUser();
                setUser(userRef.data());
              }}
            >
              <Button icon={<FaUpload style={{ marginRight: 5 }} />}>
                {user?.avatarURL
                  ? strings.change.capitalize()
                  : strings.upload.capitalize()}
              </Button>
            </Upload>
            {user?.avatarURL ? (
              <Button
                style={{ marginTop: 10 }}
                icon={<FaTrash style={{ marginRight: 5 }} />}
                danger
                onClick={async () => {
                  await removeAvatarURL();
                  const userRef = await getUser();
                  setUser(userRef.data());
                }}
              >
                {strings.removeAvatar}
              </Button>
            ) : null}
          </PictureActionContainer>
        </PictureContainer>
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>{strings.basicInformation}</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.displayName.capitalize()}</InfoTitle>
            {editing !== "name" ? (
              <InfoContent>{user?.name}</InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{ name: user?.name }}
              >
                <FormItem
                  name="name"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: strings.pleaseInputName }]}
                >
                  <Input />
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("name");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.username.capitalize()}</InfoTitle>
            {editing !== "username" ? (
              <InfoContent>{user?.username}</InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{ username: user?.username }}
              >
                <FormItem
                  name="username"
                  validateTrigger="onBlur"
                  rules={[
                    { required: true, message: strings.pleaseInputUsername },
                    {
                      validator: (_, value) => validate(_, value, "username"),
                      message: strings.usernameAlreadyInUse,
                    },
                  ]}
                >
                  <Input />
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("username");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.bio.capitalize()}</InfoTitle>
            {editing !== "bio" ? (
              <InfoContent>{user?.bio || strings.noBio}</InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{ bio: user?.bio || "" }}
              >
                <FormItem
                  name="bio"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: strings.pleaseInputBio }]}
                >
                  <Input.TextArea autoSize />
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("bio");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.dateOfBirth}</InfoTitle>
            {editing !== "dob" ? (
              <InfoContent>
                {user?.dob
                  ? `${user?.dob.day} / ${user?.dob.month} / ${user?.dob.year}`
                  : strings.notSpecified}
              </InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{
                  year: user?.dob.year || 2002,
                  month: user?.dob.month || 1,
                  day: user?.dob.day || 1,
                }}
              >
                <FormItem name="day">
                  <Select showSearch placeholder={strings.selectADay}>
                    {getDays(inputYear, inputMonth).map((day) => (
                      <Select.Option key={day}>{day}</Select.Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem name="month">
                  <Select
                    showSearch
                    placeholder={strings.selectAMonth}
                    onChange={setInputMonth}
                  >
                    {months.map((month) => (
                      <Select.Option key={month}>{month}</Select.Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem name="year">
                  <Select
                    showSearch
                    placeholder={strings.selectAYear}
                    onChange={setInputYear}
                  >
                    {years.map((year) => (
                      <Select.Option key={year}>{year}</Select.Option>
                    ))}
                  </Select>
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("dob");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.gender}</InfoTitle>
            {editing !== "gender" ? (
              <InfoContent>{user?.gender || strings.notSpecified}</InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{
                  gender: user?.gender || strings.other.capitalize(),
                }}
              >
                <FormItem name="gender">
                  <Select showSearch placeholder={strings.selectAGender}>
                    <Select.Option key="Male">
                      {strings.male.capitalize()}
                    </Select.Option>
                    <Select.Option key="Female">
                      {strings.female.capitalize()}
                    </Select.Option>
                    <Select.Option key="Other">
                      {strings.other.capitalize()}
                    </Select.Option>
                  </Select>
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("gender");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.from.capitalize()}</InfoTitle>
            {editing !== "country" ? (
              <InfoContent>
                {countryOptions.filter((e) => e.key === user?.country)[0]
                  ?.value || strings.notSpecified}
              </InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{
                  country:
                    countryOptions.filter((e) => e.key === user?.country)[0]
                      ?.value || strings.notSpecified,
                }}
              >
                <FormItem name="country">
                  <Select showSearch placeholder={strings.selectACountry}>
                    {countryOptions.map((country) => (
                      <Select.Option key={country.value}>
                        {country.value}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("country");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.livingIn.capitalize()}</InfoTitle>
            {editing !== "living" ? (
              <InfoContent>
                {countryOptions.filter((e) => e.key === user?.living)[0]
                  ?.value || strings.notSpecified}
              </InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{
                  country:
                    countryOptions.filter((e) => e.key === user?.living)[0]
                      ?.value || strings.notSpecified,
                }}
              >
                <FormItem name="living">
                  <Select showSearch placeholder={strings.selectACountry}>
                    {countryOptions.map((country) => (
                      <Select.Option key={country.value}>
                        {country.value}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("living");
              }}
            />
          )}
        </ContentRow>
        <ContentRow>
          <ItemRow>
            <InfoTitle>{strings.timezone.capitalize()}</InfoTitle>
            {editing !== "timezone" ? (
              <InfoContent>
                {timezoneOptions.filter((e) => e.key === user?.timezone)[0]
                  ?.text || strings.notSpecified}
              </InfoContent>
            ) : (
              <Edit
                setEditing={setEditing}
                initialValues={{
                  timezone:
                    timezoneOptions.filter((e) => e.key === user?.timezone)[0]
                      ?.value || strings.notSpecified,
                }}
              >
                <FormItem name="timezone">
                  <Select showSearch placeholder={strings.selectATimezone}>
                    {timezoneOptions.map((timezone) => (
                      <Select.Option key={timezone.value}>
                        {`${timezone.value} - ${timezone.text}`}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
              </Edit>
            )}
          </ItemRow>
          {!editing && (
            <PenIcon
              onClick={() => {
                setEditing("timezone");
              }}
            />
          )}
        </ContentRow>
      </ContentContainer>
      <HeaderContainer>
        <HeaderTitle>{strings.languages.capitalize()}</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        {user?.languages
          .sort((a, b) => (a.level > b.level ? -1 : 1))
          .map((language, i) =>
            editing !== language.key ? (
              <ContentRow key={language.key}>
                <ItemRow>
                  <InfoTitle>
                    {strings[
                      rooms
                        .filter((e) => e.key === language.key)[0]
                        .value.toLowerCase()
                    ].capitalize() || strings.noLanguage.capitalize()}
                  </InfoTitle>
                  <Level level={language.level} />
                </ItemRow>
                {!editing && (
                  <PenIcon
                    onClick={() => {
                      setEditing(language.key);
                    }}
                  />
                )}
              </ContentRow>
            ) : (
              <Edit
                index={i}
                key={language.key}
                setEditing={setEditing}
                initialValues={{
                  language:
                    strings[
                      rooms
                        .filter((e) => e.key === language.key)[0]
                        .value.toLowerCase()
                    ] || strings.notSpecified,
                  level: levelOptions.filter((e) => e.key === language.level)[0]
                    .value,
                }}
              >
                <FormItem name="language">
                  <Select showSearch placeholder="Select a language">
                    {rooms.map((languageOption) => (
                      <Select.Option key={languageOption.value}>
                        {strings[
                          languageOption.value.toLowerCase()
                        ].capitalize()}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem name="level">
                  <Select showSearch placeholder="Select a level">
                    {levelOptions.map((level) => (
                      <Select.Option key={level.value}>
                        {level.value}
                      </Select.Option>
                    ))}
                  </Select>
                </FormItem>
                <Popconfirm
                  title="Are you sure you want to delete this language?"
                  placement="topLeft"
                  onConfirm={() => {
                    deleteLanguage(user, language.key);
                    setEditing(null);
                    message.success("Successfully deleted language");
                  }}
                  okText="Yes"
                  cancelText="No"
                  icon={null}
                >
                  <GarbageIcon
                    size={24}
                    color="#e86461"
                    style={{ marginBottom: 24 }}
                  />
                </Popconfirm>
              </Edit>
            )
          )}
        <AddLanguageContainer>
          {!editing ? (
            <Button
              icon={<IoLanguage style={{ marginRight: 5 }} />}
              onClick={() => {
                setEditing("new");
              }}
            >
              {strings.addLanguage}
            </Button>
          ) : editing === "new" ? (
            <Edit
              index={user?.languages.length}
              key={user?.languages.length}
              setEditing={setEditing}
            >
              <FormItem name="language">
                <Select showSearch placeholder={strings.selectALanguage}>
                  {rooms.map((languageOption) => (
                    <Select.Option key={languageOption.value}>
                      {strings[languageOption.value.toLowerCase()].capitalize()}
                    </Select.Option>
                  ))}
                </Select>
              </FormItem>
              <FormItem name="level">
                <Select showSearch placeholder={strings.selectALevel}>
                  {levelOptions.map((level) => (
                    <Select.Option key={level.value}>
                      {level.value}
                    </Select.Option>
                  ))}
                </Select>
              </FormItem>
            </Edit>
          ) : null}
        </AddLanguageContainer>
      </ContentContainer>
    </Page>
  );
};

export default Profile;
