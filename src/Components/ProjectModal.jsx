import { React, useState } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

const ProjectModal = ({ Name, Desc, Img, Github, Icon }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <img className="carouselImage" src={Img} alt="first" onClick={handleOpen} />
            <Modal show={show} onHide={handleClose} className="projectModal">
                <Modal.Header className="modalTitle">
                    <Modal.Title>{Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="modalRow">
                            <Col xs={12}><Image src={Img} className="modalImage"></Image></Col>
                            <Col xs={12}>{Desc}</Col>
                            <Col xs={12}>{Icon}</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href={Github} target="blank">Github</Button>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectModal;