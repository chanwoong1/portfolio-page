import React, { useEffect } from "react";
import * as S from "./index.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ProjectType,
  ProjectsOf42Seoul,
  ProjectsOfDataScience,
} from "./container";
import { Button } from "@mui/material";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  innerWidth: number;
  innerHeight: number;
}

const Projects: React.FC<ProjectsProps> = ({
  projectsRef,
  innerWidth,
  innerHeight,
}: ProjectsProps) => {
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectType | null>(null);

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
          {selectedProject?.mainImage && (
            <img
              src={selectedProject?.mainImage}
              alt={selectedProject?.title}
              style={{ width: "200px", height: "200px" }}
            />
          )}
          <S.ModalContent>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {selectedProject?.title}
            </Typography>
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

export default Projects;
