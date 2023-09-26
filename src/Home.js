import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

function Home() {
  // Sample product data (replace with your own product data)
  const products = [
    {
      id: 1,
      name: 'Diamond2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$99.99',
      imageUrl: 'Diamond2.jpg',
    },
    {
      id: 2,
      name: 'Diamond3.jpg',
      description: 'Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque.',
      price: '$79.99',
      imageUrl: 'Diamond3.jpg',
    },
    {
      id: 3,
      name: 'Diamond4.jpg.jpg',
      description: 'Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque.',
      price: '$129.99',
      imageUrl: 'Diamond4.jpg.jpg',
    },
  ];

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="Diamond2.jpg"
            alt="First slide"
            style={{ width: '50%', maxHeight: '400px' }} // Adjust the height as needed
          />
          <Carousel.Caption>
            <h3>Welcome to Our Product Store</h3>
            <p>Explore our wide range of products.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="Diamond3.jpg"
            alt="Second slide"
            style={{ width: '50%',maxHeight: '400px' }} // Adjust the width as needed
          />
          <Carousel.Caption>
            <h3>Quality Products at Affordable Prices</h3>
            <p>Discover amazing deals on our products.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <Container>
          <h2 className="display-4 text-center mb-5">Our Products</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} xs={12} md={6} lg={4}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                    <Button variant="primary" href={`/product/${product.id}`}>View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ... Other sections (Services, Testimonials) go here */}
    </div>
  );
}

export default Home;
