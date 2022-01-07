import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand>React</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown></NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;