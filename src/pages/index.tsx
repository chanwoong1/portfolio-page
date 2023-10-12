import * as React from "react";
import * as S from "./styled";
import type { HeadFC, PageProps } from "gatsby";
import MainBanner from "../components/mainBanner";
import TechStack from "../components/techStack";
import About from "../components/about";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import MeteorShower from "../components/meteor";
import backgroundImage from "images/background.jpg";
import BackgroundSky from "../components/backgroundSky";

const IndexPage: React.FC<PageProps> = () => {
  const browserSizeRef = React.useRef<HTMLDivElement>(null);
  const [innerWidth, setInnerWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const resizeHandler = () => {
      if (browserSizeRef.current) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        setInnerWidth(windowWidth);
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
      <MeteorShower numMeteors={50} />
      <MainBanner mainBannerRef={browserSizeRef} />
      <Navbar innerWidth={innerWidth} />
      <About aboutRef={browserSizeRef} />
      <Projects projectsRef={browserSizeRef} />
      <TechStack techStackRef={browserSizeRef} />
    </S.Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>정찬웅 포트폴리오</title>;
