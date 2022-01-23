import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  buttonText,
  onSubmit,
}) {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Row>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Button type="submit">{buttonText}</Button>
          </Form.Group>
        </Form>
      </Row>
    </Col>
  );
}

export default AuthForm;
