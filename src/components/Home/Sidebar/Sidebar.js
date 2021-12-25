import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
    const { user, logout, superAdmin, admin } = useAuth()

    // const [users, setUsers] = useState({})
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allusers`)
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data));
    // }, []);

    return (
        <div>
            <div>
                <div className='row'>
                    <div className="col-md-2">
                        <Navbar bg="light" expand={false}>
                            <h3 className="text-danger">Click here</h3>
                            <Container fluid>

                                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                                <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="start"
                                >

                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="offcanvasNavbarLabel">{user.displayName}</Offcanvas.Title>

                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <Nav.Link as={HashLink} to="/home#home"><li>Home</li></Nav.Link>
                                            <Nav.Link as={HashLink} to={`/dashboard/manageOrder`}>My Order</Nav.Link>
                                            <Nav.Link as={HashLink} to={`/dashboard/payment`}>Pay</Nav.Link>
                                            {superAdmin ?? <Nav.Link as={HashLink} to={`/dashboard/AllUsers`}>All Users</Nav.Link>}
                                            {admin ?? <Nav.Link as={HashLink} to={`/dashboard/AllUsers`}>All Users</Nav.Link>}
                                            {superAdmin ?? <div>

                                                <Nav.Link as={HashLink} to={`/dashboard/createAdmin`}>Make admin</Nav.Link>
                                            </div>}
                                            {admin ?? <Nav.Link as={HashLink} to={`/dashboard/createAdmin`}>Make admin</Nav.Link>
                                            }
                                            {superAdmin && <Nav.Link as={HashLink} to={`/dashboard/superAdmin`}>Make super admin</Nav.Link>}
                                            {superAdmin && <Nav.Link as={HashLink} to={`/dashboard/manageService`}>All orders</Nav.Link>}
                                            {user?.email ?
                                                <Nav.Link as={HashLink} onClick={logout} to="/">Logout</Nav.Link>
                                                : <></>}

                                        </Nav>

                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </div>
                    <div className="col-md-8">
                        <Outlet></Outlet>
                    </div>


                </div>
                <div className="right-side-image">
                    <img className='img-fluid' src="https://i.ibb.co/THXn30V/dash.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Sidebar;