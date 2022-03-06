import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconLINKEDIN, IconGITHUB } from '../IconsComponent/Icons';

const Footer = () => {
    return(
        <Container fluid id="Contact" className="footerContainer">
            <Row className="text-center position-relative top-50">
                <Col xs={12}><h1>Contact Me</h1></Col>
                <Col><a href="https://github.com/Zryer" target="blank" className="footerGithub"><IconGITHUB /></a></Col>
                <Col><a href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="blank" className="footerLinkedin"><IconLINKEDIN /></a></Col>
            </Row>
        </Container>
    )
}

export default Footer;