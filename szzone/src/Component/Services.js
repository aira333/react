import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => (
  <Container className="py-5 bg-light">
    <h2 className="text-center mb-4">Our Services</h2>
    <Row>
      <Col md={6}>
        <ul>
          <li>Residential Solar Panel Installation</li>
          <li>Commercial Solar Energy Solutions</li>
          <li>Solar System Maintenance & Repairs</li>
          <li>Energy Consultation & Audits</li>
        </ul>
      </Col>
      <Col md={6}>
        <img
          src="https://via.placeholder.com/500x300?text=Solar+Services"
          alt="Services"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
);

export default Services;
