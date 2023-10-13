import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Network, NodeOptions } from "vis-network";
import star from "../../images/star_white.svg";
import hoveredStar from "../../images/star_yellow.svg";

interface RecentlyPostsProps {
  innerWidth: number;
  innerHeight: number;
  posts: BlogPostType[];
  setSelectedPost: React.Dispatch<React.SetStateAction<number | null>>;
}

type BlogPostType = {
  acceptComment: string;
  acceptTrackback: string;
  categoryId: string;
  comments: string;
  content: string;
  date: string;
  id: string;
  postUrl: string;
  secondaryUrl: string;
  slogan: string;
  tags: string[];
  title: string;
  trackbacks: string;
  url: string;
  visibility: string;
};

const RecentlyPosts: React.FC<RecentlyPostsProps> = ({
  innerWidth,
  innerHeight,
  posts,
  setSelectedPost,
}: RecentlyPostsProps) => {
  const visGraphRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const nodes = posts.map((project, idx) => ({
    id: idx,
    image: hovered === idx ? hoveredStar : star,
    x: useMemo(() => innerWidth * 0.8 * Math.random(), []),
    y: useMemo(() => innerHeight * 0.4 * 0.6 * Math.random(), []),
  }));

  useEffect(() => {
    if (visGraphRef.current) {
      const network = new Network(
        visGraphRef.current,
        {
          nodes,
        },
        {
          autoResize: true,
          nodes: {
            shape: "image",
            size: 15,
            font: {
              size: 12,
              color: "white",
            },
            borderWidth: 1,
            borderWidthSelected: 3,
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
            color: "rgba(255, 255, 255, 0.5)",
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
        setSelectedPost(event.nodes[0]);
        setHovered(null);
        console.log(posts[event.nodes[0]]);
      });

      network?.on("hoverNode", (event) => {
        const nodeId = event.node;
        setHovered(nodeId);
        network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
      });

      network?.on("blurNode", () => {
        if (hovered !== null) {
          setHovered(null);
          network.redraw(); // 노드의 이미지 변경을 위해 네트워크 다시 그리기
        }
      });
    }
  }, [visGraphRef, nodes, [], []]);

  return (
    <div
      ref={visGraphRef}
      style={{
        height: `${innerHeight * 0.65 * 0.6}px`,
        width: `${innerWidth * 0.8}px`,
      }}
    />
  );
};

export default memo(RecentlyPosts);
