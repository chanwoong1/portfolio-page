import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactView from "./view";

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

  return (
    <ContactView
      contactRef={contactRef}
      isEmailSent={isEmailSent}
      setIsEmailSent={setIsEmailSent}
      formData={formData}
      sendEmail={sendEmail}
      handleChange={handleChange}
    />
  );
};

export default Contact;
