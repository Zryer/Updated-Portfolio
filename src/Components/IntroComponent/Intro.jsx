import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

const Intro = () => {
    return(
        <Container fluid className="introContainer" id="Home">
            <Row>
                <Col>
                    <h1 className="position-absolute top-50 start-50 translate-middle text-danger">Welcome</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;