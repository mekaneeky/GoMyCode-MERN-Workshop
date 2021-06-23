import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddContact = () => {
  return (
    <Container>
      <Form action="http://localhost:4000/addcontact" method="Post">
        <Form.Group controlId="Username">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>

        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Enter Phone Number"
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email "
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default AddContact;
