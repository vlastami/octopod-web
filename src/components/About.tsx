// src/components/About.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>O nás</h2>
          <p>Jsme tým vývojářů, kteří se specializují na vývoj softwaru na míru. Naším cílem je poskytovat kvalitní a inovativní řešení, která splňují potřeby našich klientů.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
