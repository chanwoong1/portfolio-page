import React from "react";
import * as S from "./index.styled";

interface MeteorShowerProps {
  numMeteors: number;
}

const MeteorShower: React.FC<MeteorShowerProps> = ({
  numMeteors,
}: MeteorShowerProps) => {
  const meteors = new Array(numMeteors).fill(true);

  return (
    <S.MeteorsContainer>
      {meteors.map((el, idx) => (
        <S.Meteor
          key={"meteor" + idx}
          $top={Math.floor(Math.random() * 400) - 100 + "vh"}
          $time={Math.floor(Math.random() * 100) + "s"}
        />
      ))}
    </S.MeteorsContainer>
  );
};

export default MeteorShower;
