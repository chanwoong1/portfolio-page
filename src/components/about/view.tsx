import React, { useEffect } from "react";
import * as S from "./index.styled";
import { Typography } from "@mui/material";
import about from "../../data/about";
import star from "../../images/star_white.svg";
import hoveredStar from "../../images/star_yellow.svg";

interface AboutLayoutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  innerWidth: number;
  innerHeight: number;
}

const AboutView: React.FC<AboutLayoutProps> = ({
  aboutRef,
  innerWidth,
  innerHeight,
}: AboutLayoutProps) => {
  const [clicked, setClicked] = React.useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight; // 각 섹션의 높이 (100vh)

      // 현재 스크롤 위치에 따라 clicked 값을 계산
      const newClicked =
        Math.floor(scrollPosition / sectionHeight) < 1
          ? 0
          : Math.floor(scrollPosition / sectionHeight) >= 3
          ? 2
          : Math.floor(scrollPosition / sectionHeight) - 1;
      setClicked(newClicked);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // clicked 값이 변경될 때마다 이펙트가 재실행되도록 설정

  return (
    <S.AboutWrapper id="about" ref={aboutRef}>
      <S.AboutContent>
        <S.StarsContent>
          {about.map((info, idx) => (
            <React.Fragment key={`info-${idx}`}>
              <S.StarIcon
                key={`star-${idx}`}
                src={clicked === idx ? hoveredStar : star}
                onClick={() => setClicked(idx)}
              />
            </React.Fragment>
          ))}
        </S.StarsContent>
        <S.AboutItem>
          <Typography variant={innerWidth > 768 ? "h4" : "h5"} component="h2">
            {about[clicked]?.title}
          </Typography>
          {about[clicked]?.image && (
            <img
              src={about[clicked]?.image}
              alt={about[clicked]?.title}
              style={{ width: "200px", height: "auto", margin: "5%" }}
            />
          )}
          {about[clicked]?.description?.split("\n").map((line, idx) => (
            <Typography
              id="modal-modal-description"
              key={`description-${idx}`}
              variant={innerWidth > 768 ? "body1" : "body2"}
              sx={{ margin: "5px" }}
            >
              {line}
            </Typography>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {about[clicked]?.info?.map((info, idx) => (
              <S.InfoItem key={`info-item-${idx}`}>
                <info.icon style={{ width: "20px", height: "20px" }} />
                <Typography
                  id="modal-modal-description"
                  variant={innerWidth > 768 ? "body1" : "body2"}
                  sx={{ margin: "5px" }}
                >
                  {info.description}
                </Typography>
              </S.InfoItem>
            ))}
          </div>
          <S.FavoriteContent>
            {about[clicked]?.favorite?.map((favorite, idx) => (
              <S.FavoriteItem key={`favorite-item-${idx}`}>
                <favorite.icon style={{ width: "40%", height: "40%" }} />
                <Typography
                  id="modal-modal-description"
                  variant={innerWidth > 768 ? "h5" : "h6"}
                >
                  {favorite.title}
                </Typography>
                {favorite.description.split("\n").map((line, idx) => (
                  <Typography
                    key={`favorite-description-${idx}`}
                    id="modal-modal-description"
                    variant={innerWidth > 768 ? "body1" : "body2"}
                    sx={{ margin: "5px" }}
                  >
                    {line}
                  </Typography>
                ))}
              </S.FavoriteItem>
            ))}
          </S.FavoriteContent>
        </S.AboutItem>
      </S.AboutContent>
    </S.AboutWrapper>
  );
};

export default AboutView;
