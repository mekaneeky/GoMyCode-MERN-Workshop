import "./App.css";
import { Form, Button, Container } from "react-bootstrap";
function SignUpForm() {
  return (
    <Container>
      <h5>Sign Up</h5>
      <Form action="http://localhost:4000/signup" method="post">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="email" />
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
