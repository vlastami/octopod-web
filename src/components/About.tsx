// src/components/About.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.scss";

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
            inteligence, abychom mohli přinést chytrá a efektivní řešení na míru
            vašim požadavkům. Jsme schopni vyvinout mobilní, webové i desktopové
            aplikace.
          </p>
          <h3 className="about-team-title">Náš tým</h3>
          <ul className="about-team">
            <li>
              <strong>Pavel Michalec</strong> - Backend vývojář, specialista na
              Java a Spring s pěti lety zkušeností. Pavel se zaměřuje na
              technologie a automatizaci.
            </li>
            <li>
              <strong>Vlasta Michalcová</strong> - Frontend vývojářka pracující
              v React/React Native a Typescript s dvouletou praxí. Vlasta má
              zájem o (počítačovou) lingvistiku.
            </li>
          </ul>
          <h3 className="about-projects-title">Reference a projekty</h3>
          <p className="about-description">
            <strong>Účtenkovač</strong> - software pro kategorizovanou evidenci
            osobních výdajů.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
