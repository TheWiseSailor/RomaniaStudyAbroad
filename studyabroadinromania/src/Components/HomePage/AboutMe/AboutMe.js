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
I'm currenlty pursuing an education to become an interior designer, I love getting to customize and make aesthetically pleasing home designs! I also love painting, and drawing when ever I have the chance!       </p>
      </div>
      <img src={Holly2} alt="Profile Picture" className="profile-picture" />
    </div>
    </div>
  );
};

export default AboutMe;
