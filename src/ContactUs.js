import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUs() {
  const formSpreeLink = 'https://formspree.io/f/mbjvzvkq'; // Replace with your Formspree link

  return (
    <div>
      <section className="contact-section py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="section-title">Contact Us</h2>
              <Form action={formSpreeLink} method="POST">
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="_replyto" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                <p>
                  Feel free to contact us for any inquiries or questions you may have.
                </p>
                <address>
                  <strong>Company Name</strong><br />
                  123 Main Street<br />
                  City, State ZIP<br />
                  <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                  <abbr title="Email">Email:</abbr> info@example.com
                </address>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ContactUs;
