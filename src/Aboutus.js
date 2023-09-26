import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero  py-5 text-white">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4">About Us</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque. Sed vel turpis nec lorem posuere tincidunt nec a ante.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="Diamond10.jpg"
                alt="About Us"
                className="img-fluid rounded-circle"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="display-4 mb-4">Our Mission</h2>
              <p>
                Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque. Proin venenatis, velit et tincidunt iaculis, tellus nulla congue dui, ac consectetur metus ipsum non ex. Vestibulum at arcu id augue posuere pellentesque in sit amet purus.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="Mission.jpg"
                alt="Mission"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 text-center mb-4">Our Values</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h5 className="card-title">Value 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h5 className="card-title">Value 2</h5>
                  <p className="card-text">
                    Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque. Integer sodales scelerisque tincidunt.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <h5 className="card-title">Value 3</h5>
                  <p className="card-text">
                    Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque. Proin venenatis, velit et tincidunt iaculis.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-4 text-center mb-4">What Our Clients Say</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <div className="testimonial">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque."
                </p>
                <p className="font-weight-bold">- John Doe</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="testimonial">
                <p>
                  "Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque. Integer sodales scelerisque tincidunt."
                </p>
                <p className="font-weight-bold">- Jane Smith</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="testimonial">
                <p>
                  "Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque. Proin venenatis, velit et tincidunt iaculis."
                </p>
                <p className="font-weight-bold">- Alice Johnson</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;


