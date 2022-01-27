import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconLINKEDIN, IconGITHUB } from '../IconsComponent/Icons';

const Footer = () => {
    return(
        <Container fluid id="Links" className="footerContainer">
            <Row className="text-center position-relative top-50">
                <Col xs={12}><h1>Some of my links</h1></Col>
                <Col><a href="https://github.com/Zryer" target="blank" className="footerGithub"><IconGITHUB /></a></Col>
                <Col><a href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="blank" className="footerLinkedin"><IconLINKEDIN /></a></Col>
            </Row>
        </Container>
    )
}

export default Footer;