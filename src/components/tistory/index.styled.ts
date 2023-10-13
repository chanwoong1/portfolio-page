import styled from "styled-components";

export const BlogWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  color: #ffffff;
`;

export const BlogTitle = styled.strong`
  font-size: 3rem;
  font-weight: 700;
`;

export const BlogContent = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlogThumbnail = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  color: #000000;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const BlogImage = styled.img`
  width: 20%;
  height: 80%;
`;

export const BlogInfo = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlogName = styled.strong`
  font-size: 2rem;
  font-weight: 700;
`;

export const BlogDescription = styled.p`
  width: 100%;
  height: 60%;
  font-size: 1.5rem;
`;