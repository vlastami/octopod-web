// src/components/Home.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <Container fluid className="p-0">
      <div className="jumbotron text-center bg-primary text-white">
        <Container>
          <h1>Octopod Systems s. r. o. 🐙</h1>
          <p>Máme rádi chobotničky, nuly a jedničky.</p>
          <Button variant="light" href="#about">
            Zjistit více
          </Button>
        </Container>
      </div>
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
