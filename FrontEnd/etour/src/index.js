import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import RegFormComp from './Components/RegFormComp';
import About from './Components/About';
import LoginForm from './Components/LoginForm';
import SubCatName from './Components/SubCatName';
import ContactUs from './Components/ContactUs';
import PackageMaster from './Components/PackageMaster';
import CostMasterDetails from './Components/CostMasterDetails';
import Passenger from './Components/Passenger';
import Booking from './Components/Booking';
import CostItinerary from './Components/CostItinerary';
import BookingPage from './Components/BookingPage';
import OrderPage from './Components/OrderPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         < Route path='/' element={<App />} >

         <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<RegFormComp />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/bypkgId/:catid" element={<BookingPage />} /> 
          <Route path="/categories/:cat_id" element={<SubCatName />} />
          {/* <Route path="/bypkgId/:catMasterId" element={<PackageMaster />} />  */}
          <Route path="/bypakage/:catMasterId" element={<PackageMaster />} />
          <Route path="/Packages" element={<PackageMaster />} />
          <Route path="/bycostMasterId/:catMasterId" element={<CostMasterDetails />} /> 
          {/* <Route path="/bycostMasterId/:catid" element={<Passenger />} />  */}
          <Route path="/success-page"  element={<Booking />} />
          <Route path='/login/:pkgId' element={<LoginForm />} /> 
          <Route path="/bypassenger/:catid" element={<Passenger />} />  
           
         
      

          
          
           {/* <Route path='/login' element={<Login />} /> */}
          
          
          
          
          
          {/* <Route path="/bycatId/:catId" element={<SubSector />} /> 
          
          
          <Route path="/bycostMasterId/:catMasterId" element={<CostMasterDetails />} /> 
          <Route path="/bypkgMasterId/:catid" element={<CostItinerary />} /> 
          
          <Route path="/bybooking/:pkgId" element={<Booking />} /> 
          <Route path="/Registration" element={<RegFormComp />} /> 
          <Route path="/email" element={<OrderPage />} />  */}
          <Route path="/success-page" element={<OrderPage />} />   

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
