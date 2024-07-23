// src/components/About.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.scss";
import PavelPhoto from "../assets/pavel.png";
import VlastaPhoto from "../assets/vlasta.png";
import { useTranslation } from "react-i18next";

interface TeamMember {
  name: string;
  photo: string;
  description: string;
}

const About: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();

  const teamMembers: TeamMember[] = [
    {
      name: "Pavel",
      photo: PavelPhoto,
      description: t("about.teamMembers.pavel.description"),
    },
    {
      name: "Vlasta",
      photo: VlastaPhoto,
      description: t("about.teamMembers.vlasta.description"),
    },
  ];

  return (
    <Container id="about" className={`py-5 about ${className}`}>
      <Row>
        <Col>
          <h2 className="about-title">{t("about.title")}</h2>
          <p className="about-description">{t("about.description1")}</p>
          <p className="about-description">{t("about.description2")}</p>
          <h3 className="about-team-title">{t("about.teamTitle")}</h3>
          <Row className="about-team">
            {teamMembers.map((member, index) => (
              <Col md={6} className="d-flex" key={index}>
                <Card className="team-member">
                  <Card.Img
                    variant="top"
                    src={member.photo}
                    className="team-photo"
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h3 className="about-projects-title">{t("about.projectsTitle")}</h3>
          <p
            className="about-description"
            dangerouslySetInnerHTML={{ __html: t("about.projectDescription") }}
          />
          <h3 className="legal-info-title">{t("about.legalInfoTitle")}</h3>
          <div className="legal-info">
            <p>{t("about.legalInfo.company")}</p>
            <p>{t("about.legalInfo.id")}</p>
            <p>{t("about.legalInfo.legalForm")}</p>
            <p>{t("about.legalInfo.business")}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
