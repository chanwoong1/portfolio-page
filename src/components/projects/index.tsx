import React, { useEffect } from "react";
import { ProjectsMobileView, ProjectsNotMobileView } from "./view";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <ProjectsMobileView
      projectsRef={projectsRef}
      innerWidth={innerWidth}
      innerHeight={innerHeight}
    />
  ) : (
    <ProjectsNotMobileView
      projectsRef={projectsRef}
      innerWidth={innerWidth}
      innerHeight={innerHeight}
    />
  );
};

export default Projects;
