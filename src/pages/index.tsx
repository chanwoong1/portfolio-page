import * as React from "react"
import * as S from "./styled"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  const firstBackgroundRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // 화면 크기가 변경될 때마다 FirstBackground 컴포넌트의 높이를 조절합니다.
    const resizeHandler = () => {
      if (firstBackgroundRef.current) {
        const windowHeight = window.innerHeight;
        firstBackgroundRef.current.style.height = `${windowHeight}px`;
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
      <S.FirstBackground ref={firstBackgroundRef}>
        <p>Hello</p>
      </S.FirstBackground>
      <S.SecondBackground>
        <p>world</p>
      </S.SecondBackground>
    </S.Wrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>정찬웅 포트폴리오</title>
