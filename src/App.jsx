import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Schedule from './pages/Schedule.jsx';
import FAQ from './pages/FAQ.jsx';
import Sponsors from './pages/Sponsors.jsx';
import Contacts from './pages/Contacts.jsx';
import React, { useEffect, useState } from 'react';
import Star from './components/Star/Star.jsx'
import Tracks from './pages/Tracks.jsx';
import logoImage from './assets/hh26 logo.png'
import mentorImage from './assets/mentor.PNG'
import judgeImage from './assets/judge.PNG'
import hackerImage from './assets/hacker.PNG'
import owlImage from './assets/owl.PNG'
import byWicsImage from './assets/by WiCS.png'
import bricksImage from './assets/bricksv1.png'
import envelopeImage from './assets/envelope.PNG'
import invitationImage from './assets/invitationUpdated.png'
import cloud1Image from './assets/cloud 1.png'
import cloud3Image from './assets/cloud 3.png'
import logoHopperImage from './assets/logo hopper.PNG'
import starry1Image from './assets/starry1.png'
import starry2Image from './assets/starry2.png'
import starry3Image from './assets/starry3.png'
import stars3Image from './assets/stars 3.png'
import stars4Image from './assets/stars 4.png'

const stars = [
  { left: 23, top: 8, size: 9 },
  { left: 85, top: 10, size: 5 },
  { left: 31, top: 9, size: 3 },
  // Add more stars with specific coordinates
];

const App = () => {

  const [animate, setAnimate] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  useEffect(() => {
    document.title = 'HopperHacks 2026'; // Set your desired tab title here
  }, []);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to ensure it triggers after render

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mouse sparkle trail effect
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';

      // Random size and rotation
      const size = Math.random() * 10 + 5;
      sparkle.style.width = size + 'px';
      sparkle.style.height = size + 'px';
      sparkle.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(sparkle);

      // Remove sparkle after animation
      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    let lastTime = 0;
    const throttleDelay = 50; // Create sparkle every 50ms

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastTime >= throttleDelay) {
        createSparkle(e.clientX, e.clientY);
        lastTime = currentTime;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{backgroundImage: `url(${bricksImage})`}} className='background'>
      <div className='starry-background'>
        <div className='starry-layer starry-1' style={{backgroundImage: `url(${starry1Image})`}}></div>
        <div className='starry-layer starry-2' style={{backgroundImage: `url(${starry2Image})`}}></div>
        <div className='starry-layer starry-3' style={{backgroundImage: `url(${starry3Image})`}}></div>
      </div>
      <Nav />
      {stars.map((star, index) => (
        <Star key={index} left={star.left} top={star.top} size={star.size} />
      ))}
      <div className='info-container'>
        <div className='header-container'>
          <div className='owl-container'>
            <img className={animate ? 'owl-envelope fade-in-rotate' : 'owl-envelope'} src={envelopeImage} alt="mini envelope"/>
            <img className={animate ? 'owl-image fade-in-rotate' : 'owl-image'} src={owlImage} alt="owl"/>
          </div>
          <div className='logo-container'>
            <img className={animate ? 'hh-logo-image fade-in-up' : 'hh-logo-image'} src={logoImage} alt="wics logo"/>
            <img className='logo-star logo-star-3' src={stars3Image} alt="star 3"/>
            <img className='logo-star logo-star-4' src={stars4Image} alt="star 4"/>
            <h1 className='dates'>Feb 21-22</h1>
            <a href="https://www3.cs.stonybrook.edu/~wics/pages/index.html" target="_blank" rel="noopener noreferrer">
              <img className='by-wics-image' src={byWicsImage} alt="by WiCS"/>
            </a>
          </div>
          <div className='role-images-stack'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZMfBfluve6xPbB2RWc2MndtQHvB-pAK_XOZDyyHghVCpGkg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={hackerImage} alt="hacker"/>
              <p className="role-text">Hacker Registration</p>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1jelBrS65iw3JdC8bjPLMbNEyPibUQducjKY6MODve1_nZQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={mentorImage} alt="mentor"/>
              <p className="role-text">Mentor Application</p>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWj0T7Oys4lcqehwKc-E9Ics5roca8PP2L8r-Znya1gXLZ4Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={judgeImage} alt="judge"/>
              <p className="role-text">Judge Application</p>
            </a>
          </div>
        </div>

        {/* envelope */}
        <div className='envelope-container'>
          <img
            className='envelope-image'
            src={envelopeImage}
            alt="envelope"
            onClick={() => setShowInvitation(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Invitation Popup */}
        {showInvitation && (
          <div className='invitation-overlay' onClick={() => setShowInvitation(false)}>
            <div className='invitation-modal' onClick={(e) => e.stopPropagation()}>
              <button className='close-button' onClick={() => setShowInvitation(false)}>×</button>
              <img className='invitation-image' src={invitationImage} alt="invitation"/>
            </div>
          </div>
        )}

        <div className='pages'>

          <div id="schedule">
            <Schedule/>
          </div>

          <div className='cloud-hopper-row'>
            <img className='cloud-image' src={cloud1Image} alt="cloud 1"/>
            <img className='hopper-logo-image' src={logoHopperImage} alt="logo hopper"/>
            <img className='cloud-image' src={cloud3Image} alt="cloud 3"/>
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

