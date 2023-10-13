import React, { useEffect, useRef } from "react";
import * as S from "./index.styled";
import { Network } from "vis-network";
import projects from "../../data/project";
import star from "../../images/star_white.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  refArray: React.RefObject<HTMLDivElement>[];
  innerWidth: number;
  innerHeight: number;
}

type ProjectType = {
  title: string;
  description: string;
  image: string;
  x: number;
  y: number;
};

const Projects: React.FC<ProjectsProps> = ({
  projectsRef,
  refArray,
  innerWidth,
  innerHeight,
}: ProjectsProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectType | null>(null);
  console.log(innerHeight, innerWidth);

  const nodes = projects.map((project, idx) => ({
    id: idx,
    label: project.title,
    x: innerWidth < 350 ? innerWidth * project.x : 350 * project.x,
    y: innerHeight < 600 ? innerHeight * project.y : 600 * project.y,
  }));

  const edges = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
  ];

  useEffect(() => {
    if (visGraphRef.current) {
      const network = new Network(
        visGraphRef.current,
        {
          nodes,
          edges,
        },
        {
          autoResize: true,
          nodes: {
            shape: "image",
            image: star,
            size: 15,
            font: {
              size: 15,
              color: "white",
            },
            borderWidth: 1,
            borderWidthSelected: 3,
            shadow: true,
            color: "white",
            fixed: {
              x: true,
              y: true,
            },
            chosen: {
              node: false,
              label: (values, id, selected, hovering) => {
                values.size = 20;
              },
            },
          },
          edges: {
            width: 1,
            color: "rgba(255, 255, 255,  0.5)",
            shadow: true,
            smooth: false,
            chosen: false,
          },
          interaction: {
            dragNodes: false,
            dragView: false,
            zoomView: false,
            hover: true,
          },
        }
      );

      network?.on("click", (event) => {
        const projectNo = event.nodes[0];
        setSelectedProject(projects[projectNo]);
      });
    }
  }, [visGraphRef, nodes, edges, refArray]);

  return (
    <S.ProjectWrapper id="projects" ref={projectsRef}>
      <S.ProjectTitle>PROJECTS</S.ProjectTitle>
      <div
        ref={visGraphRef}
        style={{
          height: `${innerHeight < 600 ? innerHeight : 600}px`,
          width: `${innerWidth < 350 ? innerWidth : 350}px`,
        }}
      />
      <Modal
        open={selectedProject !== null}
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
