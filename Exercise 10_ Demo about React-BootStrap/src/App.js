import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Card, Form, Button, Navbar, Nav } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comments: ''
  });

  const pizzas = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: '$12.99',
      originalPrice: '$14.99',
      image: 'https://via.placeholder.com/250x200?text=Margherita+Pizza',
      badge: 'SALE'
    },
    {
      id: 2,
      name: 'Mushroom Pizza',
      price: '$13.99',
      image: 'https://via.placeholder.com/250x200?text=Mushroom+Pizza',
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Hawaiian Pizza',
      price: '$13.99',
      image: 'https://via.placeholder.com/250x200?text=Hawaiian+Pizza',
      badge: 'NEW'
    },
    {
      id: 4,
      name: 'Pesto Pizza',
      price: '$14.99',
      originalPrice: '$16.99',
      image: 'https://via.placeholder.com/250x200?text=Pesto+Pizza',
      badge: 'SALE'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Table booking submitted! We will contact you soon.');
    setFormData({ name: '', email: '', service: '', comments: '' });
  };

  return (
    <div className="bg-dark text-light">
      {/* Navigation */}
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">
            🍕 Pizza House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-light me-3">Home</Nav.Link>
              <Nav.Link href="#about" className="text-light me-3">About Us</Nav.Link>
              <Nav.Link href="#contact" className="text-light me-3">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex ms-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{ width: '200px' }}
            />
            <Button variant="danger" size="sm">
              <FaSearch />
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section" style={{ 
        backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Neapolitan+Pizza)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}></div>
        <div className="text-center text-light" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="display-4 fw-bold mb-2">Neapolitan Pizza</h2>
          <p className="lead">Enjoy the authentic Italian pizza the Neapolitan way</p>
        </div>
      </section>

      {/* Our Menu Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold fs-1">Our Menu</h2>
        <Row xs={1} sm={2} lg={4} className="g-4">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card className="h-100 bg-light text-dark position-relative shadow">
                {pizza.badge && (
                  <div className={`position-absolute top-0 start-0 m-2 p-2 ${
                    pizza.badge === 'SALE' ? 'bg-warning' : 'bg-info'
                  } fw-bold`} style={{ fontSize: '12px' }}>
                    {pizza.badge}
                  </div>
                )}
                <Card.Img 
                  variant="top" 
                  src={pizza.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                  <div className="mb-3">
                    <span className="fw-bold fs-5 text-danger">{pizza.price}</span>
                    {pizza.originalPrice && (
                      <span className="ms-2 text-muted text-decoration-line-through">
                        {pizza.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button variant="dark" className="w-100" size="sm">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Book Your Table Section */}
      <section className="booking-section bg-secondary py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold fs-1">Book Your Table</h2>
          
          <Form onSubmit={handleSubmit} className="bg-light p-4 rounded">
            <Row className="mb-4">
              <Col md={4}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Your Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Your Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="dine-in">Dine-In</option>
                    <option value="delivery">Delivery</option>
                    <option value="takeout">Takeout</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    placeholder="Please enter your comment"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="warning" size="lg" type="submit" className="fw-bold">
                  Submit Reservation
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center py-4 border-top border-secondary">
        <Container>
          <p className="mb-0">&copy; 2024 Pizza House. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
