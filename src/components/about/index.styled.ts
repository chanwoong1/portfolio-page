import styled, { keyframes, css } from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  width: 100%;
  height: 400vh;
  z-index: 1;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  padding-top: 10%;
  align-items: center;
  justify-content: center;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const FavoriteContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const FavoriteItem = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StarsContent = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BetweenStars = styled.div`
  display: flex;
  width: 1px;
  height: 35%;
  background-color: #ffffff;
`;

export const StarIcon = styled.img`
  width: 30px;
  height: 30px;
`;
