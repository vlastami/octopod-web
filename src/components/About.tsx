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
          <h3 className="legal-info-title">Právní informace</h3>
          <div className="legal-info">
            <p>
              <strong>Obchodní firma:</strong> Octopod Systems s.r.o.
            </p>
            <p>
              <strong>Sídlo:</strong> Štursova 638/43, Bukov, 400 01 Ústí nad
              Labem
            </p>
            <p>
              <strong>Identifikační číslo:</strong> 128 10 532
            </p>
            <p>
              <strong>Právní forma:</strong> Společnost s ručením omezeným
            </p>
            <p>
              <strong>Předmět podnikání: </strong>
              Poskytování software, poradenství v oblasti informačních
              technologií, zpracování dat, hostingové a související činnosti a
              webové portály.
            </p>
            <p>
              <strong>Statutární orgán - jednatel:</strong> Pavel Michalec, dat.
              nar. 7. března 1994
            </p>
            <p>
              <strong>Společník:</strong> Pavel Michalec, dat. nar. 7. března
              1994, Štursova 638/43, Bukov, 400 01 Ústí nad Labem
            </p>
            <p>
              <strong>Základní kapitál:</strong> 20 000,- Kč
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
