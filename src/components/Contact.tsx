// src/components/Contact.tsx
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Kontakt</h2>
          <Form>
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
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Odeslat
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
