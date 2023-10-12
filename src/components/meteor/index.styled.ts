import { before } from "node:test";
import styled, { keyframes } from "styled-components";

const meteorFall = keyframes`
  0% {
    transform: translate(0vw, 0vh);
    opacity: 0;
  }
  100% {
    transform: translate(200vw, 200vh);
    opacity: 1;
  }
`;

export const MeteorsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// export const Meteor = styled.span<{
//   $top: string;
//   $time: string;
//   $color: string;
// }>`
//   position: absolute;
//   top: ${(props) => props.$top};
//   left: ${(props) => Math.floor(Math.random() * 100 - 40) + "vw"};
//   width: 0.5rem;
//   height: 0; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
//   border-radius: 50%; /* 원 모양의 메테오를 만듭니다 */
//   background: linear-gradient(-45deg, #64748b, transparent);
//   box-shadow: 0 0 0 1px #ffffff10;
//   transform: rotate(-45deg);
//   animation: ${meteorFall} ${(props) => props.$time} linear infinite;
//   animation-delay: ${Math.random() * (0.8 - 0.2) + 0.2 + "s"};

//   &::before {
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 50%; /* 가운데로 위치시켜 원과 꼬리를 연결합니다 */
//     transform: translate(-50%, -50%) rotate(30deg);
//     width: 150px;
//     height: 0.2rem; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
//     background: linear-gradient(
//       -45deg,
//       ${(props) => props.$color},
//       transparent
//     );
//   }
// `;

export const Meteor = styled.span.attrs<{
  $top: string;
  $time: string;
  $color: string;
}>((props) => ({
  style: {
    top: props.$top,
    left: Math.floor(Math.random() * 100 - 40) + "vw",
    animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
  },
}))<{
  $top: string;
  $time: string;
  $color: string;
}>`
  position: absolute;
  width: 0.5rem;
  height: 0; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
  border-radius: 50%; /* 원 모양의 메테오를 만듭니다 */
  background: linear-gradient(-45deg, #64748b, transparent);
  box-shadow: 0 0 0 1px #ffffff10;
  transform: rotate(-45deg);
  animation: ${meteorFall} ${(props) => props.$time} linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%; /* 가운데로 위치시켜 원과 꼬리를 연결합니다 */
    transform: translate(-50%, -50%) rotate(30deg);
    width: 150px;
    height: 0.2rem; /* 높이를 증가시켜 원과 꼬리를 연결합니다 */
    background: linear-gradient(
      -45deg,
      ${(props) => props.$color},
      transparent
    );
  }
`;
