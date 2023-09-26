import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: example@example.com<br />
              Phone: +1 (123) 456-7890<br />
              Address: 123 Main Street, City
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/YourTwitterPage" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/YourInstagramPage" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <p className="text-center">&copy; 2023 Your Website Name</p>
      </Container>
    </footer>
  );
}

export default Footer;
