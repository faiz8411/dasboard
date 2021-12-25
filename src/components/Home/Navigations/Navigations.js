import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

import './Navigations.css'

const Navigations = () => {
    const { user, logout } = useAuth()
    return (
        <div className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning">logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home" className="text-danger" >Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/about" className="text-warning">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard" className="text-warning">dashboard</Nav.Link>
                            <Nav.Link className="text-warning">service</Nav.Link>
                            <Nav.Link as={HashLink} to="/myorder" className="text-warning">myOrder</Nav.Link>
                            {user?.email ? <Nav.Link as={HashLink} to="/login" className='text-white' className=" text-white rounded" onClick={logout}>logout</Nav.Link>
                                :
                                <Nav.Link href="/login" className="rounded text-warning">login</Nav.Link>}
                            <Navbar.Collapse className="justify-content-end ">
                                <Navbar.Text className="text-white ">
                                    {user?.email &&
                                        <span className='dispalayName'> Welcome: {user.displayName}</span>}

                                </Navbar.Text>
                            </Navbar.Collapse>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigations;