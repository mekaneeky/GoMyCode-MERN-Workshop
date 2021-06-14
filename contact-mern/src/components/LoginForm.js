import "./App.css";
import {Form} from "react-bootstrap";
function LoginForm() {
    
  return (
    <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name="username" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  )
}

export default LoginForm;
