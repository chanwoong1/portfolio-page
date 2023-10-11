import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: right;
  align-items: center;
  position: sticky;
  top: 0vh;
  left: 0;
  z-index: 999;
  gap: 2rem;

  & > *:last-child {
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;

    & > *:not(:first-child) {
      display: none;
    }

    & > *:first-child {
      padding-right: 2rem;
    }
  }
`;

export const Hamburger = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
