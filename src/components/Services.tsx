// src/components/Services.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Služby</h2>
          <ul>
            <li>Vývoj softwaru na míru</li>
            <li>Mobilní aplikace</li>
            <li>Webové aplikace</li>
            <li>Konzultace a poradenství</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
