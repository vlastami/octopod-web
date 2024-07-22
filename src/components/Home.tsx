// src/components/Home.tsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Home.scss";
import HeroImage from "../assets/square.png";
import { LinkContainer } from "react-router-bootstrap";

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
            <LinkContainer to="/about">
              <Nav.Link className="btn btn-dark">Zjistit více</Nav.Link>
            </LinkContainer>
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
