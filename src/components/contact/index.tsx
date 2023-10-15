import React, { useState } from "react";
import * as S from "./index.styled";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }: ContactProps) => {
  const [isEmailSent, setIsEmailSent] = useState({
    isEmailSent: false,
    isModalOpen: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = () => {
    if (
      formData.title === "" ||
      formData.email === "" ||
      formData.name === "" ||
      formData.message === ""
    ) {
      const emptyField = [
        formData.email === "" ? "Email" : "",
        formData.name === "" ? "Name" : "",
        formData.title === "" ? "Title" : "",
        formData.message === "" ? "Message" : "",
      ].filter((field) => field !== "");
      alert(
        `모든 항목을 입력해주세요.\n현재 남은 항목: ${emptyField.join(", ")}`
      );
      return;
    }

    const templateParams = {
      title: formData.title,
      email: formData.email,
      name: formData.name,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID as string, // 서비스 ID
        process.env.EMAILJS_TEMPLATE_ID as string, // 템플릿 ID
        templateParams,
        process.env.EMAILJS_PUBLIC_KEY // public-key
      )
      .then((response) => {
        console.log("이메일이 성공적으로 보내졌습니다:", response);
        setIsEmailSent({ isEmailSent: true, isModalOpen: true });
        setFormData({
          title: "",
          email: "",
          name: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("이메일 보내기 실패:", error);
        setIsEmailSent({ isEmailSent: false, isModalOpen: true });
      });
  };

  const inputFields = [
    { id: "email", name: "email", placeholder: "Email" },
    { id: "name", name: "name", placeholder: "Name" },
    { id: "title", name: "title", placeholder: "Title" },
  ];
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
              ? "이메일이 성공적으로 보내졌습니다."
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

export default Contact;
