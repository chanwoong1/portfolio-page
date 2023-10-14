import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  color: #ffffff;
  background-color: #000000;
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
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding-right: 2rem;

  & > *:first-child {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: ${(props) => (props.$topValue === "0vh" ? "fixed" : "static")};
    top: ${(props) => (props.$topValue === "0vh" ? "2rem" : "auto")};
    right: 0;
    height: 100%;
    padding-right: 1rem;
    align-items: center;
    gap: 0.7rem;

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

export const RightLinkStyle = styled.div<{ $highlight: boolean }>`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: "1.2rem";
  font-weight: 700;
  height: 2.2rem;
  border-bottom: ${(props) =>
    props.$highlight ? "2px solid #e2f702" : "2px solid #000000"};

  @media screen and (max-width: 768px) {
    width: 100px;
    justify-content: center;
    border-left: ${(props) =>
      props.$highlight ? "2px solid #e2f702" : "2px solid #00000000"};
    border-bottom: none;
  }
`;
