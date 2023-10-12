import React, { memo, useMemo } from "react";
import * as S from "./index.styled";

const BackgroundSky: React.FC = () => {
  const numberOfStars = useMemo(() => Math.floor(Math.random() * 50) + 50, []);
  const stars = useMemo(
    () => new Array(numberOfStars).fill(true),
    [numberOfStars]
  );

  return (
    <S.BackgroundWrapper>
      {stars.map((el, idx) => {
        const sizeOfStar = useMemo(() => Math.floor(Math.random() * 3) + 1, []);
        return (
          <S.Star
            key={"star" + idx}
            style={{
              left: useMemo(() => Math.random() * 100 + "vw", []),
              top: useMemo(() => Math.random() * 400 + "vh", []),
              width: useMemo(() => sizeOfStar + "px", [sizeOfStar]),
              height: useMemo(() => sizeOfStar + "px", [sizeOfStar]),
            }}
          />
        );
      })}
    </S.BackgroundWrapper>
  );
};

export default memo(BackgroundSky);
