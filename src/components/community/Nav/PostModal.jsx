import { Modal, Select } from "antd";
import { HiX } from "react-icons/hi";
import FeedInput from "../Feed/FeedInput";
import styled from "styled-components";
import rooms from "../../../utils/data/rooms";
import * as languages from "../../../utils/data/languages.json";
import { useState } from "react";

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
  border-bottom: 1px solid #d4d4d480;
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

const Selection = styled(Select)`
  .ant-select-selection-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  width: 160px;
`;

const SelectionOption = styled(Selection.Option)`
  .ant-select-item-option-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const PostModal = ({ visible, setVisible }) => {
  const [language, setLanguage] = useState(1);
  return (
    <EdModal visible={visible} footer={null}>
      <Header>
        <HeaderItem>
          <IconButton
            onClick={() => {
              setVisible(false);
            }}
          >
            <HiX size={24} color="#000" />
          </IconButton>
        </HeaderItem>
        <HeaderItem>
          <Selection defaultValue={language} onChange={(e) => setLanguage(e)}>
            {rooms.map((room) => {
              return (
                <SelectionOption
                  key={room.key}
                  value={room.key}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}
                >
                  <img src={room.flag} height={20} width={20} />
                  <p style={{ marginLeft: 8, fontSize: 18 }}>
                    {languages[room.key]}
                  </p>
                </SelectionOption>
              );
            })}
          </Selection>
        </HeaderItem>
      </Header>
      <BodyContent>
        <BodyWrap>
          <FeedInput
            style={{ padding: 0, border: "none" }}
            onGo={() => setVisible(false)}
            language={language}
          />
        </BodyWrap>
      </BodyContent>
    </EdModal>
  );
};

export default PostModal;
