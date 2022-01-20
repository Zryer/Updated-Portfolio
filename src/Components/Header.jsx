import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navbar">
                    <Nav>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Links">Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;