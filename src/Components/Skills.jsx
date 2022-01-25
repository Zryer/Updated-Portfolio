import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
    return (
        <Container fluid id="Skills" className="skillsContainer">
            
            <Row className="text-center">
                <Col>
                    <h1 className="skillsTitle">These are my skills</h1>
                </Col>
            </Row>
            
            <Row className="text-center">
                <Col lg={4} className="skillsFlex">
                    <Card>
                        <Card.Header className="skillIcons"><i className="fab fa-html5 iconFA iconHTML"></i><i className="fab fa-css3-alt iconFA iconCSS"></i><i className="fab fa-js-square iconFA iconJS"></i></Card.Header>
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
                <Col lg={4} className="skillsFlex">
                    <Card>
                        <Card.Header className="skillIcons"><i className="fab fa-react iconFA iconREACT"></i></Card.Header>
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
                <Col lg={4} className="skillsFlex">
                    <Card>
                        <Card.Header className="skillIcons"><i className="fas fa-database iconFA iconMONGO"></i><i className="fab fa-react iconFA iconREACT"></i><i className="fab fa-node iconFA iconNODE"></i></Card.Header>
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
        </Container >
    )
}

export default Skills;