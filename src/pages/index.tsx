import React, { useState } from "react";
import * as S from "../styles/styled";
import type { HeadFC, PageProps } from "gatsby";
import MainBanner from "../components/mainBanner";
import About from "../components/about";
import Blog from "../components/tistory";
import Archives from "../components/archives";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import MeteorShower from "../components/meteor";
import BackgroundSky from "../components/backgroundSky";
import Contact from "../components/contact";

const isBrowser = typeof window !== "undefined";

const IndexPage: React.FC<PageProps> = () => {
  const browserSizeRef = React.useRef<HTMLDivElement>(null);
  const [innerWidth, setInnerWidth] = useState<number>(
    isBrowser ? window.innerWidth : 0
  );
  const [innerHeight, setInnerHeight] = useState<number>(
    isBrowser ? window.innerHeight : 0
  );
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const resizeHandler = () => {
      if (isBrowser && browserSizeRef.current) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        setInnerWidth(windowWidth);
        setInnerHeight(windowHeight);
        browserSizeRef.current.style.height = `${windowHeight}px`;
      }
    };

    // 초기화 및 이벤트 리스너 등록
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <S.Wrapper>
      <BackgroundSky />
      <MeteorShower numMeteors={30} />
      <MainBanner mainBannerRef={browserSizeRef} innerWidth={innerWidth} />
      {isBrowser && (
        <Navbar
          innerWidth={innerWidth}
          isListOpen={isListOpen}
          setIsListOpen={setIsListOpen}
        />
      )}
      <About
        aboutRef={browserSizeRef}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      />
      <Projects
        projectsRef={browserSizeRef}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      />
      <Blog
        blogRef={browserSizeRef}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
      />
      <Contact contactRef={browserSizeRef} />
      {/* <Archives archivesRef={browserSizeRef} /> */}
    </S.Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>정찬웅 포트폴리오</title>;
