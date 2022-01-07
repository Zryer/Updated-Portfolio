import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
    return(
        <Container id="About" className="aboutContainer">
            <Row className="text-center position-relative top-50">
                <Col>Hello there about me</Col>
                <Button variant="secondary">Button about</Button>
            </Row>
        </Container>
    )
}

export default About;