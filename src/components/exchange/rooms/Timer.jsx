import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Rate, Button } from "antd";
import { useTimer } from "react-timer-hook";
import { useRouter } from "next/router";
import firebase from "firebase";
import { leaveRoom, spendToken, addToken } from "../../../utils/apis/RoomAPI";
import UserContainer from "../../../utils/state/userContainer";
import fire from "../../../utils/fire";
import { getUser } from "../../../utils/apis/UserAPI";

const Container = styled.div`
  height: 48px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: var(--dark-background);
  border: 1px solid #d4d4d4;
`;

const Time = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  color: #1c1c1c;
  letter-spacing: 0.1em;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;
const format = (digit) => {
  if (digit.toString().length === 1) {
    return `0${digit}`;
  }
  return `${digit}`;
};

const TimerModal = styled(Modal)`
  width: 300px !important;
`;

const Timer = ({ room }) => {
  const { user, setUser } = UserContainer.useContainer();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [stars, setStars] = useState(5);
  const [loading, setLoading] = useState(false);
  const { roomMeta, isNative } = JSON.parse(room.localParticipant.metadata);
  const time = new Date();
  time.setTime(roomMeta.endTime);
  const { seconds, minutes } = useTimer(
    {
      expiryTimestamp: time,
      onExpire: async () => {
        if (!isNative) {
          await spendToken(user);
        } else {
          await addToken(user);
        }
        const userRef = await getUser();
        setUser(userRef.data());
        setVisible(true);
      },
    },
    []
  );
  const rateUser = async (rating) => {
    setLoading(true);
    fire
      .firestore()
      .collection("audio-rooms")
      .doc(room.name)
      .get()
      .then((document) => {
        const uid = document
          .data()
          .participants.filter((e) => e !== user.uid)[0];
        fire
          .firestore()
          .collection("users")
          .doc(uid)
          .get()
          .then((userDocument) => {
            const rooms = userDocument.data().rooms
              ? userDocument.data().rooms
              : 0;
            const currentRating = userDocument.data().rating
              ? userDocument.data().rating
              : 0;
            const newRating = (currentRating * rooms + rating) / (rooms + 1);
            fire
              .firestore()
              .collection("users")
              .doc(uid)
              .update({
                karma: firebase.firestore.FieldValue.increment(1),
                rooms: firebase.firestore.FieldValue.increment(1),
                rating: newRating,
              })
              .catch(() => {
                setLoading(false);
              });
          })
          .catch(() => {
            setLoading(false);
          });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Time>{`${format(minutes)}:${format(seconds)}`}</Time>
      <TimerModal
        visible={visible}
        footer={null}
        onCancel={null}
        title="How was the conversation?"
        closable={false}
      >
        <Rate
          value={stars}
          onChange={(value) => setStars(value)}
          allowClear={false}
        />
        <ButtonContainer>
          <Button
            block
            type="primary"
            style={{ marginRight: 5 }}
            loading={loading}
            onClick={async () => {
              await rateUser(stars);
              leaveRoom(user, room);
              setVisible(false);
              router.push("/exchange");
            }}
          >
            Continue
          </Button>
        </ButtonContainer>
      </TimerModal>
    </Container>
  );
};

export default Timer;
