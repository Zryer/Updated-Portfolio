import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

const Intro = () => {
    return(
        <Container fluid className="hero" id="Home">
            <Row className="">
                <Col className="">
                    <h1 className="position-absolute top-50 start-50 translate-middle text-danger">Hello</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;