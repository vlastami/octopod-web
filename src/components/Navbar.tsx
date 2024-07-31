import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";

const AppNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      ref={navbarRef}
      bg="light"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="fixed-top custom-navbar"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Octopod Systems</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setExpanded(false)}>
            <LinkContainer to="/">
              <Nav.Link>{t("navbar.home")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{t("navbar.about")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>{t("navbar.services")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>{t("navbar.contact")}</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <Button
              variant="light"
              onClick={() => changeLanguage("cs")}
              className={`language-switch ${
                i18n.language === "cs" ? "active" : ""
              }`}
            >
              Česky
            </Button>
            <Button
              variant="light"
              onClick={() => changeLanguage("en")}
              className={`language-switch ${
                i18n.language === "en" ? "active" : ""
              }`}
            >
              English
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
