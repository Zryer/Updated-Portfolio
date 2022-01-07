import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Logo from '../Images/logo.png'

const Skills = () => {
    return (
        <Container id="Skills" className="skillsContainer">
            <Row className="text-center">
                <Col>
                    <h1>These are my skills</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>
                                HTML5 / CSS3 / JavaScript
                            </Card.Title>
                            <Card.Text>
                                I taught myself the basics of HTML, CSS, and JavaScript when first learning how to develop websites. I was using online tools such as freecodecamp.org and w3schools to help guide me and fill in the blanks of my knowledge.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>
                                React / React Native
                            </Card.Title>
                            <Card.Text>
                                I attended Nucamp coding bootcamp where they taught me how to use React and React Native. I used my previous knowledge of HTML, CSS, and JavaScript to start developing websites in React and React Native. Eventually I started to become comfortable working with React states and using components to build out my websites.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body>
                            <Card.Title>
                                MERN Stack
                            </Card.Title>
                            <Card.Text>
                                After graduating Nucamp I was equipped with the knowledge of the MERN stack. I was able to build full stack websites using React in the front end, Node and Express in the back end, and Mongo as my database.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;