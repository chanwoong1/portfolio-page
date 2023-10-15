import React, { useEffect, useRef, useMemo, memo, useState } from "react";
import * as S from "./index.styled";
import { Network } from "vis-network";
import about from "../../data/about";
import star from "../../images/star_white.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import hoveredStar from "../../images/star_yellow.svg";
import { AboutType } from "src/data/about";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] =
    React.useState<AboutType | null>(null);

  const nodes = about.map((info, idx) => ({
    id: idx,
    label: info.title,
    image: hovered === idx ? hoveredStar : star,
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
            size: 40,
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
          {selectedProject?.image && (
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              style={{ width: "200px", height: "auto" }}
            />
          )}
          <S.ModalContent>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {selectedProject?.title}
            </Typography>
            {selectedProject?.description &&
              selectedProject?.description.split("\n").map((line, idx) => (
                <Typography id="modal-modal-description" variant="body1">
                  {line}
                </Typography>
              ))}
            {selectedProject?.info &&
              selectedProject?.info.map((info, idx) => (
                <S.InfoItem>
                  <info.icon style={{ width: "20px", height: "20px" }} />
                  <Typography id="modal-modal-description" variant="body1">
                    {info.description}
                  </Typography>
                </S.InfoItem>
              ))}
            <S.FavoriteContent>
              {selectedProject?.favorite &&
                selectedProject?.favorite.map((favorite, idx) => (
                  <S.FavoriteItem>
                    <favorite.icon style={{ width: "40%", height: "40%" }} />
                    <Typography id="modal-modal-description" variant="h6">
                      {favorite.title}
                    </Typography>
                    {favorite.description.split("\n").map((line, idx) => (
                      <Typography id="modal-modal-description" variant="body2">
                        {line}
                      </Typography>
                    ))}
                  </S.FavoriteItem>
                ))}
            </S.FavoriteContent>
          </S.ModalContent>
        </Box>
      </Modal>
    </S.AboutWrapper>
  );
};

export default memo(About);
