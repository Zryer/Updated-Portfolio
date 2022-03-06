import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Zach from '../../Images/Zach.jpg';

const About = () => {
    return(
        <Container id="About" className="aboutContainer">
            <Row className="text-center">
                <Col><Image roundedCircle="true" src={Zach} className="aboutImage"></Image></Col>
            </Row>
            <Row className="text-center">
                <Col xs={12}><h1>Hello, I'm Zachary Fisher. Nice to meet you!</h1></Col>
            </Row>
            <Row className="text-center">
                <Col xs={12}><h2>Even though I've just started my web development journey, I've realized that this is my new passion. I'm excited to continue learning more, and to find new oppurtunities for myself!</h2></Col>
            </Row>
        </Container>
    )
}

export default About;