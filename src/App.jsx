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
    <div className='background'>
      <Nav />
      {stars.map((star, index) => (
        <Star key={index} left={star.left} top={star.top} size={star.size} />
      ))}
      <div className='info-container'>
        <div className='header-container'>
          <img className={animate ? 'owl-image fade-in-rotate' : 'owl-image'} src={owlImage} alt="owl"/>
          <img className={animate ? 'hh-logo-image fade-in-up' : 'hh-logo-image'} src={logoImage} alt="wics logo"/>
          <div className='role-images-stack'>
            <a href="https://forms.gle/hackerlink" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={hackerImage} alt="hacker"/>
              <p className="role-text">Hacker Registration</p>
            </a>
            <a href="https://forms.gle/mentorlink" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={mentorImage} alt="mentor"/>
              <p className="role-text">Mentor Application</p>
            </a>
            <a href="https://forms.gle/judgelink" target="_blank" rel="noopener noreferrer" className={animate ? 'role-link fade-in-right' : 'role-link'}>
              <img className='role-image' src={judgeImage} alt="judge"/>
              <p className="role-text">Judge Application</p>
            </a>
          </div>
        </div>
        {/* <h1 className={animate ? 'slide-in-left dates' : 'dates'}>02.22 - 02.23</h1> */}
       
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

