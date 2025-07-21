import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        height: '60px',
        background: 'linear-gradient(90deg, rgb(17, 120, 151), rgb(231, 236, 241), rgb(221, 233, 243))',
        fontFamily: "'Orbitron', sans-serif",
        paddingTop: '0',
        paddingBottom: '0',
        alignContent: 'center',
      }}
    >
      <Container fluid className="px-3">
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{
            padding: 0,
            marginRight: '20px',
            textDecoration: 'none',
          }}
        >
          <img
  src="/Images/Studio-Project_editedsszone-Photoroom.png"
  alt="SecureZone Logo"
  style={{
    height: "55px",
    width: "auto", // maintain aspect ratio
    objectFit: "cover",
    borderRadius: "12px", // more noticeable rounded corners
   // boxShadow: "0 0 10px rgba(120, 148, 199, 0.75)", // soft glow to blend with header
    backgroundColor: "#ffffff", // fallback for transparent images
    marginRight: "10px",
  }} />


        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mx-auto d-flex align-items-center justify-content-center w-100">
            {['Home', 'Products', 'Services', 'Experience', 'Contact'].map((page) => (
              <Nav.Link
                as={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                key={page}
                style={{
                  color: '#000',
                  fontWeight: 500,
                  fontSize: '1rem',
                  marginLeft: '15px',
                }}
              >
                {page}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;






