import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                    {users?.email?
                        <Button onClick={logOut} variant="light">Logout</Button>  :
                        <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text><a href="#login">{users?.displayName && users.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                <Nav className="me-auto">
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
