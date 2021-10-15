import { Modal, Input, Select, Upload, message, Button } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import FollowButton from "./FollowButton";
import * as countries from "../../../utils/data/countries.json";
import * as languages from "../../../utils/data/languages.json";
import countryArray from "../../../utils/data/CountryOptions";
import languageArray from "../../../utils/data/LanguageOptions";
import levelsArray from "../../../utils/data/levelOptions";
import Avatar from "../../common/Avatar";
import { FaUpload, FaTrash } from "react-icons/fa";
import UserContainer from "../../../utils/state/userContainer";
import axios from "axios";

const EdModal = styled(Modal)`
  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.div`
  padding: 4px;
  border-radius: 32px;
  height: 32px;
  width: 32px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  :hover {
    background-color: #d4d4d4 !important;
    cursor: pointer;
  }
`;

const HeaderTitle = styled.p`
  font-size: 1.3em;
  font-weight: 600;
  margin-left: 24px;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
`;

const BodyWrapRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 4px;
`;
const PictureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
`;

const PictureActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 50px;
`;

const EditModal = ({ visible, setVisible, profile }) => {
  const [name, setName] = useState(profile.name);
  const [username, setUsername] = useState(profile.username);
  const [bio, setBio] = useState(profile.bio);
  const [countryFrom, setCountryFrom] = useState(profile.countryFrom);
  const [countryLivingIn, setCountryLivingIn] = useState(
    profile.countryLivingIn
  );
  const [languageKeys, setLanguageKeys] = useState(profile.languageKeys);
  const [languageLevels, setLanguageLevels] = useState(profile.languageLevels);
  const { user, setUser } = UserContainer.useContainer();

  const save = async () => {
    const newUser = await axios.post("/api/user/edit", {
      userId: profile.id,
      name,
      username,
      bio,
      countryFrom,
      countryLivingIn,
      languageKeys,
      languageLevels,
    });

    setUser(newUser.data);
    setVisible(false);
  };

  return (
    <EdModal visible={visible} footer={null} onCancel={() => setVisible(false)}>
      <Header>
        <HeaderItem>
          <IconButton
            onClick={() => {
              setVisible(false);
            }}
          >
            <HiX size={24} color="#000000" />
          </IconButton>
          <HeaderTitle>Edit profile</HeaderTitle>
        </HeaderItem>
        <HeaderItem>
          <FollowButton
            title="Save"
            style={{ marginBottom: 0 }}
            onClick={() => save()}
          />
        </HeaderItem>
      </Header>
      <BodyContent>
        <PictureContainer>
          <Avatar size={96} user={profile} />
          <PictureActionContainer>
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                if (file.type !== "image/png" && file.type !== "image/jpeg") {
                  message.error("not a jpeg");
                }
                return file.type === "image/png" || file.type === "image/jpeg"
                  ? true
                  : Upload.LIST_IGNORE;
              }}
              customRequest={async ({ file, onSuccess, onError }) => {
                // await uploadAvatarUrl(user, file, onSuccess, onError)
                // const userRef = await getUser()
                // setUser(userRef.data())
              }}
            >
              <Button icon={<FaUpload style={{ marginRight: 5 }} />}>
                {profile.avatar ? "Change" : "Upload"}
              </Button>
            </Upload>
            {profile.avatar ? (
              <Button
                style={{ marginTop: 10 }}
                icon={<FaTrash style={{ marginRight: 5 }} />}
                danger
                onClick={async () => {
                  //   await removeAvatarURL();
                  //   const userRef = await getUser();
                  //   setUser(userRef.data());
                }}
              >
                {strings.removeAvatar}
              </Button>
            ) : null}
          </PictureActionContainer>
        </PictureContainer>
        <BodyWrap>
          <Label>Name</Label>
          <Input
            defaultValue={profile.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </BodyWrap>
        <BodyWrap>
          <Label>Username</Label>
          <Input
            defaultValue={profile.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </BodyWrap>
        <BodyWrap>
          <Label>Bio</Label>
          <Input
            defaultValue={profile.bio}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </BodyWrap>
        <BodyWrap>
          <Label>Country from</Label>
          <Select
            defaultValue={profile.countryFrom}
            style={{ width: "100%" }}
            value={countryFrom}
            onChange={(e) => setCountryFrom(e)}
          >
            {countryArray.map((country) => {
              return (
                <Select.Option value={country.key}>
                  {countries[country.key]}
                </Select.Option>
              );
            })}
          </Select>
        </BodyWrap>
        <BodyWrap>
          <Label>Country living in</Label>
          <Select
            defaultValue={profile.countryLivingIn}
            style={{ width: "100%" }}
            value={countryLivingIn}
            onChange={(e) => setCountryLivingIn(e)}
          >
            {countryArray.map((country) => {
              return (
                <Select.Option value={country.key}>
                  {countries[country.key]}
                </Select.Option>
              );
            })}
          </Select>
        </BodyWrap>
        <BodyWrap>
          <Label>Languages</Label>
          {profile.languageKeys.map((languageKey, i) => {
            return (
              <BodyWrapRow>
                <Select
                  defaultValue={profile.languageKeys[i]}
                  style={{ width: "100%", marginRight: 12 }}
                  onChange={(e) => {
                    let tempLanguageKeys = languageKeys;
                    tempLanguageKeys[i] = e;
                    setLanguageKeys(tempLanguageKeys);
                  }}
                >
                  {languageArray.map((language) => {
                    return (
                      <Select.Option value={language.key}>
                        {languages[language.key]}
                      </Select.Option>
                    );
                  })}
                </Select>
                <Select
                  defaultValue={profile.languageLevels[i]}
                  style={{ width: "100%", marginLeft: 12 }}
                  onChange={(e) => {
                    console.log(languageLevels);
                    let tempLanguageLevels = languageLevels;
                    tempLanguageLevels[i] = e;
                    console.log(tempLanguageLevels);
                    setLanguageLevels(tempLanguageLevels);
                  }}
                >
                  {levelsArray.map((level) => {
                    return (
                      <Select.Option value={level.key}>
                        {level.value}
                      </Select.Option>
                    );
                  })}
                </Select>
              </BodyWrapRow>
            );
          })}
        </BodyWrap>
      </BodyContent>
    </EdModal>
  );
};

export default EditModal;
