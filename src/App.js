import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MyCarousel from './MyCarousel';
// Import Routes and Route from react-router-dom
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import AboutUs from './Aboutus';
import OurServices from './OurServices';
import OurProducts from './OurProducts';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './ContactUs';
import NotFound from './NotFound';



function App() {
  return (
  
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/products" element={<OurProducts/>}/>
    <Route path="/services" element={<OurServices/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
   
   
   </BrowserRouter>
  );
}

export default App;
