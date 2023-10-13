import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  z-index: 1;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    height: 160vh;
  }
`;

export const ProjectTitle = styled.strong`
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

export const VisNetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: #ffffff;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const VisNetworkEachContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const VisNetworkTitle = styled.strong`
  font-size: 2.5rem;
  font-weight: 400;

  @media screen and (max-width: 1100px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
