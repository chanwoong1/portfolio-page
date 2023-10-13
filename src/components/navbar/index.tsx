import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as S from "./index.styled";
import list from "images/list.svg";
import close from "images/x-icon.svg";
import logo from "static/logo-white.png";
import { Grid, Snackbar } from "@mui/material";

interface NavbarProps {
  innerWidth: number;
  isListOpen: boolean;
  setIsListOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  innerWidth,
  isListOpen,
  setIsListOpen,
}: NavbarProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topValue, setTopValue] = useState("100vh");

  useEffect(() => {
    if (innerWidth > 767) setIsListOpen(false);

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // 계산된 top 값을 조절
      const newTopValue = `${
        100 - (currentPosition / window.innerHeight) * 100 > 0
          ? 100 - (currentPosition / window.innerHeight) * 100
          : 0
      }vh`;
      setTopValue(newTopValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [innerWidth, window.scrollY]);

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
      <S.RightContents $isListOpen={isListOpen} $topValue={topValue}>
        <S.Hamburger
          src={isListOpen ? close : list}
          alt="list"
          onClick={() => setIsListOpen(!isListOpen)}
        />
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setIsListOpen(false)}
        >
          <p>ABOUT</p>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>PROJECTS</p>
        </Link>
        <Link
          to="blog"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>BLOG</p>
        </Link>
        <Link
          to="archives"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <p>ARCHIVES</p>
        </Link>
      </S.RightContents>
    </S.NavbarWrapper>
  );
};

export default Navbar;
