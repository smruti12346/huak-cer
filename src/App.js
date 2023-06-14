
import React from 'react'

import TopNavbar from './components/header/TopNavbar';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import FeatureServices from './components/FeatureServices';
import About from './components/About';
import CommonServices from './components/CommonServices';
import Cta from './components/Cta';
import LabIntroduction from './components/LabIntroduction';

import Cta2 from './components/Cta2';
import LatestNews from './components/LatestNews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial'


function App() {
  return (
    <>
     <TopNavbar/>
     <Navbar/>
    <Banner/>
    <FeatureServices/>
    <About/>
    <CommonServices/>
    <Cta/>
   
    <LabIntroduction/>

  <Testimonial/>  
    <Cta2/>
    <LatestNews/>
    <ContactForm/>
    <Footer/>
    </>
  );
}

export default App;
