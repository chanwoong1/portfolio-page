import React from "react";
import * as S from "./index.styled";

interface BlogProps {
  blogRef: React.RefObject<HTMLDivElement>;
}

const Blog: React.FC<BlogProps> = ({ blogRef }: BlogProps) => {
  return (
    <S.BlogWrapper id="blog" ref={blogRef}>
      <S.BlogTitle>Blog</S.BlogTitle>
    </S.BlogWrapper>
  );
};

export default Blog;
