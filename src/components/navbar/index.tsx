import React from "react";
import { Link } from "react-scroll";
import * as S from "./index.styled";
import list from "images/list.svg";
import logo from "static/logo.png";

const Navbar: React.FC = () => {
  return (
    <S.NavbarWrapper>
      <S.LeftContents>
        <Link
          to="main-banner"
          smooth={true}
          duration={500}
          style={S.LeftLinkStyle}
        >
          <S.LogoImg src={logo} alt="logo" />
          <p>정찬웅 포트폴리오</p>
        </Link>
      </S.LeftContents>
      <S.RightContents>
        <S.Hamburger src={list} alt="list" />
        <Link to="about" smooth={true} duration={500}>
          <p>ABOUT</p>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <p>PROJECTS</p>
        </Link>
        <Link to="tech-stack" smooth={true} duration={500}>
          <p>TECH STACK</p>
        </Link>
      </S.RightContents>
    </S.NavbarWrapper>
  );
};

export default Navbar;
