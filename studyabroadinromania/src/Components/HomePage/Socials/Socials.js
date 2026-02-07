import React from 'react';
import './Socials.css';
import mailIcon from './SocialImages/mail.png';

import instagramIcon from './SocialImages/instagram.png';

const Social = () => {
  const handleCall = () => {
    window.location.href = 'tel:+';
  };

  return (
    <div className="social-container">
      <div className='secondaryContainor'></div> {/* This is the black background */}
      <div className='SocialContactContainer' data-aos="fade-up" data-aos-duration="3000">
        <h2>Contact Me!</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/_the_noodle_lover_/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="mailto:jrr2238@uncw.edu" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Email" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Social;
