import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  color: #ffffff;
  top: 0vh;
  left: 0;
  z-index: 999;
  gap: 2rem;
`;

export const Hamburger = styled.img`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const LeftContents = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 2rem;
`;

export const LeftLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "row",
};

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const RightContents = styled.div<{
  $isListOpen: boolean;
  $topValue: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    position: ${(props) => (props.$topValue === "0vh" ? "fixed" : "static")};
    top: ${(props) => (props.$topValue === "0vh" ? "2rem" : "auto")};
    right: 0;
    height: 100%;
    padding-right: 1rem;
    align-items: center;

    & > *:not(:first-child) {
      display: flex;
      position: relative;
      right: ${(props) => (props.$isListOpen ? "0px" : "-120px")};
      transition: right 0.5s ease;
    }

    & > *:first-child {
      display: flex;
      margin-top: ${(props) => (props.$topValue === "0vh" ? "0" : "1.7rem")};
    }
  }
`;
