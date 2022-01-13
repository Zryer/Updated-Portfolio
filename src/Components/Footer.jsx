import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return(
        <Container id="Links" className="footerContainer">
            <Row className="text-center position-relative top-50">
                <Col xs={12}>Hello there Footer me</Col>
                <Col><a href="https://github.com/Zryer" target="blank"><i className="fab fa-github iconFA"></i></a></Col>
            </Row>
        </Container>
    )
}

export default Footer;