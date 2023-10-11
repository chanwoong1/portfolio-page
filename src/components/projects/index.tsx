import React from "react";
import * as S from "./index.styled";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<ProjectsProps> = ({ projectsRef }: ProjectsProps) => {
  return <S.ProjectWrapper id="projects" ref={projectsRef}>
    <S.ProjectWrapper>PROJECTS</S.ProjectWrapper>
  </S.ProjectWrapper>;
}

export default Projects;
