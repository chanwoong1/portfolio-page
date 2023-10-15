import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

export const AboutTitle = styled.strong`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 1100px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const ModalStyle = {
  display: "flex",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: "1rem",
  gap: "1rem",
};

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
