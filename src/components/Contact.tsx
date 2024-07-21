// src/components/Contact.tsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.scss";

const Contact: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={`py-5 contact ${className}`}>
      <Row>
        <Col>
          <h2 className="contact-title">Kontakt</h2>
          <p className="contact-description">
            Kontaktujte nás pro více informací nebo konzultaci ohledně vašeho
            projektu.
          </p>
          <Form className="contact-form">
            <Form.Group controlId="formName">
              <Form.Label>Jméno</Form.Label>
              <Form.Control type="text" placeholder="Vaše jméno" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Váš email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Zpráva</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Vaše zpráva" />
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
    </Container>
  );
};

export default Contact;
