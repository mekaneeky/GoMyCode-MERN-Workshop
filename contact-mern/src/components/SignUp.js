import "./App.css";
import { Form, Button, Container } from "react-bootstrap";
function SignUpForm() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="password_confirm"
            type="password"
            placeholder="Re-enter Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </Container>
  );
}

export default SignUpForm;
