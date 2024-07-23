// src/components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-white text-center">
      <Container>
        <Row>
          <Col>
            <p>{t("footer.rights")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
