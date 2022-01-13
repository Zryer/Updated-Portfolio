import { React, useState } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

const ProjectModal = ({ Name, Desc, Img }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <img className="carouselImage" src={Img} alt="first" onClick={handleOpen} />
            <Modal show={show} onHide={handleClose} className="projectModal">
                <Modal.Header closeButton>
                    <Modal.Title>{Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="modalRow">
                            <Col xs={12}>{Desc}</Col>
                            <Col xs={12}><Image src={Img} className="modalImage"></Image></Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href="https://github.com/mj-wd/oahu-project-react-native" target="blank">Github</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectModal;