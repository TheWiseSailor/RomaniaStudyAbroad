import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';
import Contact from './Components/Contact/Contact'; 
import Portfolio from './Components/Portfolio/Portfolio'; 

const App = () => {
  return (
    /* Add basename so it knows it lives in the RomaniaStudyAbroad folder */
    <Router basename="/RomaniaStudyAbroad">
      <div>
        <Header />
        <Routes> 
          {/* Default home route */}
          <Route path="/" element={<HomeRender />} /> 
          
          {/* Specific page routes */}
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 

          {/* Catch-all: If someone goes to a broken link, send them Home */}
          <Route path="*" element={<HomeRender />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;