import React, { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import * as S from "./index.styled";
import list from "images/list.svg";
import close from "images/x-icon.svg";
import logo from "static/logo-white.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
  const [contactScrollPosition, setContactScrollPosition] = useState(0);
  const [topValue, setTopValue] = useState("100vh");
  let scroll = Scroll.animateScroll;

  const scrollAction = (to: string) => {
    const section = document.getElementById(to);
    if (!section) return;
    scroll.scrollTo(section.offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

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
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactSectionTop = contactSection.getBoundingClientRect().top;
        setContactScrollPosition(currentPosition - contactSectionTop);
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
        <Scroll.Link
          to="main-banner"
          smooth={true}
          duration={500}
          style={S.LeftLinkStyle}
        >
          <S.LogoImg src={logo} alt="logo" />
          <p>정찬웅 포트폴리오</p>
        </Scroll.Link>
      </S.LeftContents>
      <S.ScrollToTopButton onClick={() => scroll.scrollToTop()}>
        <ArrowUpwardIcon />
      </S.ScrollToTopButton>
      <S.RightContents $isListOpen={isListOpen} $topValue={topValue}>
        <S.Hamburger
          src={isListOpen ? close : list}
          alt="list"
          onClick={() => setIsListOpen(!isListOpen)}
        />
        <S.RightLinkStyle
          $highlight={
            aboutScrollPosition + 70 >= scrollPosition &&
            projectScrollPosition < scrollPosition
          }
          onClick={() => scrollAction("beforeAbout")}
        >
          ABOUT
        </S.RightLinkStyle>
        <S.RightLinkStyle
          $highlight={
            projectScrollPosition >= scrollPosition &&
            blogScrollPosition < scrollPosition
          }
          onClick={() => scrollAction("projects")}
        >
          PROJECTS
        </S.RightLinkStyle>
        <S.RightLinkStyle
          $highlight={
            blogScrollPosition >= scrollPosition &&
            contactScrollPosition < scrollPosition
          }
          onClick={() => scrollAction("blog")}
        >
          BLOG
        </S.RightLinkStyle>
        <S.RightLinkStyle
          $highlight={
            contactScrollPosition >= scrollPosition &&
            contactScrollPosition < scrollPosition + window.innerHeight
          }
          onClick={() => scrollAction("contact")}
        >
          CONTACT
        </S.RightLinkStyle>
      </S.RightContents>
    </S.NavbarWrapper>
  );
};

export default Navbar;
