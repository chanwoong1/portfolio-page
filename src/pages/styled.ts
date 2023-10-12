import styled from "styled-components";

export const Wrapper = styled.div<{ $background?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${(props) =>
    props.$background ? props.$background : ""});
`;

export const ListContainerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    background-color: red;
  }
`;

export const ListContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  background-color: red;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background-color: green;
  }
`;
