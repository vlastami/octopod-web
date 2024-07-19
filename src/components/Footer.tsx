// src/components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Octopod Systems s.r.o. Všechna práva vyhrazena.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
