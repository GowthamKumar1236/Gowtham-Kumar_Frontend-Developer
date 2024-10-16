import React from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App"> 
      <LandingPage />
      <img src='https://res.cloudinary.com/dzxsnrerx/image/upload/v1729063931/Container_1_capsus.png' className='component-image' alt='container-1'/>
      <img src='https://res.cloudinary.com/dzxsnrerx/image/upload/v1729064389/Container_2_udhkow.png' className='component-image' alt='container-2'/>
      <div className='container-3'>
      <img src='https://res.cloudinary.com/dzxsnrerx/image/upload/v1729064563/Container_3_ijzxxy.png' className='component-image' alt='container-3'/>
      </div>
    </div>
  );
}

export default App;