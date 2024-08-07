import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AboutPage.css'; // Import the custom CSS file

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our E-Tourism Platform</h1>
        <p>Welcome to our e-tourism platform! We are dedicated to providing you with the best online experience for exploring and planning your next travel adventures.</p>
      </header>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>At Tourpia, our mission is to connect travelers with unforgettable experiences and help them discover the beauty and diversity of destinations around the world.</p>
      </section>
      
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>We envision a world where travel is accessible to everyone, where cultural exchange enriches lives, and where sustainable tourism practices protect our planet for future generations.</p>
      </section>
      
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>Our platform offers a comprehensive range of features and services to make your travel planning seamless and enjoyable:</p>
        <ul>
          <li>Search and discover destinations, attractions, and activities worldwide</li>
          <li>Book flights, accommodations, and tours with ease</li>
          <li>Access expert travel guides, tips, and recommendations</li>
          <li>Connect with fellow travelers and share experiences</li>
          <li>Support for sustainable and responsible tourism initiatives</li>
        </ul>
      </section>
      
      <section className="about-section carousel-container">
        <h2>Meet Our Team</h2>
        <p>Behind our platform is a passionate team of travel enthusiasts, developers, designers, and content creators committed to delivering exceptional experiences for our users.</p>
        <p>We are dedicated to continuous improvement and innovation, ensuring that our platform evolves to meet the changing needs of travelers worldwide.</p>
        
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src="/about/PrasadAhire.jpg"
              alt="Team Member 1"
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/about/AkashSangle.jpg"
              alt="Team Member 2"
              className="d-block w-100"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/about/HarshalSarode.jpg"
              alt="Team Member 3"
              className="d-block w-100"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </section>
      
      <footer className="about-footer">
        <h2>Contact Us</h2>
        <p>Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out to our team via email, phone, or social media channels.</p>
        <p>Thank you for choosing Tourpia for your travel adventures!</p>
      </footer>
    </div>
  );
}

export default AboutPage;
