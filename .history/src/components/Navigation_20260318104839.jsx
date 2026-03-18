import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-uppercase">
          ANDS Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#hospital" className="fs-5 px-3">Hospital</Nav.Link>
            <Nav.Link href="#gurukul" className="fs-5 px-3">Gurukul</Nav.Link>
            <Nav.Link href="#donate" className="btn btn-warning text-dark fw-bold ms-lg-3 px-4 rounded-pill">
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;