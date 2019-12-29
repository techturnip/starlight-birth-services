import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FaHome } from 'react-icons/fa'

export default function Navigation() {
  return (
    <Navbar fixed="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Starlight Birth Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#deets">
              <FaHome className="mr-2" />
              Home
            </Nav.Link>
            <Nav.Link href="#memes">News</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
