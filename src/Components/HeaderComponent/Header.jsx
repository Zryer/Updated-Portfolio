import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Logo from '../../Images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg" fixed="top">
            <Container fluid className="navbarContainer">
                <Navbar.Brand href="#Home" className="navbarBrand"><Image src={Logo} className="navbarBrandImage"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="navbar">
                    <Nav>
                        <Nav.Link href="#About" className="navLink">About</Nav.Link>
                        <Nav.Link href="#Skills" className="navLink">Skills</Nav.Link>
                        <Nav.Link href="#Projects" className="navLink">Projects</Nav.Link>
                        <Nav.Link href="#Contact" className="navLink">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;