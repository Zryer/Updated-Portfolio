import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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