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
    height: 200vh;
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

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const SkillContainer = styled.div`
  position: relative;
  width: 70px;
  display: flex;
  flex-wrap: wrap;
  &:hover .overlay {
    opacity: 1;
  }
`;

export const SkillImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
`;

export const SkillText = styled.div`
  color: white;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const SkillImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 70px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #000000;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
