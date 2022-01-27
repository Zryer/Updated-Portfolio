import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../Images/react.png';

const About = () => {
    return(
        <Container id="About" className="aboutContainer">
            <Row className="text-center position-relative top-50">
                <Col><Image roundedCircle="true" src={Logo} className="aboutImage"></Image></Col>
                <Col xs={12}><h1>Hello, I'm Zachary Fisher. Nice to meet you!</h1></Col>
                <Col xs={12}><h2>Even though I've just started my web development journey, I've realized that this is my new passion. I'm excited to continue learning more, and to find new oppurtunities for myself!</h2></Col>
            </Row>
        </Container>
    )
}

export default About;