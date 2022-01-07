import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Projects = () => {
    return(
        <Container id="Projects" className="projectsContainer">
            <Row className="text-center position-relative top-50">
                <Col>Hello there Projects me</Col>
                <Button variant="danger">Button Projects</Button>
            </Row>
        </Container>
    )
}

export default Projects;