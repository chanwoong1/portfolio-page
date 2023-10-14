import React, { useEffect, useState } from "react";
import * as S from "./index.styled";
import RecentlyPosts from "./container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface BlogProps {
  blogRef: React.RefObject<HTMLDivElement>;
  innerWidth: number;
  innerHeight: number;
}

const axiosReq = require("axios");

const Blog: React.FC<BlogProps> = ({
  blogRef,
  innerHeight,
  innerWidth,
}: BlogProps) => {
  const accessTokenByTistory = `https://www.tistory.com/apis/blog/info?access_token=${process.env.TISTORY_ACCESS_TOKEN}&output=json`;
  const getPostsByTistory = `https://www.tistory.com/apis/post/list?access_token=${process.env.TISTORY_ACCESS_TOKEN}&output=json&blogName=`;
  const getPostById = `https://www.tistory.com/apis/post/read?access_token=${process.env.TISTORY_ACCESS_TOKEN}&output=json&blogName=`;
  const [blogData, setBlogData] = useState<any>(null);
  const [blogPosts, setBlogPosts] = useState<any>(null);
  const [blogRecentlyPosts, setBlogRecentlyPosts] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = React.useState<number | null>(null);

  useEffect(() => {
    const getTistoryData = () => {
      axiosReq
        .get(accessTokenByTistory)
        .then((response: any) => {
          // 요청이 성공하면, response.data 또는 다른 방법으로 인증 코드를 처리합니다.
          if (blogData !== null) return;
          setBlogData(response.data.tistory.item.blogs[0]);
          axiosReq
            .get(getPostsByTistory + response.data.tistory.item.blogs[0].name)
            .then((responseAboutPosts: any) => {
              if (blogPosts !== null) return;
              setBlogPosts(responseAboutPosts.data.tistory.item.posts);
              responseAboutPosts.data.tistory.item.posts.map((post: any) => {
                axiosReq
                  .get(
                    getPostById +
                      response.data.tistory.item.blogs[0].name +
                      "&postId=" +
                      post.id
                  )
                  .then((element: any) => {
                    setBlogRecentlyPosts((prev) => [
                      ...prev,
                      element.data.tistory.item,
                    ]);
                  });
              });
            })
            .catch((error: any) => {
              // 요청이 실패한 경우 오류 처리
              console.error("오류:", error);
            });
        })
        .catch((error: any) => {
          // 요청이 실패한 경우 오류 처리
          console.error("오류:", error);
        });
    };
    if (blogData === null) getTistoryData();
  }, [blogData]);

  return (
    <S.BlogWrapper id="blog" ref={blogRef}>
      <S.BlogTitle>Blog</S.BlogTitle>
      {blogData === null ? (
        <div>Loading...</div>
      ) : (
        <S.BlogContent>
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
              <S.BlogLink href={blogData.url} target="_blank" rel="noreferrer">
                블로그 바로가기
              </S.BlogLink>
            </S.BlogInfo>
          </S.BlogThumbnail>
          <S.BlogRecentlyPosts>
            <S.BlogTitle>RECENTLY POSTS</S.BlogTitle>
            {blogRecentlyPosts.length === 10 ? (
              <RecentlyPosts
                innerHeight={innerHeight}
                innerWidth={innerWidth}
                posts={blogRecentlyPosts.sort(
                  (a, b) =>
                    (new Date(b.date) as any) - (new Date(a.date) as any)
                )}
                setSelectedPost={setSelectedPost}
              />
            ) : (
              <div
                style={{
                  height: `${innerHeight * 0.65 * 0.6}px`,
                  width: `${innerWidth * 0.8}px`,
                }}
              />
            )}
          </S.BlogRecentlyPosts>
        </S.BlogContent>
      )}
      {selectedPost !== null && (
        <Modal
          open={typeof selectedPost === "number"}
          onClose={() => setSelectedPost(null)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={S.ModalStyle}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {blogRecentlyPosts[selectedPost]?.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {blogRecentlyPosts[selectedPost]?.tags.tag.join(", ")}
              </Typography>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {blogRecentlyPosts[selectedPost]?.content
                .replace(/<[^>]*>/g, "")
                .replace(/&nbsp;/g, " ")
                .slice(0, 100) + "..."}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <S.BlogLink
                href={blogRecentlyPosts[selectedPost]?.url}
                target="_blank"
                rel="noreferrer"
              >
                게시글 바로가기
              </S.BlogLink>
            </Typography>
          </Box>
        </Modal>
      )}
    </S.BlogWrapper>
  );
};

export default Blog;
