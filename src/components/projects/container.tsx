import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import {
  projectDataOf42Seoul,
  projectDataOfDataScience,
} from "../../data/project";
import * as S from "./index.styled";
import star from "../../images/star_white.svg";
import hoveredStar from "../../images/star_yellow.svg";
import { Button } from "@mui/material";

interface ProjectsProps {
  innerWidth: number;
  innerHeight: number;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType | null>>;
}

export type ProjectType = {
  title: string;
  description: string;
  mainImage: string;
  skillImages?: {
    name: string;
    image: string;
  }[];
  x: number;
  y: number;
  sourceLink?: string;
  blogLink?: string;
  link?: string;
  pdfLink?: string;
};

export const ProjectsOf42Seoul: React.FC<ProjectsProps> = ({
  innerWidth,
  innerHeight,
  setSelectedProject,
}: ProjectsProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const nodes = projectDataOf42Seoul.map((project, idx) => ({
    id: idx,
    label: project.title,
    image: hovered === idx ? hoveredStar : star,
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
            size: 30,
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

      network?.on("blurNode", () => {
        if (hovered !== null) {
          setHovered(null);
          network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
        }
      });

      network?.on("hoverNode", (event) => {
        const nodeId = event.node;
        setHovered(nodeId);
        network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
      });

      network?.on("click", (event) => {
        const projectNo = event.nodes[0];
        setSelectedProject(projectDataOf42Seoul[projectNo]);
      });
    }
  }, [visGraphRef, nodes, edges, []]);

  return (
    <S.VisNetworkEachContainer>
      <S.VisNetworkTitle>42Seoul Projects</S.VisNetworkTitle>
      <div
        ref={visGraphRef}
        style={{
          height: `${innerHeight < 600 ? innerHeight : 600}px`,
          width: `${innerWidth < 350 ? innerWidth : 350}px`,
        }}
      />
    </S.VisNetworkEachContainer>
  );
};

export const ProjectsOfDataScience: React.FC<ProjectsProps> = ({
  innerWidth,
  innerHeight,
  setSelectedProject,
}: ProjectsProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const nodes = projectDataOfDataScience.map((project, idx) => ({
    id: idx,
    label: project.title,
    image: hovered === idx ? hoveredStar : star,
    x: innerWidth < 350 ? innerWidth * project.x : 350 * project.x,
    y: innerHeight < 600 ? innerHeight * project.y : 600 * project.y,
  }));

  const edges = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
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
            size: 30,
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

      network?.on("blurNode", () => {
        if (hovered !== null) {
          setHovered(null);
          network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
        }
      });

      network?.on("hoverNode", (event) => {
        const nodeId = event.node;
        setHovered(nodeId);
        network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
      });

      network?.on("click", (event) => {
        const projectNo = event.nodes[0];
        setSelectedProject(projectDataOfDataScience[projectNo]);
      });
    }
  }, [visGraphRef, nodes, edges, []]);

  return (
    <S.VisNetworkEachContainer>
      <S.VisNetworkTitle>Personal Projects</S.VisNetworkTitle>
      <div
        ref={visGraphRef}
        style={{
          height: `${innerHeight < 600 ? innerHeight : 600}px`,
          width: `${innerWidth < 350 ? innerWidth : 350}px`,
        }}
      />
    </S.VisNetworkEachContainer>
  );
};

interface LinkButtonProps {
  idx: number;
  name: string;
  link: string;
  style?: object;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  idx,
  link,
  name,
  style,
}: LinkButtonProps) => {
  return (
    <Button
      key={`button-${name}-${idx}`}
      variant="contained"
      href={link}
      target="_blank"
      sx={style}
    >
      {name}
    </Button>
  );
};
