import React from 'react';
import tracksImage from "../assets/tracks.png"
import './Pages.css';

const Tracks = () => {
  return (
    <div>
      <p className='section-title'>Tracks</p>
      <img className='schedule-image' src={tracksImage} alt="wics logo"/>

    </div>
  );
};

export default Tracks;

