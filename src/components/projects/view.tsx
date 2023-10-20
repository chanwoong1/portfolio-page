import React, { useEffect, useState } from "react";
import * as S from "./index.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  LinkButton,
  ProjectType,
  ProjectsOf42Seoul,
  ProjectsOfDataScience,
} from "./container";
import { Button } from "@mui/material";
import {
  projectData,
  projectDataOf42Seoul,
  projectDataOfDataScience,
} from "../../data/project";
import star from "../../images/star_white.svg";
import hoveredStar from "../../images/star_yellow.svg";
import * as Scroll from "react-scroll";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  innerWidth: number;
  innerHeight: number;
}

let scroll = Scroll.animateScroll;

export const ProjectsNotMobileView: React.FC<ProjectsProps> = ({
  projectsRef,
  innerWidth,
  innerHeight,
}: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <S.ProjectWrapper id="projects" ref={projectsRef}>
      <S.ProjectTitle>PROJECTS</S.ProjectTitle>
      <S.VisNetworkContainer>
        <ProjectsOf42Seoul
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          setSelectedProject={setSelectedProject}
        />
        <ProjectsOfDataScience
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          setSelectedProject={setSelectedProject}
        />
      </S.VisNetworkContainer>
      <Modal
        open={selectedProject instanceof Object}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={S.ModalStyle}>
          <S.ModalCloseIcon onClick={() => setSelectedProject(null)} />
          <S.ModalContent>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {selectedProject?.title}
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {selectedProject?.description &&
                  selectedProject?.description.split("\n").map((line, idx) => (
                    <Typography
                      key={idx} // 고유한 key 속성 추가
                      id="modal-modal-description"
                      variant="body2"
                    >
                      {line}
                    </Typography>
                  ))}
              </div>
              {selectedProject?.mainImage && (
                <img
                  src={selectedProject?.mainImage}
                  alt={selectedProject?.title}
                  style={{
                    width: "35%",
                    height: "auto",
                  }}
                />
              )}
            </div>
            {selectedProject?.skillImages && (
              <Typography id="modal-modal-skills" variant="h5">
                SKILLS
              </Typography>
            )}
            {selectedProject?.skillImages && (
              <S.SkillsContent>
                {selectedProject?.skillImages.map((skill, idx) => (
                  <S.SkillContainer>
                    <S.SkillImage
                      src={skill.image}
                      alt={skill.name}
                      key={skill.name}
                    />
                    <S.SkillImageOverlay className="overlay">
                      <S.SkillText>{skill.name}</S.SkillText>
                    </S.SkillImageOverlay>
                  </S.SkillContainer>
                ))}
              </S.SkillsContent>
            )}
            <S.LinkContainer>
              {selectedProject?.pdfLink && (
                <Button
                  variant="contained"
                  href={selectedProject?.pdfLink}
                  target="_blank"
                  sx={{
                    width: "150px",
                    backgroundColor: "rgb(216, 130, 55)",
                    "&:hover": {
                      backgroundColor: "rgba(216, 130, 55, 0.8)",
                    },
                  }}
                >
                  PDF
                </Button>
              )}
              {selectedProject?.link && (
                <Button
                  variant="contained"
                  href={selectedProject?.link}
                  target="_blank"
                  sx={{
                    width: "150px",
                    backgroundColor: "rgb(50, 197, 179)",
                    "&:hover": {
                      backgroundColor: "rgba(50, 197, 179, 0.8)",
                    },
                  }}
                >
                  LINK
                </Button>
              )}
              {selectedProject?.blogLink && (
                <Button
                  variant="contained"
                  href={selectedProject?.blogLink}
                  target="_blank"
                  sx={{ width: "150px" }}
                >
                  BLOG
                </Button>
              )}
              {selectedProject?.sourceLink && (
                <Button
                  variant="contained"
                  href={selectedProject?.sourceLink}
                  target="_blank"
                  sx={{
                    width: "150px",
                    backgroundColor: "#000000",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                    },
                  }}
                >
                  SOURCE CODE
                </Button>
              )}
            </S.LinkContainer>
          </S.ModalContent>
        </Box>
      </Modal>
    </S.ProjectWrapper>
  );
};

