import styled from "styled-components";
import { Select } from "antd";
import * as languages from "../../../utils/data/languages.json";
import rooms from "../../../utils/data/rooms";
import UserContainer from "../../../utils/state/userContainer";

const FeedHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  z-index: 5;
`;

const FeedHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d4d4d480;
  background-color: #fff;
  position: fixed;
  width: calc(100vw * 0.5333333333333);

  @media screen and (max-width: 1260px) {
    width: calc((100vw - 100px) * 0.666666666666667);
  }

  @media screen and (max-width: 959px) {
    width: calc(100vw - 100px);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const HeaderTitle = styled.p`
  font-size: 1.4em;
  font-weight: 600;
  color: #000;
`;

const Selection = styled(Select)`
  .ant-select-selection-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  width: 120px;
`;

const SelectionOption = styled(Selection.Option)`
  .ant-select-item-option-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const FeedHeader = ({ language, setLanguage }) => {
  return (
    <FeedHeaderContainer>
      <FeedHeaderWrapper>
        <HeaderTitle>Home</HeaderTitle>
        <Selection defaultValue={language}>
          {rooms.map((room) => {
            return (
              <SelectionOption
                key={room.key}
                value={room.key}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img src={room.flag} height={18} width={18} />
                <p style={{ marginLeft: 8 }}>{langauges[room.key]}</p>
              </SelectionOption>
            );
          })}
        </Selection>
      </FeedHeaderWrapper>
    </FeedHeaderContainer>
  );
};

export default FeedHeader;
