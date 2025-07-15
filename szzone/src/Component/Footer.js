// import React from "react";

// const Footer = () => (
//   <div className="bg-dark text-white text-center p-3">
//     &copy; {new Date().getFullYear()} SolarZone. All rights reserved.
//   </div>
// );

// export default Footer;

// ----------------------------------------------------

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <div className=" footer bg-dark text-white pt-4 ">
    <Container>
      <Row>
        {/* Company Info */}
        <Col md={4} className="mb-3">
          <h5>About SolarZone</h5>
          <p>
            Empowering a greener tomorrow with solar innovation. 
            We provide residential and commercial solar solutions.
          </p>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            {/* <li><a href="/order" className="text-white text-decoration-none">Order Now</a></li> */}
          </ul>
        </Col>

        {/* Social Media */}
        <Col md={4} className="mb-3">
          <h5>Connect with Us</h5>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-white">
              <FaWhatsapp />
            </a>
            <a href="mailto:info@solarzone.com" className="text-white">
              <FaEnvelope />
            </a>
          </div>
        </Col>
      </Row>
      <hr className="border-light" />
      <div className="text-center pb-3">
        &copy; {new Date().getFullYear()} SolarZone. All rights reserved.
      </div>
    </Container>
  </div>
);

export default Footer;
