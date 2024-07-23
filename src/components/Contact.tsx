// src/components/Contact.tsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "249478348518-26e6t8gfi50",
        "template_r10emdl",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          user_email: formData.email,
        },
        "OnQrNG00ylkC2XLbl"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(t("contact.success"));
        },
        (error) => {
          console.log(error.text);
          toast.error(t("contact.error"));
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container className={`py-5 contact ${className}`}>
      <Row>
        <Col>
          <h2 className="contact-title">{t("contact.title")}</h2>
          <p className="contact-description">{t("contact.description")}</p>
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>{t("contact.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>{t("contact.email")}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>{t("contact.message")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t("contact.submit")}
            </Button>
          </Form>
          <div className="contact-info">
            <p className="contact-description">
              {t("contact.contactInfo.email")}
            </p>
            <p className="contact-description">
              {t("contact.contactInfo.address")}
            </p>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Contact;
