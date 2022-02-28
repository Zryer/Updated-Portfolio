import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IntroFade = () => {
    return (
        <Container fluid className="introFadeContainer">
            <Row>
                <Col className="introFadeDiv">
                    <h1 className="introFadeTitle">{<span className="fadeZ">Z</span>}achary <span className="fadeF">F</span>isher</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default IntroFade;