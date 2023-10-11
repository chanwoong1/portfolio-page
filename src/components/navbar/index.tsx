import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as S from "./index.styled";
import list from "images/list.svg";
import close from "images/x-icon.svg";
import logo from "static/logo-white.png";

interface NavbarProps {
  innerWidth: number;
}

const Navbar: React.FC<NavbarProps> = ({ innerWidth }: NavbarProps) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  useEffect(() => {
    if (innerWidth > 767) setIsListOpen(false);
  }, [innerWidth]);

  return (
    <S.NavbarWrapper id="navbar">
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
        <S.Hamburger
          src={isListOpen ? close : list}
          alt="list"
          onClick={() => setIsListOpen(!isListOpen)}
        />
        {isListOpen && (
          <S.ListContainer>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <p>ABOUT</p>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <p>PROJECTS</p>
            </Link>
            <Link to="tech-stack" smooth={true} duration={500}>
              <p>TECH STACK</p>
            </Link>
          </S.ListContainer>
        )}
        <Link to="about" smooth={true} duration={500} offset={-70}>
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
