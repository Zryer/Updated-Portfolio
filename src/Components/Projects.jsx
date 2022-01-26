import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

import {IconHTML, IconCSS, IconJS, IconMONGO, IconNODE, IconREACT, IconARROWDOWN, IconREACTNATIVE } from './Icons';
import ProjectModal from './ProjectModal';

import ReactNativeHome from '../Images/ReactNativeHome.png';
import ReactNativeAbout from '../Images/ReactNativeAbout.png';
import ReactNativeAttractions from '../Images/ReactNativeAttractions.png';
import ReactNativeMap from '../Images/ReactNativeMap.png';
import ReactNativeBeaches from '../Images/ReactNativeBeaches.png';
import Reacthome from '../Images/ReactHome.png'
import RHome from '../Images/ReactHome.png';
import RB from '../Images/ReactBeaches.png';
import RR from '../Images/ReactRestaurants.png';
import RShops from '../Images/ReactShops.png';
import RSights from '../Images/ReactSights.png';
import RT from '../Images/ReactTraditions.png';

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
                                    <ProjectModal Name="React Native Project Home Page" Desc="This is the home page" Icon={<><IconREACTNATIVE /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={ReactNativeHome} Github="https://github.com/mj-wd/oahu-project-react-native" />
                                    <Carousel.Caption>Home Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="React Native Project Attractions Page" Desc="This is the attractions page" Icon={<><IconREACTNATIVE /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={ReactNativeAttractions} Github="https://github.com/mj-wd/oahu-project-react-native" />
                                    <Carousel.Caption>Attractions Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="React Native Project Beaches Page" Desc="This is the beaches page" Icon={<><IconREACTNATIVE /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={ReactNativeBeaches} Github="https://github.com/mj-wd/oahu-project-react-native" />
                                    <Carousel.Caption>Beaches Page from Attractions</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="React Native Project Map Page" Desc="This is the map page" Icon={<><IconREACTNATIVE /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={ReactNativeMap} Github="https://github.com/mj-wd/oahu-project-react-native" />
                                    <Carousel.Caption>Map Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="React Native Project About Page" Desc="This is the about page" Icon={<><IconREACTNATIVE /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={ReactNativeAbout} Github="https://github.com/mj-wd/oahu-project-react-native" />
                                    <Carousel.Caption>About Page</Carousel.Caption>
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
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RHome} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Home Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RB} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Beaches Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RT} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Traditions Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RSights} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Sightseeing Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RR} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Restaurants Page</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={RShops} Github="https://github.com/mj-wd/oahu-project-react" />
                                    <Carousel.Caption>Shopping Page</Carousel.Caption>
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
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} Github="https://github.com/Zryer/Old-Portfolio" />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} Github="https://github.com/Zryer/Old-Portfolio" />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Updated Portfolio</Card.Title>
                            <Carousel variant="dark" pause={false}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
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
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
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
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
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