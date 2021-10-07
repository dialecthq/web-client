import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: ${(p) => (p.unclickable ? "none" : "pointer")};
  }
`;

const Text = styled(Image)`
  filter: ${(p) => (p.light ? "none" : "invert(0.9)")};
  margin-left: 5px;
`;

const Small = styled.img`
  margin-left: 24px;

  @media screen and (max-width: 1260px) {
    margin-left: 0px;
  }
`;
export default ({ light, unclickable, small }) => {
  const router = useRouter();
  return (
    <HeaderLogo
      onClick={() => {
        if (unclickable) return;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        router.push("/");
      }}
      unclickable={unclickable}
    >
      {small ? (
        <Small src="/small.svg" height={54} width={54} alt="logo" />
      ) : light ? (
        <Image src="/logo-white.svg" height={54} width={144} alt="logo" />
      ) : (
        <Image src="/logo.svg" height={54} width={144} alt="logo" />
      )}
    </HeaderLogo>
  );
};
