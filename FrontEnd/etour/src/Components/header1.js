import React ,{useState}from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Header.css'; // Ensure this path is correct

import SearchDropdown from './SearchDropdown';
import {Link} from 'react-router-dom';
import Home from '../Pages/Home';




function Header() {
    const [isLoggedin, setIsLoggedin] = useState(false); // Manage login state

  // Function to toggle login state
  const toggleLoginState = () => {
    setIsLoggedin(!isLoggedin);
  };
  const handleLogout = () => {
    // Perform logout actions here
    // For example, clearing session storage
    sessionStorage.removeItem('uid');
    // Update login state
    setIsLoggedin(false);
  };
  return (
    <>
      
      
      <Navbar bg="dark" variant="dark"  expand="lg">
        <Container>
          <Navbar.Brand >
            <img
              src="./logo.png"
              height="40"
              alt="eTour Logo"
              className="logo-image"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
             
              <NavDropdown title="Tours" id="tours-dropdown">
                <NavDropdown.Item as={Link} to="/popular-tours" >Popular Tours</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/new-tours">New Tours</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/custom-tours">Custom Tours</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
              <Nav.Link as={Link} to="/Packages">Packages</Nav.Link>
              <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/Register">
              Register
            </Nav.Link>
            {isLoggedin ? ( // Conditionally render based on login state
              <>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
                <NavDropdown title="Search" id="basic-nav-dropdown">
                  <SearchDropdown/>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={toggleLoginState}>
                Login
              </Nav.Link>
            )}
            
            </Nav>
            <Form className="d-flex ml-auto">
              <FormControl
                type="text"
                placeholder="Search Tours"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
      {/* <div className="banner-container">
        <img
          src="https://via.placeholder.com/1920x300?text=Banner" // Update with your banner image path
          alt="Banner"
          className="banner-image"
        />
      </div> */}
    </>
    
  );
}

export default Header;
