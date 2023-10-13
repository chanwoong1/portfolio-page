import React, { useState } from "react";
import * as S from "./index.styled";

interface BlogProps {
  blogRef: React.RefObject<HTMLDivElement>;
}

const axiosReq = require("axios");

const Blog: React.FC<BlogProps> = ({ blogRef }: BlogProps) => {
  const accessTokenByTistory = `https://www.tistory.com/apis/blog/info?access_token=${process.env.TISTORY_ACCESS_TOKEN}&output=json`;
  const [blogData, setBlogData] = useState<any>(null);

  axiosReq
    .get(accessTokenByTistory)
    .then((response: any) => {
      // 요청이 성공하면, response.data 또는 다른 방법으로 인증 코드를 처리합니다.
      if (blogData === null) setBlogData(response.data.tistory.item.blogs[0]);
      console.log("인증 코드:", response.data.tistory.item.blogs[0]);
    })
    .catch((error: any) => {
      // 요청이 실패한 경우 오류 처리
      console.error("오류:", error);
    });

  return (
    <S.BlogWrapper id="blog" ref={blogRef}>
      <S.BlogTitle>Blog</S.BlogTitle>
      <S.BlogContent>
        {blogData === null ? (
          <div>Loading...</div>
        ) : (
          <>
            <S.BlogThumbnail>
              <S.BlogImage src={blogData.profileImageUrl} />
              <S.BlogInfo>
                <S.BlogName>{blogData.name}</S.BlogName>
                <S.BlogDescription>{blogData.description}</S.BlogDescription>
                <S.BlogStatistics>
                  <S.BlogStatisticsItem>
                    <strong>POSTS</strong>
                    <p>{blogData.statistics.post}</p>
                  </S.BlogStatisticsItem>
                  <S.BlogStatisticsItem>
                    <strong>COMMENTS</strong>
                    <p>{blogData.statistics.comment}</p>
                  </S.BlogStatisticsItem>
                </S.BlogStatistics>
                <S.BlogLink href={blogData.url}>블로그 바로가기</S.BlogLink>
              </S.BlogInfo>
            </S.BlogThumbnail>
          </>
        )}
      </S.BlogContent>
    </S.BlogWrapper>
  );
};

export default Blog;
