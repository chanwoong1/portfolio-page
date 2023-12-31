import styled, { keyframes, css } from "styled-components";

export const MainBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  color: #ffffff;
  z-index: 1;
`;

export const MainBannerTitle = styled.strong`
  font-size: 3rem;
  font-weight: 700;
  margin-left: 2rem;

  @media screen and (max-width: 1100px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const MainBannerLinker = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ffffff;
  cursor: pointer;
  z-index: 1;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ffffff }
`;

export const TypingText = styled.span<{ $typing?: boolean }>`
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  width: 100%;
  ${(props) =>
    props.$typing &&
    css`
      animation: ${typing} 2s steps(40, end),
        ${blinkCaret} 0.75s step-end infinite;
    `}
`;
