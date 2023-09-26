import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Products() {
  // Sample product data (replace with your own product data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$99.99',
      imageUrl: 'Diamond3.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Sed auctor dolor nec massa bibendum, in ultricies enim scelerisque.',
      price: '$79.99',
      imageUrl: 'Diamond4.jpg.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Integer sodales scelerisque tincidunt. Duis vitae justo at justo finibus scelerisque.',
      price: '$129.99',
      imageUrl: 'Diamond2.jpg',
    },
    // Add more products as needed
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="display-4 text-center mb-5">Our Products</h1>
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
        <Row>
          <Col className="text-center">
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;

