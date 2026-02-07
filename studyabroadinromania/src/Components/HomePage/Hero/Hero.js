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
          <p className='P1'>"Try not to become a man of success, but rather try to become a man of value."</p>
        </section>
        <p className='P2'>"Try not to become a man of success, but rather try to become a man of value." <br/> - Taylor Swift</p>
      </div>
    </div>
  );
}

export default HomePage;