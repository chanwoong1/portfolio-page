import React from "react";
import * as S from "./index.styled";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  return <S.AboutWrapper ref={aboutRef}>
    <S.AboutTitle>ABOUT</S.AboutTitle>
  </S.AboutWrapper>;
}

export default About;
