// src/components/Home.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";
import HeroImage from "../assets/square.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <Row className="hero-section">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center hero-text"
        >
          <div>
            <h1 className="display-4">Octopod Systems s. r. o.</h1>
            <p>Máme rádi chobotničky, nuly a jedničky.</p>
            <Button variant="dark" href="#about">
              <Link to="/about" className="btn btn-dark">
                Zjistit více
              </Link>
            </Button>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center hero-image"
        >
          <img src={HeroImage} alt="Octopus" className="animated-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
