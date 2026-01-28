// src/Navbar.js
import React, { useState } from 'react';
import './Nav.css';
import logoImage from '../../assets/dark_wics_logo.png'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <a
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: 0,
          right: "clamp(0.5rem, 2vw, 2rem)",
          width: "clamp(60px, 7vw, 100px)",
          zIndex: 10000,
        }}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          style={{ width: "100%", height: "auto" }}
        />
      </a>
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
    </>
  );
};


export default Nav;
