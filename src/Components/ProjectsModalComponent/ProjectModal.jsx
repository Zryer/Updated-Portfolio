import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const ProjectModal = ({ Name, Desc, Img, Github, Icon, IconHeader }) => {
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
                <Modal.Body className="modalBody">
                    <Container>
                        <Row className="modalRow">
                            <Col xs={12}><Image src={Img} className="modalImage"></Image></Col>
                            <Col xs={12}>{Desc}</Col>
                            <Col xs={12}>{IconHeader}</Col>
                            <Col xs={12} className="modalIcons">{Icon}</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button variant="secondary" href={Github} target="blank">Github</Button>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectModal;