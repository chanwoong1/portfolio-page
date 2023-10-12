import styled from "styled-components";

export const Wrapper = styled.div<{ $background?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${(props) =>
    props.$background ? props.$background : ""});
`;
