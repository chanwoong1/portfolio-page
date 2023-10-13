import React, { useEffect, useRef, useMemo, memo } from "react";
import * as S from "./index.styled";
import { Network } from "vis-network";
import about from "../../data/about";
import star from "../../images/star_white.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

type AboutType = {
  title: string;
  description: string;
  image: string;
};

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] =
    React.useState<AboutType | null>(null);

  const nodes = about.map((info, idx) => ({
    id: idx,
    label: info.title,
    x: useMemo(() => Math.random() * 1000, []),
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
            shape: "image",
            image: star,
            size: 15,
            font: {
              size: 12,
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
                values.size = 17;
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
        setSelectedProject(about[projectNo]);
      });
    }
  }, [visGraphRef, nodes, edges, []]);

  return (
    <S.AboutWrapper id="about" ref={aboutRef}>
      <S.AboutTitle>ABOUT</S.AboutTitle>
      <div
        ref={visGraphRef}
        style={{
          height: `calc(100vh - 150px)`,
          width: `100%`,
        }}
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
    </S.AboutWrapper>
  );
};

export default memo(About);
