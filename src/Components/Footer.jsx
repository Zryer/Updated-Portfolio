import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
        <Container fluid id="Links" className="footerContainer">
            <Row className="text-center position-relative top-50">
                <Col xs={12}><h1>Some of my links</h1></Col>
                <Col><a href="https://github.com/Zryer" target="blank"><i className="fab fa-github iconFA"></i></a></Col>
                <Col><a href="https://www.linkedin.com/in/zachary-fisher-1b6448221/" target="blank"><i className="fab fa-linkedin iconFA"></i></a></Col>
            </Row>
        </Container>
    )
}

export default Footer;