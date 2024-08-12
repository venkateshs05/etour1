import logo from './logo.svg';
import './App.css';

import {Botton,Container,Row,Col} from 'react-bootstrap'
import Header from './Components/header1';
//import Home from './Pages/Home';
//import RegFormComp from './Components/RegFormComp';
import Slider from './Components/Slider';
import Crawling from './Components/Crawling';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';




function App() {
  return (
    <>
     <Header />
       <Slider /> 
      
      
      <div> <Crawling /></div>
     
      <div className="ref"><Outlet /></div>
      <Footer />
    
    
    {/* <Row>
      <Col md={4}>
      <img
              src="./addvertisebanner.jpg"
              height="300"
               width="70"
              alt="eTour Logo"
              className="logo-image"
            />
      
      </Col>
      <Col md={8}>
      <h1>hello</h1>
      </Col>
    </Row> */}

    </>
    

  );
}

export default App;