import React, { useState } from "react";
import * as S from "./styled";
import type { HeadFC, PageProps } from "gatsby";
import MainBanner from "../components/mainBanner";
import TechStack from "../components/techStack";
import About from "../components/about";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import MeteorShower from "../components/meteor";
import BackgroundSky from "../components/backgroundSky";
import projects from "../data/project";

const IndexPage: React.FC<PageProps> = () => {
  const browserSizeRef = React.useRef<HTMLDivElement>(null);
  const projectRefs: React.RefObject<HTMLDivElement>[] = projects.map(() =>
    React.createRef()
  );
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const resizeHandler = () => {
      if (browserSizeRef.current) {
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
      <Navbar
        innerWidth={innerWidth}
        isListOpen={isListOpen}
        setIsListOpen={setIsListOpen}
      />
      <About aboutRef={browserSizeRef} refArray={projectRefs} />
      <Projects
        projectsRef={browserSizeRef}
        refArray={projectRefs}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      />
      <TechStack techStackRef={browserSizeRef} />
    </S.Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>정찬웅 포트폴리오</title>;
