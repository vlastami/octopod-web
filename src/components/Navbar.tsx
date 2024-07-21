// src/components/Navbar.tsx
import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.scss";

const AppNavbar: React.FC = () => {
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
              <Nav.Link>Domů</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>O nás</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Služby</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Kontakt</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
