import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Products = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Solar Products</h2>
    <Row>
      {["Panel", "Inverter", "Battery", "Charge Controller"].map((item, i) => (
        <Col md={3} sm={6} xs={12} key={i}>
          <Card className="mb-4">
            <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${item}`} />
            <Card.Body>
              <Card.Title>{item}</Card.Title>
              <Card.Text>
                High-performance {item.toLowerCase()} suitable for all solar installations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Products;
