import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card as BootstrapCard } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Card() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch category data from the API when the component mounts
    fetch('http://localhost:8080/api/categories')
      .then(res => res.json())
      .then(result => setPosts(result))
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  const handleButtonClick = (category) => {
    try {
      // Check the flag value
      console.log(category.flag);
      if (category.flag == 0) { // Use === for strict comparison
        // Redirect to /category/:categoryId if flag is 'true'
        console.log(category.catmaster_id);
        navigate(`/bypakage/${category.catmaster_id}`);
      } else {
        // Redirect to /bycatId/:categoryId if flag is not 'true'
        navigate(`/categories/${category.catmaster_id}`);
        console.log("hekko");
      }
    } catch (error) {
      console.error("Error handling button click:", error);
    }
  };

  return (
    <div className="container">
      <h1 align="center" style={{ color: 'red' }}>  Tours & Packages </h1>
      <br/>
      <Row>
        {posts.map(category => (
          <Col key={category.catmaster_id} md={4} className="mb-4">
            <BootstrapCard className="text-center">
              <BootstrapCard.Body>
                <BootstrapCard.Title>{category.cat_name}</BootstrapCard.Title>
                <BootstrapCard.Img
                  variant="top"
                  src={category.cat_image_path}
                  alt="No Image Found"
                  style={{ width: '100%', height: 'auto' }}
                />
              </BootstrapCard.Body>
              <BootstrapCard.Footer>
                <Button onClick={() => handleButtonClick(category)}>View Details</Button>
              </BootstrapCard.Footer>
            </BootstrapCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Card;
