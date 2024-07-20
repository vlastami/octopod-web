// src/components/About.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.scss";
import PavelPhoto from "../assets/pavel.png";
import VlastaPhoto from "../assets/vlasta.png";

const About: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Container id="about" className={`py-5 about ${className}`}>
      <Row>
        <Col>
          <h2 className="about-title">O nás</h2>
          <p className="about-description">
            Jsme tým zkušených vývojářů specializujících se na vývoj softwaru na
            míru. Naším cílem je poskytovat kvalitní a inovativní řešení, která
            splňují specifické potřeby našich klientů.
          </p>
          <p className="about-description">
            Naše služby zahrnují automatizaci procesů a využití umělé
            inteligence, abychom dodali chytrá a efektivní řešení na míru vašim
            požadavkům. Jsme schopni vyvinout mobilní, webové i desktopové
            aplikace, poskytnout poradenství nebo nabídnout dlouhodobou
            spolupráci.
          </p>
          <h3 className="about-team-title">Náš tým</h3>
          <Row className="about-team">
            <Col md={6} className="d-flex">
              <Card className="team-member">
                <Card.Img
                  variant="top"
                  src={PavelPhoto}
                  className="team-photo"
                />
                <Card.Body>
                  <Card.Title>Pavel</Card.Title>
                  <Card.Text>
                    Pět let pracuje jako backend vývojář v Javě, zajímá se o
                    moderní technologie, framework Spring, automatizaci procesů.
                    Vždy se snaží najít nejlepší a nejefektivnější řešení.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex">
              <Card className="team-member">
                <Card.Img
                  variant="top"
                  src={VlastaPhoto}
                  className="team-photo"
                />
                <Card.Body>
                  <Card.Title>Vlasta</Card.Title>
                  <Card.Text>
                    Vystudovala aplikovanou informatiku, pracuje jako frontend
                    vývojář na webových a mobilních aplikacích, a ráda přijímá
                    nové výzvy, zvlášť pokud jde o zajímavé nápady.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h3 className="about-projects-title">Reference a projekty</h3>
          <p className="about-description">
            <strong>Účtenkovač</strong> - Software pro kategorizovanou evidenci
            osobních výdajů s využitím OCR a AI.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
