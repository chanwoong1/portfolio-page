import React, { useEffect, useRef } from "react";
import * as S from "./index.styled";
import { Network } from "vis-network";
import about from "../../data/about";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  refArray: React.RefObject<HTMLDivElement>[];
}

const About: React.FC<AboutProps> = ({ aboutRef, refArray }: AboutProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);

  const nodes = about.map((project, idx) => ({
    id: idx,
    label: project.title,
    x: idx * 250,
    y: idx * 300,
  }));

  const edges = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
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
            shape: "dot",
            size: 5,
            font: {
              size: 12,
              color: "white",
            },
            borderWidth: 1,
            shadow: true,
            color: "white",
            fixed: {
              x: true,
              y: true,
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
        console.log(`project-no.${event.nodes[0]}`, event);
        const projectNo = event.nodes[0];
        if (refArray[projectNo] && refArray[projectNo].current) {
          refArray[projectNo].current?.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [visGraphRef, nodes, edges, refArray]);

  return (
    <S.AboutWrapper id="about" ref={aboutRef}>
      {/* <S.AboutTitle>ABOUT</S.AboutTitle> */}
      <div
        ref={visGraphRef}
        style={{
          height: `100%`,
          width: `100%`,
          backgroundColor: "black",
        }}
      />
    </S.AboutWrapper>
  );
};

export default About;
