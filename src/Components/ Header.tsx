import React from 'react';
import '../styles/Header.css';
import im1 from '../assets/Animation - 1702190724762.gif'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={im1} alt="Logo" width="60" />
      </div>
      <nav className='nava'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Categories +</h3>
        <h3>Our Blog</h3>
        <h3>Contact Us</h3>
        <h3>Profile</h3>
        <h3>Lock Out</h3>
      </nav>
    </header>
  );
};

export default Header;
