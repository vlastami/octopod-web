// src/components/Services.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.scss";
import { useTranslation } from "react-i18next";

interface Service {
  title: string;
  description: string;
}

const Services: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();

  const services: Service[] = t("services.cards", {
    returnObjects: true,
  }) as Service[];

  return (
    <Container className={`py-5 services ${className}`}>
      <Row>
        <Col>
          <h2 className="services-title">{t("services.title")}</h2>
          <p className="services-description">{t("services.description")}</p>
          <Row className="services-cards">
            {services.map((service, index) => (
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
