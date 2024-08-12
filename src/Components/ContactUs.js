import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactUs.css'; // Import the custom CSS file
import { useTranslation } from 'react-i18next'; 
function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <Container className="contact-container">
     <h1>{t('Contact Us')}</h1>

      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>{t('Name')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('Enter your name')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>{t('Email address')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("Enter your email")}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>{t('Message')}</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder={t("Your message")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {t('Submit')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
