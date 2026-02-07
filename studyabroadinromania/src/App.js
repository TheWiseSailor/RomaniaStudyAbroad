import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';
import Contact from '../src/Components/Contact/Contact'; 
import Portfolio from '../src/Components/Portfolio/Portfolio'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/Holly.CO" element={<HomeRender />} />
          <Route path="/" element={<HomeRender />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
