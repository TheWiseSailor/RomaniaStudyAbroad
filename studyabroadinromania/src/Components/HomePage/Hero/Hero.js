import React from 'react';
import Holly from './HeroImages/Holly.png'
import './Hero.css';

const HomePage = () => {
  return (
    <div>
      <div className='LeftBackground'></div>
      <div className='HomePagePrimary'>
        <section className='Section1'>
          <img src={Holly} alt="Holly" className="Holly1" />
          <p className='P1'>"Fearless. Strong. Independent." - Taylor Swift</p>
        </section>
        <p className='P2'>"Fearless. Strong. Independent." <br/> - Taylor Swift</p>
      </div>
    </div>
  );
}

export default HomePage;