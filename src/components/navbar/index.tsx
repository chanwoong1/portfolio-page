import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import * as S from "./index.styled";
import list from "images/list.svg";
import close from "images/x-icon.svg";
import logo from "static/logo-white.png";

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
  const [aboutScrollPosition, setAboutScrollPosition] = useState(0);
  const [projectScrollPosition, setProjectScrollPosition] = useState(0);
  const [blogScrollPosition, setBlogScrollPosition] = useState(0);
  const [archiveScrollPosition, setArchiveScrollPosition] = useState(0);
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

      // About 영역의 스크롤 위치 계산
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        setAboutScrollPosition(currentPosition - aboutSectionTop);
      }

      // Project 영역의 스크롤 위치 계산
      const projectSection = document.getElementById("projects");
      if (projectSection) {
        const projectSectionTop = projectSection.getBoundingClientRect().top;
        setProjectScrollPosition(currentPosition - projectSectionTop);
      }

      // Blog 영역의 스크롤 위치 계산
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        const blogSectionTop = blogSection.getBoundingClientRect().top;
        setBlogScrollPosition(currentPosition - blogSectionTop);
      }

      // Archive 영역의 스크롤 위치 계산
      const archiveSection = document.getElementById("archives");
      if (archiveSection) {
        const archiveSectionTop = archiveSection.getBoundingClientRect().top;
        setArchiveScrollPosition(currentPosition - archiveSectionTop);
      }
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
          <S.RightLinkStyle
            $highlight={
              aboutScrollPosition + 70 >= scrollPosition &&
              projectScrollPosition < scrollPosition
            }
          >
            ABOUT
          </S.RightLinkStyle>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <S.RightLinkStyle
            $highlight={
              projectScrollPosition >= scrollPosition &&
              blogScrollPosition < scrollPosition
            }
          >
            PROJECTS
          </S.RightLinkStyle>
        </Link>
        <Link
          to="blog"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <S.RightLinkStyle
            $highlight={
              blogScrollPosition >= scrollPosition &&
              archiveScrollPosition < scrollPosition
            }
          >
            BLOG
          </S.RightLinkStyle>
        </Link>
        <Link
          to="archives"
          smooth={true}
          duration={500}
          onClick={() => setIsListOpen(false)}
        >
          <S.RightLinkStyle
            $highlight={
              archiveScrollPosition >= scrollPosition &&
              archiveScrollPosition < scrollPosition + window.innerHeight
            }
          >
            ARCHIVES
          </S.RightLinkStyle>
        </Link>
      </S.RightContents>
    </S.NavbarWrapper>
  );
};

export default Navbar;
