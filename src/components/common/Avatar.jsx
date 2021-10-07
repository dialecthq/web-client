import React from "react";
import Avatar from "boring-avatars";
import styled from "styled-components";

const AvatarContainer = styled.div`
  width: ${(p) => `${p.size}px`};
  height: ${(p) => `${p.size}px`};
  border-radius: ${(p) => `${p.size}px`};
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AvatarImg = styled.img`
  object-fit: contain;
  width: ${(p) => `${parseInt(p.size * 1.3, 10)}px`};
  height: ${(p) => `${parseInt(p.size * 1.3, 10)}px`};
`;

const AvatarComponent = ({ user, size }) => {
  const { avatarURL, uid } = { ...user };
  return avatarURL ? (
    <AvatarContainer size={size}>
      <AvatarImg size={size} src={avatarURL || ""} />
    </AvatarContainer>
  ) : (
    <AvatarContainer size={size}>
      <Avatar
        size={size}
        name={uid}
        variant="marble"
        colors={["#1DFF00", "#FFFC00", "#FF009F", "#00CCFF", "#00FFDA"]}
      />
    </AvatarContainer>
  );
};

export default AvatarComponent;
