// src/components/Home.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";
import HeroImage from "../assets/hero.png";

const Home: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <Row className="hero-section">
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center hero-text"
        >
          <div>
            <h1>Octopod Systems s. r. o. 🐙</h1>
            <p>Máme rádi chobotničky, nuly a jedničky.</p>
            <Button variant="light" href="#about">
              Zjistit více
            </Button>
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center hero-image"
        >
          <img src={HeroImage} alt="Octopus" className="animated-img" />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <h2>O nás</h2>
            <p>
              Jsme tým vývojářů, kteří se specializují na vývoj softwaru na
              míru. Naším cílem je poskytovat kvalitní a inovativní řešení,
              která splňují potřeby našich klientů.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
