import React from "react";
import { Container } from "react-bootstrap";

const Experience = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Our Installation Experience</h2>
    <p>
      With over 10 years of experience, we have completed 500+ successful solar installations across residential, commercial, and industrial sectors.
    </p>
    <img
      src="/Images/1700149629640.jpeg"
      alt="Experience"
      className="img-fluid mt-3"
      style={{borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)"}}
    />
  </Container>
);

export default Experience;
