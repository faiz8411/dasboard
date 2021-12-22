import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigations.css'

const Navigations = () => {
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning">logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className="text-danger" >Home</Nav.Link>
                            <Nav.Link href="#about" className="text-warning">About</Nav.Link>
                            <Nav.Link href="/dashboard" className="text-warning">dashboard</Nav.Link>
                            <Nav.Link href="#service" className="text-warning">service</Nav.Link>
                            <Nav.Link href="/blog" className="text-warning">Blog</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigations;