import React from "react";
import * as S from "./index.styled";

interface MeteorShowerProps {
  numMeteors: number;
}

const MeteorShower: React.FC<MeteorShowerProps> = ({
  numMeteors,
}: MeteorShowerProps) => {
  const meteors = new Array(numMeteors).fill(true);
  const meteorColors = [
    "#ff0000", // 빨간색
    "#00ff00", // 초록색
    "#0000ff", // 파란색
    "#ff00ff", // 자주색
    "#ffff00", // 노란색
    "#ff9900", // 주황색
    "#ffcc00", // 연두색
    "#9966ff", // 보라색
    "#ff66cc", // 분홍색
    "#66ccff", // 하늘색
    "#cc66ff", // 엠보색
    "#66ffcc", // 민트색
    "#33cc33", // 라이트 그린
    "#ff3333", // 라이트 레드
    "#cc99cc", // 라벤더
    "#0099cc", // 스틸 블루
    "#996699", // 스틸 그레이
    "#ff9999", // 플라밍고
    "#ff6666", // 코랄 레드
    "#666699", // 코벨트
  ];

  return (
    <S.MeteorsContainer>
      {meteors.map((el, idx) => (
        <S.Meteor
          key={"meteor" + idx}
          $top={Math.floor(Math.random() * 400) - 200 + "vh"}
          $time={Math.floor(Math.random() * 100) + "s"}
          $color={meteorColors[Math.floor(Math.random() * meteorColors.length)]}
        />
      ))}
    </S.MeteorsContainer>
  );
};

export default MeteorShower;
