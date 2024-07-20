// src/components/Contact.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          {/* Přidejte další obsah podle potřeby */}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
