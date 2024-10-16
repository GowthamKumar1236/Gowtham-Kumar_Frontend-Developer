import React from 'react';
import './Header.css'

const Header = () => {
  return (
      <nav className='header-container'>
        <ul className="alignment">
            <li className="alignment">Features</li>
            <li className="alignment">Why US</li>
            <li className="alignment">Takenomics</li>
            <li className="alignment">Roadmap</li>
        </ul>
        <div className='container'>
            <p className='log'>Log in</p>
            <div className='btn-container'>
                <button className='white-btn'>Whitepaper</button>
            </div>
        </div>
      </nav>
  );
};

export default Header;
