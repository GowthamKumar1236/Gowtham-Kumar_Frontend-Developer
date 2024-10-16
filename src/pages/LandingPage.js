import React from 'react';
import './LandingPage.css'
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <>
    <div className="bg-container">
      <Header/>
      <div className='heading-element'>
        <h1 className='heading'>When Innovation <br/> Meets <span className='span-element'>Investment</span></h1>
      </div>
      <p className='para'>Empowering Trading Through Advanced Technology</p>
      <div className='btn-element'>      
        <button className='open-btn'>Open dApp</button>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
