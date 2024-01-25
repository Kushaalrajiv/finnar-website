import React from 'react';
import Carousel from './components/Carousel.js';
import Navbar from './components/Navbar.js';
import faq from "./components/faq"
import Dropdown from './components/dropdown';
import AboutUs from './components/AboutUs';


import './App.css';

function App() {
  const service1_faq = faq[0].service1
  const service2_faq = faq[0].service2
  const dropdown1 = service1_faq.map(item => {
    return (
       <Dropdown 
         key = {item.id}
         item = {item}
        />
    )
  })

  const dropdown2 = service2_faq.map(item =>{
    return (
      <Dropdown
       key ={item.id}
       item={item}
       />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <AboutUs />

      <div className="Faq_overall">
        <h1 className="Faq_Header">FAQs</h1>
        <div className="Faq_container">
          <div id="CFO_Faq">
            <h3 className="CFO_header">CFO Services for Small Businesses</h3>
            <section className="CFO">
              {dropdown1}
            </section>
          </div>
          <div id="Account_Faq">
            <h3 className="Account_header">Accounting Outsourcing Services</h3>
            <section className="Accountname">
              {dropdown2}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
