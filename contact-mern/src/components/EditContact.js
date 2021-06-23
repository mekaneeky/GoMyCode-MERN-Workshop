import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const EditContact = ({ name, email, phone, id, handleEdit }) => {
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [contactEmail, setContactEmail] = useState(email);
  let formValues = {
    name: contactName,
    phone: contactPhone,
    email: contactEmail,
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="Username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Enter Phone Number"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email "
            autoComplete="off"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleEdit(id, formValues)}
        >
          Save
        </Button>
      </Form>
    </Container>
  );
};
export default EditContact;
