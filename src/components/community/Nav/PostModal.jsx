import { Modal } from "antd";
import { HiX } from "react-icons/hi";
import FeedInput from "../Feed/FeedInput";
import styled from "styled-components";

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

const PostModal = ({ visible, setVisible }) => {
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
      </Header>
      <BodyContent>
        <BodyWrap>
          <FeedInput
            style={{ padding: 0, border: "none" }}
            onGo={() => setVisible(false)}
          />
        </BodyWrap>
      </BodyContent>
    </EdModal>
  );
};

export default PostModal;
