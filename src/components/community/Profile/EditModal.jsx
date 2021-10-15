import { Modal, Input } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import FollowButton from "./FollowButton";

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

const EditModal = ({ visible, setVisible, profile }) => {
  return (
    <EdModal visible={visible} footer={null} onCancel={() => setVisible(false)}>
      <Header>
        <HeaderItem>
          <IconButton>
            <HiX size={24} color="#000000" />
          </IconButton>
          <HeaderTitle>Edit profile</HeaderTitle>
        </HeaderItem>
        <HeaderItem>
          <FollowButton title="Save" style={{ marginBottom: 0 }} />
        </HeaderItem>
      </Header>
      <BodyContent>
        <p>Name</p>
        <Input />
      </BodyContent>
    </EdModal>
  );
};

export default EditModal;
