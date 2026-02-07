import React from 'react';
import './AboutMe.css'; // Import the CSS file
import Holly2 from'./AboutMeImages/Holly2.png'
const AboutMe = () => {
  return (
    <div className='AboutBG'>
    <div className="about-me-container-primary">
      
      <div className="ABContainer">
        <h2 className='H2Header'>About Me</h2>
        <p className='AboutMeP'>
I'm currenlty pursuing a Bachelors in CS, and a minor in Real Estate. I would love to work in a field where I am in software engineering, and sales related.       </p>
      </div>
      <img src={Holly2} alt="Profile Picture" className="profile-picture" />
    </div>
    </div>
  );
};

export default AboutMe;
