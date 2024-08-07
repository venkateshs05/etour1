import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import './LoginForm.css'; // Import custom CSS

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const catid = sessionStorage.getItem("catid");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/customers/customer/login/${username}/${password}`);
      const result = await response.json();

      if (result === '') { // if login failed empty string returned
        alert('No user found. Please Enter Valid Credentials.');
      } else {
        alert("!!! User Logged In successfully !!!");
        sessionStorage.setItem("uid", result.custId);
        const storedCustId = sessionStorage.getItem("uid");
        console.log("User ID:", storedCustId);

        if (catid === null) {
          alert('No user found. Please Enter Valid Credentials.');
          navigate('/');
        } else {
          navigate(`/bypassenger/${catid}`);
          // navigate(`/`);
        }
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6} lg={4}>
            <Card className="shadow-lg rounded">
              <Card.Body>
                <Card.Title className="text-center mb-4">Login</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={handleUsernameChange}
                      required
                      className="login-input"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      className="login-input"
                    />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit" className="w-100 mb-2 login-button">
                    Login
                  </Button>
                  
                  <Button 
                    variant="link" 
                    onClick={() => navigate(`/Register`)}
                    className="w-100 text-center d-block"
                  >
                    Go to Registration
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
