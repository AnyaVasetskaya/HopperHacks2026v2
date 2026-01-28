import React from 'react';
import tracksImage from "../assets/tracks.png"
import './Pages.css';

const Tracks = () => {
  return (
    <div>
      <img className='tracks-image' src={tracksImage} alt="wics logo"/>
    </div>
  );
};

export default Tracks;

