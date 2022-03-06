import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroFade from '../IntroFadeComponent/IntroFade';

const Intro = () => {
    return (
        <>
            <IntroFade />
            <Container fluid className="introContainer" id="Home">
                <Row className="introRow">
                    <Col className="mainContainer">
                    <Col className="introDiv" xs={12}>
                        <h1 className="introTitle">Welcome</h1>
                    </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Intro;