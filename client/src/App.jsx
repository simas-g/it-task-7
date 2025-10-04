import "./App.css";
import { Button, Alert, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <h1>Vite + React + Bootstrap</h1>
      <Alert variant="success">
        This is a successful alert with React Bootstrap.
      </Alert>
      <Row>
        <Col md={6}>
          <Button variant="primary">Primary Button</Button>
        </Col>
        <Col md={6}>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
