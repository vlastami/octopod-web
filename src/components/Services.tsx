// src/components/Services.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.scss";

const servicesData = [
  {
    title: "Mobilní aplikace",
    description:
      "Vývoj mobilních aplikací pro iOS a Android. Naše aplikace jsou uživatelsky přívětivé, výkonné a bezpečné.",
  },
  {
    title: "Webové aplikace",
    description:
      "Tvorba moderních webových aplikací s responzivním designem. Používáme nejnovější technologie a postupy.",
  },
  {
    title: "Desktopové aplikace",
    description:
      "Vývoj desktopových aplikací pro Windows, macOS a Linux. Naše aplikace jsou stabilní a snadno použitelné.",
  },
  {
    title: "Automatizace procesů",
    description:
      "Automatizace obchodních procesů pro zvýšení efektivity a snížení nákladů. Pomůžeme vám s digitalizací a optimalizací procesů.",
  },
  {
    title: "Řešení na míru",
    description:
      "Vývoj softwarových řešení na míru vašim potřebám. Přizpůsobíme se vašim požadavkům a vytvoříme řešení, které přesně odpovídá vašim potřebám.",
  },
  {
    title: "Konzultace a úpravy",
    description:
      "Poskytujeme konzultace a úpravy stávajících softwarových řešení. Pomůžeme vám optimalizovat a vylepšit váš software.",
  },
  {
    title: "Fix-term a fix-price projekty",
    description:
      "Nabízíme projekty na fixní dobu a za fixní cenu, abychom zajistili, že vaše projekty budou dokončeny včas a v rámci rozpočtu.",
  },
  {
    title: "Vývoj softwaru na zakázku",
    description:
      "Poskytujeme vývoj softwaru na zakázku, abychom splnili vaše specifické potřeby a požadavky.",
  },
  {
    title: "Software as a Service (SaaS)",
    description:
      "Nabízíme Software as a Service (SaaS) řešení, která jsou flexibilní, škálovatelná a snadno přístupná přes internet.",
  },
];

const Services: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={`py-5 services ${className}`}>
      <Row>
        <Col>
          <h2 className="services-title">Služby</h2>
          <p className="services-description">
            Nabízíme širokou škálu služeb v oblasti vývoje softwaru, od webových
            aplikací po mobilní aplikace, fix-term a fix-price projekty, vývoj
            softwaru na zakázku a Software as a Service (SaaS) řešení.
          </p>
          <Row className="services-cards">
            {servicesData.map((service, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="service-card h-100">
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
