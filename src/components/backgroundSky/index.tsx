import React from "react";
import * as S from "./index.styled";

const BackgroundSky: React.FC = () => {
  const numberOfStars = Math.floor(Math.random() * 50) + 50;
  const stars = new Array(numberOfStars).fill(true);
  return (
    <S.BackgroundWrapper>
      {stars.map((el, idx) => {
        const sizeOfStar = Math.floor(Math.random() * 3) + 1;
        return (
          <S.Star
            key={"star" + idx}
            style={{
              left: Math.random() * 100 + "vw",
              top: Math.random() * 400 + "vh",
              width: sizeOfStar + "px",
              height: sizeOfStar + "px",
            }}
          />
        );
      })}
    </S.BackgroundWrapper>
  );
};

export default BackgroundSky;
