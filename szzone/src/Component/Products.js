import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Products = () => {
  const products = [
    { name: "Panel", image: "/Images/solar-panel.jpg" },
    { name: "Inverter", image: "/Images/imges-solar-20pv-20modules-250x250.webp" },
    { name: "Battery", image: "/Images/3-500x500.webp" },
    { name: "Charge Controller", image: "/Images/HomepageSPannelimage.jpeg" }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Solar Products</h2>
      <Row>
        {products.map((item, i) => (
          <Col md={3} sm={6} xs={12} key={i}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} style={{height: "200px", objectFit: "cover"}} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  High-performance {item.name.toLowerCase()} suitable for all solar installations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
