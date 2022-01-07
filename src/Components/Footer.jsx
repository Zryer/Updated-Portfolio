import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return(
        <Container id="Links" className="footerContainer">
            <Row className="text-center position-relative top-50">
                <Col>Hello there Footer me</Col>
                <Button variant="primary">Button Footer</Button>
            </Row>
        </Container>
    )
}

export default Footer;