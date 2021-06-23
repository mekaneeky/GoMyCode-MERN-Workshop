import React, { useState } from "react";

import EditContact from "./EditContact";
import { Modal, Button } from "react-bootstrap";
const CustomModal = ({ name, email, phone, id, handleDelete, handleEdit }) => {
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
          <p>id: {id}</p>

          <EditContact
            name={name}
            phone={phone}
            email={email}
            id={id}
            handleEdit={handleEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
