import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffffff;
  gap: 2rem;
`;

export const Title = styled.strong`
  font-size: 3rem;
  font-weight: 700;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #ffffff;
  gap: 2%;
`;

export const InputUserInfo = styled.input`
  width: 90%;
  height: 7%;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const InputText = styled.textarea`
  width: 90%;
  height: 50%;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  gap: 4,
  p: 4,
};
