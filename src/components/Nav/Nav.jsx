// src/Navbar.js
import React, { useState } from 'react';
import './Nav.css';
import logoImage from '../../assets/brown_logo.png'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="https://www3.cs.stonybrook.edu/~wics/pages/index.html" target="_blank" rel="noopener noreferrer">
        <img className='logo' src={logoImage} alt="wics logo"/>
      </a>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* <li><h1><a rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScfGGh5Z0vCOZdxE2o25L-ytRtje0S4OO9qMSzMhtq6FDwSww/viewform?usp=sf_link">Apply</a></h1></li> */}

        <li>
          <button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}onClick={() => {
            const element = document.getElementById('schedule');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <h1 href="#schedule">Schedule</h1>
          </button>
        </li>

        <li>
          <button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}onClick={() => {
            const element = document.getElementById('tracks');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <h1 href="#tracks">Tracks</h1>
          </button>
        </li>

        <li>
          <button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}onClick={() => {
            const element = document.getElementById('faq');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <h1 href="#faq">FAQ</h1>
          </button>
        </li>
        <li>
          <button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}onClick={() => {
            const element = document.getElementById('sponsors');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <h1 href="#sponsors">Sponsors</h1>
          </button>
        </li>
        <li>
          <button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}onClick={() => {
            const element = document.getElementById('contacts');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            <h1 href="#contacts">Contacts</h1>
          </button>
        </li>
      </ul>
    </nav>
  );
};


export default Nav;
