import React, { useEffect, useState } from "react";
import * as S from "./index.styled";
import { graphql, useStaticQuery } from "gatsby";

interface MainBannerProps {
  mainBannerRef: React.RefObject<HTMLDivElement>;
}

const MainBanner: React.FC<MainBannerProps> = ({ mainBannerRef }: MainBannerProps) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          mainBanner {
            introduce1
            introduce2
            introduce3
            skills
          }
        }
      }
    }
  `);
  const { introduce1, introduce2, introduce3, skills } = data.site.siteMetadata.mainBanner;
  const [typing1, setTyping1] = useState(true);
  const [typing2, setTyping2] = useState(false);
  const [introduceText1, setIntroduceText1] = useState("");
  const [introduceText2, setIntroduceText2] = useState("");
  const [introduceText3, setIntroduceText3] = useState("");
  const [introduceSkillText, setIntroduceSkillText] = useState("");
  const [index, setIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < introduce1.length) {
        setIntroduceText1((prevText) => prevText + introduce1[index]);
      } else if (index < introduce1.length + introduce2.length) {
        setTyping1(false);
        setTyping2(true);
        setIntroduceText2((prevText) => prevText + introduce2[index - introduce1.length]);
      } else if (index < introduce1.length + introduce2.length + skills[0].length) {
        setIntroduceSkillText((prevText) => prevText + skills[0][index - introduce1.length - introduce2.length]);
        setSkillIndex((prevIndex) => prevIndex + 1);
      } else if (index < introduce1.length + introduce2.length + skills[0].length + introduce3.length) {
        setIntroduceText3((prevText) => prevText + introduce3[index - introduce1.length - introduce2.length - skills[0].length]);
      } else {
        setTyping2(false);
      }
      setIndex((prevIndex) => prevIndex + 1);
    }, 100); // 한 글자씩 추가하는 간격 (100ms)

    return () => clearTimeout(timer);
  }, [index]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (skillIndex === skills[0].length) {
  //       setIntroduceSkillText((prevText) => prevText.slice(0, -1));
  //       setSkillIndex((prevIndex) => prevIndex - 1);
  //     }
  //   }, 100); // 한 글자씩 추가하는 간격 (100ms)

  //   return () => clearTimeout(timer);
  // }, [skillIndex])

  return (
    <S.MainBannerWrapper ref={mainBannerRef}>
      <S.MainBannerTitle>
        <S.TypingText $typing={typing1}>{introduceText1}</S.TypingText>
        <br />
        <S.TypingText $typing={typing2}>{`${introduceText2} ${introduceSkillText}${introduceText3}`}</S.TypingText>
      </S.MainBannerTitle>
    </S.MainBannerWrapper>
  );
};

export default MainBanner;
