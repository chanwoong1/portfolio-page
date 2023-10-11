import styled, { keyframes } from "styled-components";

const meteorFall = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  100% {
    transform: translate(100vw, 100vh);
    opacity: 1;
  }
`;

export const MeteorsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Meteor = styled.span<{ $top: string }>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => Math.floor(Math.random() * (100 - 0) - 20) + "vw"};
  width: 0.5rem;
  height: 0; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
  border-radius: 50%; /* 원 모양의 메테오를 만듭니다 */
  background: linear-gradient(-45deg, #64748b, transparent);
  box-shadow: 0 0 0 1px #ffffff10;
  transform: rotate(-45deg);
  animation: ${meteorFall} ${Math.floor(Math.random() * (10 - 2) + 2) + "s"}
    linear infinite;
  animation-delay: ${Math.random() * (0.8 - 0.2) + 0.2 + "s"};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%; /* 가운데로 위치시켜 원과 꼬리를 연결합니다 */
    transform: translate(-50%, -50%) rotate(45deg);
    width: 150px;
    height: 0.1rem; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
    background: linear-gradient(-45deg, #64748b, transparent);
  }
`;
