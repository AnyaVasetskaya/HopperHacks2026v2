import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Schedule from './pages/Schedule.jsx';
import FAQ from './pages/FAQ.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Contacts from './pages/Contacts.jsx';
import React, { useEffect, useState } from 'react';
import Star from './components/Star/Star.jsx'
import applyImage from './assets/apply.png';
import pathsImage from './assets/paths.png';
import shipImage from './assets/hopper_ship.png'
import xImage from './assets/X.png'
import Tracks from './pages/Tracks.jsx';
import Environment from './pages/Environment.jsx';

const stars = [
  { left: 23, top: 8, size: 9 },
  { left: 85, top: 10, size: 5 },
  { left: 31, top: 9, size: 3 },
  // Add more stars with specific coordinates
];

const App = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.title = 'HopperHacks X: 2025'; // Set your desired tab title here
  }, []);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to ensure it triggers after render

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{backgroundImage: `url(${pathsImage})`}} className='background'>
      <Nav />
      {stars.map((star, index) => (
        <Star key={index} left={star.left} top={star.top} size={star.size} />
      ))}
      <div className='left-images'>
        <img className='ship' src={shipImage} alt="ship smudge"/>
      </div>
      <img className='x' src={xImage} alt="an x"/>
      <div className='info-container'>
        <p className={animate ? 'slide-in-left title' : 'title'}>HopperHacks</p>
        <p className={animate ? 'slide-in-left year' : 'year'}>2025</p>
        <h1 className={animate ? 'slide-in-left dates' : 'dates'}>02.22 - 02.23</h1>
        <div className='apply-button'>
          <button style={{zIndex: '8888', backgroundImage: `url(${applyImage})`}}  className="actual-button">
            <h1><a rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}} target='_blank' href="https://www3.cs.stonybrook.edu/~wics/pages/index.html">by WiCS</a></h1>
          </button>
        </div>
        <div className='pages'>

          <div id="schedule">
            <Schedule/>
          </div>
          <div id='tracks'>
            <Tracks/>
          </div>
          <div id="faq">
            <FAQ/>
          </div>
          <div id="sponsors">
            <Sponsors/>
          </div>
          <div id='contacts'>
            <Contacts/>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>Brought to you by Women in Computer Science at Stony Brook University</p>
      </div>
    </div>
  );
};

export default App;