export const ProjectsMobileView: React.FC<ProjectsProps> = ({
  projectsRef,
  innerWidth,
  innerHeight,
}: ProjectsProps) => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const goToProject = (projectNo: number) => {
    const projectPosition = document.getElementById("projects")?.offsetTop;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight; // 각 섹션의 높이 (100vh)
    const newScrollPosition =
      (typeof projectPosition === "undefined" ? 0 : projectPosition) +
      projectNo * sectionHeight;
    scroll.scrollTo(newScrollPosition, {
      duration: 500,
      smooth: true,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectPosition = document.getElementById("projects")?.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight; // 각 섹션의 높이 (100vh)

      // 현재 스크롤 위치에 따라 clicked 값을 계산
      const newClicked = Math.floor(
        (scrollPosition -
          (typeof projectPosition === "undefined" ? 0 : projectPosition)) /
          sectionHeight <
          0
          ? 0
          : Math.floor(
              (scrollPosition -
                (typeof projectPosition === "undefined"
                  ? 0
                  : projectPosition)) /
                sectionHeight
            ) >
            projectData.length - 1
          ? projectData.length - 1
          : Math.floor(
              (scrollPosition -
                (typeof projectPosition === "undefined"
                  ? 0
                  : projectPosition)) /
                sectionHeight
            )
      );
      setCurrentProject(newClicked);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // clicked 값이 변경될 때마다 이펙트가 재실행되도록 설정

  return (
    <S.ProjectWrapper
      id="projects"
      ref={projectsRef}
      $pnum={projectData.length}
    >
      <S.ProjectMobileWrapper>
        <S.StarsContent>
          {projectData.map((info, idx) => (
            <React.Fragment key={`info-${idx}`}>
              <S.StarIcon
                key={`star-${idx}`}
                src={currentProject === idx ? hoveredStar : star}
                onClick={() => goToProject(idx)}
              />
            </React.Fragment>
          ))}
        </S.StarsContent>
        <S.MobileContent>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" component="h2">
              {projectData[currentProject]?.title}
            </Typography>
            <Typography variant="overline" component="h2">
              {projectData[currentProject]?.category}
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {projectData[currentProject]?.description &&
                projectData[currentProject]?.description
                  .split("\n")
                  .map((line, idx) => (
                    <Typography
                      key={idx} // 고유한 key 속성 추가
                      id="modal-modal-description"
                      variant="body2"
                    >
                      {line}
                    </Typography>
                  ))}
            </div>
            {projectData[currentProject]?.mainImage && (
              <img
                src={projectData[currentProject]?.mainImage}
                alt={projectData[currentProject]?.title}
                style={{
                  width: "30%",
                  height: "auto",
                  zIndex: 1,
                }}
              />
            )}
          </div>
          {projectData[currentProject]?.skillImages && (
            <Typography id="modal-modal-skills" variant="h6">
              SKILLS
            </Typography>
          )}
          {projectData[currentProject]?.skillImages && (
            <S.SkillsContent>
              {projectData[currentProject]?.skillImages.map((skill, idx) => (
                <S.SkillContainer key={`skill-container-${idx}`}>
                  <S.SkillImage
                    src={skill.image}
                    alt={skill.name}
                    key={skill.name}
                  />
                  <S.SkillImageOverlay className="overlay">
                    <S.SkillText>{skill.name}</S.SkillText>
                  </S.SkillImageOverlay>
                </S.SkillContainer>
              ))}
            </S.SkillsContent>
          )}
          <S.LinkContainer>
            {projectData[currentProject]?.pdfLink && (
              <Button
                key={`button-pdf-${currentProject}`}
                variant="contained"
                href={projectData[currentProject]?.pdfLink}
                target="_blank"
                sx={{
                  width: "150px",
                  backgroundColor: "rgb(216, 130, 55)",
                  "&:hover": {
                    backgroundColor: "rgba(216, 130, 55, 0.8)",
                  },
                }}
              >
                PDF
              </Button>
            )}
            {projectData[currentProject]?.link && (
              <LinkButton
                idx={currentProject}
                name="LINK"
                link={projectData[currentProject]?.link as string}
                style={{
                  width: "150px",
                  backgroundColor: "rgb(50, 197, 179)",
                  "&:hover": {
                    backgroundColor: "rgba(50, 197, 179, 0.8)",
                  },
                }}
              />
            )}
            {projectData[currentProject]?.blogLink && (
              <LinkButton
                idx={currentProject}
                name="BLOG"
                link={projectData[currentProject]?.blogLink as string}
                style={{ width: "150px" }}
              />
            )}
            {projectData[currentProject]?.sourceLink && (
              <LinkButton
                idx={currentProject}
                name="SOURCE CODE"
                link={projectData[currentProject]?.sourceLink as string}
                style={{
                  width: "150px",
                  backgroundColor: "#000000",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              />
            )}
          </S.LinkContainer>
        </S.MobileContent>
      </S.ProjectMobileWrapper>
    </S.ProjectWrapper>
  );
};
