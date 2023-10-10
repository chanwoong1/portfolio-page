import styled, { keyframes, css } from "styled-components";

export const MainBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

`;

export const MainBannerTitle = styled.strong`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
`

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #333 }
`;

export const TypingText = styled.span<{ $typing?: boolean }>`
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  ${(props) =>
    props.$typing &&
    css`
      animation: ${typing} 2s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
    `}
`;
