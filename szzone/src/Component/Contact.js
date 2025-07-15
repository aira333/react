import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <Container
      className="py-4"
      id="contact"
      style={{ fontFamily: "'Poppins', sans-serif", maxHeight: '100vh',
         overflowY: 'scroll',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none' // IE
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          color: '#0d3b66', // Dark blue
          fontWeight: '700',
          fontSize: '2.2rem',
          letterSpacing: '0.5px',
        }}
      >
        Contact Us
      </h2>
      <Row className="align-items-stretch">
        
        {/* Contact Details */}
        <Col md={6} >
          <Card className="p-3 shadow-sm border-0 h-100">
            <h4 className="mb-3 text-primary fw-bold">Get in Touch</h4>
            <p><FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> info@solarzone.com</p>
            <p><FaPhone className="me-2 text-success" /> <strong>Phone:</strong> +123 456 7890</p>
            <p><FaMapMarkerAlt className="me-2 text-warning" /> <strong>Location:</strong> Nairobi, Kenya</p>
            <hr />
            <h5 className="mt-3 text-secondary">Business Hours</h5>
            <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </Card>
        </Col>

        {/* Map + Social */}
        <Col md={6}>
          <Card className="shadow-sm border-0 h-100 d-flex flex-column justify-content-between">
            <div style={{ height: '250px', width: '100%', borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.636084090916!2d78.53781572912229!3d17.476026902237017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b9e97ba48f5%3A0x5849e33ea05d6179!2sA.%20S.%20Rao%20Nagar%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1749039416977!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
            <Card.Body className="text-center">
              <h5 className="mb-3 text-primary">Follow Us</h5>
              <div className="d-flex justify-content-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-primary" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-danger" />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={24} className="text-success" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-info" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div
  style={{
    backgroundColor: '#f8f9fa',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif"
  }}
>
  <h3 style={{ color: '#0d3b66', fontWeight: '700' }}>We’d love to hear from you!</h3>
  <p style={{ maxWidth: '700px', margin: '10px auto', fontSize: '1.1rem', color: '#333' }}>
    Whether you have a question about solar installation, pricing, or anything else,
    our team is ready to answer all your questions.
  </p>
  <a
    href="/contact"
    className="btn btn-primary mt-3"
    style={{ backgroundColor: '#0d3b66', borderColor: '#0d3b66' }}
  >
    Get in Touch
  </a>
</div>

      <container className="text-center mt-4">
      <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>  
        &copy; {new Date().getFullYear()} SolarZone. All rights reserved.
      </p>
    </container>
    
    </Container>

    
  );
};

export default Contact;



// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
//   FaLinkedin,
// } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <Container className="py-5" id="contact">
//       <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
//       <Row className="align-items-stretch">
        
//         {/* Left: Contact Info */}
//         <Col md={6} className="mb-4">
//           <Card className="p-4 shadow-sm border-0 h-100">
//             <h4 className="mb-4 text-primary fw-bold">Get in Touch</h4>
//             <p>
//               <FaEnvelope className="me-2 text-danger" />
//               <strong>Email:</strong> info@solarzone.com
//             </p>
//             <p>
//               <FaPhone className="me-2 text-success" />
//               <strong>Phone:</strong> +123 456 7890
//             </p>
//             <p>
//               <FaMapMarkerAlt className="me-2 text-warning" />
//               <strong>Location:</strong> Nairobi, Kenya
//             </p>
//             <hr />
//             <h5 className="mt-4 text-secondary">Business Hours</h5>
//             <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
//             <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
//             <p><strong>Sunday:</strong> Closed</p>
//           </Card>
//         </Col>

//         {/* Right: Map and Social Icons */}
//         <Col md={6}>
//           <Card className="shadow-sm border-0 h-100 d-flex flex-column justify-content-between">
//             <div
//               style={{
//                 height: '300px',
//                 width: '100%',
//                 borderRadius: '8px 8px 0 0',
//                 overflow: 'hidden',
//               }}
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.636084090916!2d78.53781572912229!3d17.476026902237017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b9e97ba48f5%3A0x5849e33ea05d6179!2sA.%20S.%20Rao%20Nagar%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1749039416977!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Map Location"
//               ></iframe>
//             </div>
//             <Card.Body className="text-center">
//               <h5 className="mb-3 text-primary">Follow Us</h5>
//               <div className="d-flex justify-content-center gap-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                   <FaFacebook size={24} className="text-primary" />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                   <FaInstagram size={24} className="text-danger" />
//                 </a>
//                 <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
//                   <FaWhatsapp size={24} className="text-success" />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                   <FaLinkedin size={24} className="text-info" />
//                 </a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;

