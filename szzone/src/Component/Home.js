import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Home = () => (
  <div
    className="bg-light text-dark"
    style={{ fontFamily: "'Segoe UI', sans-serif", 
      paddingTop: "0rem", paddingBottom: "1rem"
     }}
  >
{/* Company Branding Section */}
<div className="text-center py-4">
  <h1 style={{
    fontFamily: "'Cinzel', serif",
    fontSize: "3rem",
    fontWeight: 700,
    color: "#003366",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
  }}>
   <span style={{ fontFamily: "Georgia, serif", fontSize: "3.5rem", color: "#00bfff" }}>
    S</span>ecureZone
     {/* <span style={{
      display: "inline-block",
      transform: "rotate(10deg)",
      color: "#4169e1",
      fontSize: "2.8rem",
      marginLeft: "-4px"
    }}>🌐</span> */}
    {/* <span>one</span>   */}
  </h1>
  <p style={{
    fontFamily: "'Brush Script MT', cursive",
    fontSize: "1.5rem",
    color: "#004080",
    fontStyle: "italic",
    marginTop: "-10px"
  }}>
    Be Security Smart...
  </p>
</div>


    {/* Top banner image section */}
    <Card className="bg-dark text-white m-0 position-relative">
      <Card.Img
        src="/Images/solar-panel.jpg"
        alt="Solar Energy Background"
        className="img-fluid"
        style={{
          height: "350px",
          objectFit: "cover",
          width: "100%",
          margin: 0,
          position: "relative",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      {/* Text on image */}
      <Card.ImgOverlay
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ zIndex: 2 }}
      >
        <div>
          <h1
            className="text-white text-center"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Empower a Greener Tomorrow
          </h1>

          <p
            className="lead text-white text-center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              maxWidth: "720px",
              lineHeight: 1.6,
            }}
          >
            Switch to clean, renewable energy with our cutting-edge solar technology—saving the planet, one rooftop at a time.
          </p>
          <Button variant="primary" size="lg">Get Started</Button>
        </div>
      </Card.ImgOverlay>
    </Card>



    {/* Section below the banner */}
    <Container className="py-5">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h2 className="display-5 fw-bold">Power Your Future with Solar Energy</h2>
          <p className="lead">
            We provide top-quality solar panels, inverters, batteries, and complete installation services.
            Our mission is to deliver affordable, sustainable energy to homes and businesses.
          </p>
          <Button variant="success">Explore More</Button>
        </Col>
      </Row>

      <h2 className="text-center my-4">Our Products & Services</h2>
      <Row className="g-4">
        {[
          {
            title: "Solar Panels",
            desc: "High-efficiency mono and polycrystalline panels suited for all rooftops.",
            img: "/Images/solar-panel.jpg"
          },
          {
            title: "Solar Inverters",
            desc: "Advanced hybrid and grid-tie inverters for energy conversion and storage.",
            img: "/Images/imges-solar-20pv-20modules-250x250.webp"
          },
          {
            title: "Solar Batteries",
            desc: "Reliable lithium and lead-acid battery solutions for continuous power.",
            img: "/Images/3-500x500.webp"
          },
          {
            title: "Installations",
            desc: "Professional rooftop installations with warranty and maintenance support.",
            img: "/Images/HomepageSPannelimage.jpeg"
          }
        ].map((service, index) => (
          <Col md={3} key={index}>
            <Card className="h-100 shadow-sm border-0 bg-white">
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center my-4">Our Products & Services</h2>
<Row className="g-4">
  {[
    {
      title: "Solar Panels",
      desc: "High-efficiency mono and polycrystalline panels suited for all rooftops.",
      details: [
        "Upto 22% energy conversion efficiency",
        "Weather resistant & durable",
        "Ideal for both residential and commercial use"
      ],
      img: "/Images/solar-panel.jpg"
    },
    {
      title: "Solar Inverters",
      desc: "Advanced hybrid and grid-tie inverters for energy conversion and storage.",
      details: [
        "Auto-switching between grid & solar",
        "Supports battery charging",
        "Wi-Fi enabled for monitoring"
      ],
      img: "/Images/imges-solar-20pv-20modules-250x250.webp"
    },
    {
      title: "Solar Batteries",
      desc: "Reliable lithium and lead-acid battery solutions for continuous power.",
      details: [
        "Long-lasting lithium-ion technology",
        "Fast charging & deep discharge support",
        "Ideal for off-grid and hybrid systems"
      ],
      img: "/Images/3-500x500.webp"
    },
    {
      title: "Installations",
      desc: "Professional rooftop installations with warranty and maintenance support.",
      details: [
        "Certified engineers and technicians",
        "Turnkey project execution",
        "Annual Maintenance Contracts available"
      ],
      img: "/Images/HomepageSPannelimage.jpeg"
    }
  ].map((service, index) => (
    <Col md={3} key={index}>
      <Card className="h-100 shadow-sm border-0 bg-white">
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>{service.desc}</Card.Text>
          <ul className="text-muted small ps-3">
            {service.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2 className="display-5 fw-bold">Join the Solar Revolution</h2>
          <p className="lead">
            Ready to make the switch? Contact us today for a free consultation and see how solar can benefit you.
          </p>

              <Link to="/contact">
                <Button variant="primary" size="lg">Contact Us</Button>
            </Link>
        </Col>
      </Row>  
      

    </Container>
  </div>
);

export default Home;
