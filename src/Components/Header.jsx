import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Logo from '../Images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={Logo} alt="" width="30" height="30" />
                </Navbar.Brand>
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