// ----------------------------------------------------------------------------------------

// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <Container className="py-5" id="contact">
//       <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
//       <Row className="align-items-center">
        
//         {/* Left: Contact Info */}
//         <Col md={6} className="mb-4">
//           <Card className="p-4 shadow-sm border-0">
//             <h4 className="mb-4 text-primary fw-bold">Get in Touch</h4>
//             <p><FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> info@solarzone.com</p>
//             <p><FaPhone className="me-2 text-success" /> <strong>Phone:</strong> +123 456 7890</p>
//             <p><FaMapMarkerAlt className="me-2 text-warning" /> <strong>Location:</strong> Nairobi, Kenya</p>
//             <hr />
//             <h5 className="mt-4 text-secondary">Business Hours</h5>
//             <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
//             <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
//             <p><strong>Sunday:</strong> Closed</p>
//           </Card>
//         </Col>

//         {/* Right: Map or Image */}
//         <Col md={6}>
//           <Card className="shadow-sm border-0">
//             {/* <Card.Img
//               variant="top"
//               src="./images/contact-map.jpg" // Replace with your image path or a map iframe
//               alt="Our Location"
//               style={{ height: '300px', objectFit: 'cover', borderRadius: '8px' }}
//             /> */}

//              <div style={{ height: '300px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.636084090916!2d78.53781572912229!3d17.476026902237017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b9e97ba48f5%3A0x5849e33ea05d6179!2sA.%20S.%20Rao%20Nagar%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1749039416977!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
//       width="100%"
//       height="100%"
//       allowFullScreen=""
//       loading="lazy"
//       style={{ border: 0 }}
//       title="Google Map Location"
//     ></iframe>
//   </div>
//             <Card.Body className="text-center">
//               <h5 className="mb-3 text-primary">Follow Us</h5>
//               <div className="d-flex justify-content-center gap-3">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} className="text-primary" /></a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="text-danger" /></a>
//                 <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} className="text-success" /></a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="text-info" /></a>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };



// ---------------------------------


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// const Contact = () => (
//   <Container className="py-5 bg-light">
//     <h2 className="text-center mb-4">Contact Us</h2>
//     <Row>
//       <Col md={6}>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Your Name" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Message</Form.Label>
//             <Form.Control as="textarea" rows={3} />
//           </Form.Group>
//           <Button variant="primary">Send Message</Button>
//         </Form>
//       </Col>
//       <Col md={6}>
//         <h5>Get in Touch</h5>
//         <p>Email: info@solarzone.com</p>
//         <p>Phone: +123 456 7890</p>
//         <p>Location: Nairobi, Kenya</p>
//         <div className="d-flex gap-3 mt-3">
//           <FaFacebook size={24} />
//           <FaInstagram size={24} />
//           <FaWhatsapp size={24} />
//           <FaEnvelope size={24} />
//           <FaLinkedin size={24} />
//         </div>
//       </Col>
//     </Row>
//   </Container>
// );

// export default Contact;

// ---2nd method
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Facebook, Instagram, Linkedin, Whatsapp, Envelope } from 'react-bootstrap-icons';

// function Contact() {
//   return (
//     <Container className="py-5" id="contact">
//       <h2 className="text-center mb-4">Contact Us</h2>
//       <Row>
//         <Col md={6}>
//           <h5>Get in Touch</h5>
//           <p><strong>Email:</strong> info@solarzone.com</p>
//           <p><strong>Phone:</strong> +123 456 7890</p>
//           <p><strong>Location:</strong> Nairobi, Kenya</p>
//         </Col>
//         <Col md={6}>
//           <h5>Connect with Us</h5>
//           <div className="d-flex gap-4 mt-3">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <Facebook size={30} color="#3b5998" />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <Instagram size={30} color="#e4405f" />
//             </a>
//             <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
//               <Whatsapp size={30} color="#25D366" />
//             </a>
//             <a href="mailto:info@solarzone.com">
//               <Envelope size={30} color="#0072c6" />
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//               <Linkedin size={30} color="#0e76a8" />
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;
