import React, { useEffect } from "react";
import * as S from "./index.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ProjectType, ProjectsOf42Seoul } from "./container";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  refArray: React.RefObject<HTMLDivElement>[];
  innerWidth: number;
  innerHeight: number;
}

const Projects: React.FC<ProjectsProps> = ({
  projectsRef,
  refArray,
  innerWidth,
  innerHeight,
}: ProjectsProps) => {
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectType | null>(null);

  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);

  return (
    <S.ProjectWrapper id="projects" ref={projectsRef}>
      <S.ProjectTitle>PROJECTS</S.ProjectTitle>
      <ProjectsOf42Seoul
        refArray={refArray}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
        setSelectedProject={setSelectedProject}
      />
      <Modal
        open={selectedProject instanceof Object}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={S.ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedProject?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedProject?.description}
          </Typography>
        </Box>
      </Modal>
    </S.ProjectWrapper>
  );
};

export default Projects;
