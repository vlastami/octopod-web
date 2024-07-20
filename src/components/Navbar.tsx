// src/components/Navbar.tsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.scss";

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top custom-navbar">
      <Container>
        <Navbar.Brand href="#">Octopod Systems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
