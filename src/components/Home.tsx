// src/components/Home.tsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Home.scss";
import HeroImage from "../assets/square.png";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="p-0">
      <Row className="hero-section">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center hero-text"
        >
          <div>
            <h1 className="display-4">{t("home.title")}</h1>
            <p>{t("home.description")}</p>
            <LinkContainer to="/about">
              <Nav.Link className="btn btn-dark">
                {t("home.learnMore")}
              </Nav.Link>
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
