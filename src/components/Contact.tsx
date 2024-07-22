// src/components/Contact.tsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC<{ className?: string }> = ({ className }) => {
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
          toast.success("Zpráva byla úspěšně odeslána!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Došlo k chybě při odesílání zprávy.");
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
          <h2 className="contact-title">Kontakt</h2>
          <p className="contact-description">
            Kontaktujte nás pro více informací nebo konzultaci ohledně vašeho
            projektu.
          </p>
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Jméno</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše jméno"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Váš email"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Zpráva</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Vaše zpráva"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Odeslat
            </Button>
          </Form>
          <div className="contact-info">
            <p className="contact-description">E-mail: michalcovla@gmail.com</p>
            <p className="contact-description">
              Adresa: Štursova 638/43, 400 01 Ústí nad Labem
            </p>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Contact;
