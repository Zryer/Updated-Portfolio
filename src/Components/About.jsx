import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../Images/react.png';

const About = () => {
    return(
        <Container id="About" className="aboutContainer">
            <Row className="text-center position-relative top-50">
                <Col><Image roundedCircle="true" src={Logo} className="aboutImage"></Image></Col>
                <Col xs={12}>Hello, I'm Zachary Fisher. Nice to meet you!</Col>
                <Col xs={12}>Even though I've just started my web development journey, I've quickly realized that this is my new passion. I'm excited to continue learning more, and to find new oppurtunities for myself!</Col>
            </Row>
        </Container>
    )
}

export default About;