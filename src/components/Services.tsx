// src/components/Services.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.scss";

const Services: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={`py-5 services ${className}`}>
      <Row>
        <Col>
          <h2 className="services-title">Služby</h2>
          <p className="services-description">
            Nabízíme širokou škálu služeb v oblasti vývoje softwaru, od webových
            aplikací po mobilní aplikace a cloudová řešení.
          </p>
          {/* Přidejte další obsah podle potřeby */}
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
