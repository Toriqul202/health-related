import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="white" sticky="top">
    <Container>
    <Navbar.Brand href="#home"><h1 className="text-success">I Health Care</h1></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Navbar.Text>
        Mark Otto
      </Navbar.Text>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
    
        </>
    );
};

export default Header;