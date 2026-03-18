import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-ngo-light py-2 border-bottom d-none d-lg-block">
        <Container>
          <div className="row text-muted small fw-semibold">
            <div className="col-md-4">
              📞 +91 9938167456
            </div>
            <div className="col-md-4 text-center">
              ✉️ abhasevasadansambalpur@gmail.com
            </div>
            <div className="col-md-4 text-end">
              📍 Sambalpur, Odisha, BHARAT
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar bg="white" variant="light" expand="lg" sticky="top" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-ngo-blue">
            ANDS Foundation
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center fw-semibold">
              <Nav.Link href="#hospital" className="fs-6 px-3 text-dark">Hospital</Nav.Link>
              <Nav.Link href="#gurukul" className="fs-6 px-3 text-dark">Gurukul</Nav.Link>
              <Nav.Link href="#donate" className="btn btn-donate fw-bold ms-lg-3 px-4 rounded-pill">
                Donate Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;