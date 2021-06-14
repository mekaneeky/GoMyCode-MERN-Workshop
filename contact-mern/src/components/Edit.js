import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="Username"
          />
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
            type="tel"
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

export default Contact;
