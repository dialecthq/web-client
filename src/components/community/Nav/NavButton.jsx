import styled from "styled-components";
import Link from "next/link";

const NavButtonContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  :hover {
    cursor: pointer;
    background-color: #d4d4d440;
  }
  padding: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 12px;
  border-radius: 40px;
`;

const NavButtonTitle = styled.p`
  font-size: 1.6em;
  font-weight: ${(p) => (p.active ? 600 : 400)};
  color: #000;
  margin-left: 18px;

  @media screen and (max-width: 1260px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #000;
  }
`;

const NavButton = ({ icon, activeIcon, name, active, href }) => {
  return (
    <Link href={href} passHref>
      <NavButtonContainer>
        <IconContainer>{active ? activeIcon : icon}</IconContainer>
        <NavButtonTitle active={active}>{name}</NavButtonTitle>
      </NavButtonContainer>
    </Link>
  );
};

export default NavButton;
