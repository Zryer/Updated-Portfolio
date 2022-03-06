import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {IconHTML, IconCSS, IconJS, IconREACT, IconARROWDOWN, IconREACTNATIVE } from '../IconsComponent/Icons';
import ProjectModal from '../ProjectsModalComponent/ProjectModal';


import ReactNativeHome from '../../Images/ReactNativeHome.png';
import ReactNativeAbout from '../../Images/ReactNativeAbout.png';
import ReactNativeAttractions from '../../Images/ReactNativeAttractions.png';
import ReactNativeMap from '../../Images/ReactNativeMap.png';
import ReactNativeBeaches from '../../Images/ReactNativeBeaches.png';
import Reacthome from '../../Images/ReactHome.png'
import RHome from '../../Images/ReactHome.png';
import RB from '../../Images/ReactBeaches.png';
import RR from '../../Images/ReactRestaurants.png';
import RShops from '../../Images/ReactShops.png';
import RSights from '../../Images/ReactSights.png';
import RT from '../../Images/ReactTraditions.png';

const Projects = () => {
    const [show, setShow ] = useState(false);
    const toggleShow = () => setShow(!show);

    return (
        <Container fluid id="Projects" className="projectsContainer">
            <Row className="text-center">
                <Col xs={12}><Button variant="danger" onClick={toggleShow}>Toggle Projects</Button></Col>
                <Col md={6}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React Native</Card.Title>
                            {show?<Carousel variant="dark" pause={false} className={show}>
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
                            </Carousel>: null}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Project React</Card.Title>
                            {show?<Carousel variant="dark" pause={false} className={show}>
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
                            </Carousel>: null}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Old Portfolio</Card.Title>
                            {show?<Carousel variant="dark" pause={false} className={show}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} Github="https://github.com/Zryer/Old-Portfolio" />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} Github="https://github.com/Zryer/Old-Portfolio" />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>: null}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="projectCard">
                        <Card.Body>
                            <Card.Title>Updated Portfolio</Card.Title>
                            {show?<Carousel variant="dark" pause={false} className={show}>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Home page of react Project" Desc="first image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carouselItem" interval={10000}>
                                    <ProjectModal Name="Second project second image" Desc="second image" Icon={<><IconHTML /><IconCSS /><IconJS /><IconREACT /></>} IconHeader={<h1>Built using {<IconARROWDOWN />}</h1>} Img={Reacthome} />
                                    <Carousel.Caption>This is my first project</Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>: null}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;