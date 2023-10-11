import React from "react";
import * as S from "./index.styled";
import Navbar from "../navbar";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  return (
    <S.AboutWrapper id="about" ref={aboutRef}>
      <S.AboutTitle>ABOUT</S.AboutTitle>
    </S.AboutWrapper>
  );
};

export default About;
