import React from "react";
import * as S from "./index.styled";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { inputFields } from "./container";

interface ContactViewProps {
  contactRef: React.RefObject<HTMLDivElement>;
  isEmailSent: {
    isEmailSent: boolean;
    isModalOpen: boolean;
  };
  setIsEmailSent: React.Dispatch<
    React.SetStateAction<{
      isEmailSent: boolean;
      isModalOpen: boolean;
    }>
  >;
  formData: {
    email: string;
    name: string;
    title: string;
    message: string;
  };
  sendEmail: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContactView: React.FC<ContactViewProps> = ({
  contactRef,
  isEmailSent,
  setIsEmailSent,
  formData,
  sendEmail,
  handleChange,
}: ContactViewProps) => {
  return (
    <S.Wrapper id="contact" ref={contactRef}>
      <S.Title>CONTACT</S.Title>
      <S.FormContainer>
        {inputFields.map((field) => (
          <S.InputUserInfo
            key={field.id}
            id={field.id}
            type="text"
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            autoComplete="off"
          />
        ))}
        <S.InputText
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => sendEmail()}
        >
          Send
        </Button>
      </S.FormContainer>
      <Modal
        open={isEmailSent.isModalOpen}
        onClose={() =>
          setIsEmailSent({ isEmailSent: false, isModalOpen: false })
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={S.ModalStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {isEmailSent.isEmailSent
              ? "이메일 전송 완료. 빠른 시일 내에 답변드리겠습니다."
              : "이메일 보내기 실패. 다시 시도해주세요."}
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              setIsEmailSent({ isEmailSent: false, isModalOpen: false })
            }
          >
            확인
          </Button>
        </Box>
      </Modal>
    </S.Wrapper>
  );
};

export default ContactView;
