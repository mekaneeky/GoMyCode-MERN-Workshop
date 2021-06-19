import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
const CustomModal = ({ name, email, phone, id, handleDelete }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {name} <br />
          {email}
          <br />
          {phone}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
