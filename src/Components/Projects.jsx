import { React, useState } from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import ProjectModal from './ProjectModal';

import Logo from '../Images/logo.png'
import RNH from '../Images/ReactNativeHome.png';
import Reacthome from '../Images/react.png'

const Projects = () => {
    return (
        <Container fluid id="Projects" className="projectsContainer">
            <Row className="text-center position-relative top-50">
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React Native</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="React" Desc="first image" Img={RNH} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second Screenshot" Desc="second image" Img={Logo} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Old Portfolio</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;