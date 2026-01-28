import React from 'react';
import tracksImage from "../assets/tracks.png"
import quillImage from "../assets/quill.PNG"
import './Pages.css';

const Tracks = () => {
  return (
    <div className='tracks-container'>
      <img className='tracks-image' src={tracksImage} alt="wics logo"/>
      <div className='tracks-blue-box'></div>
      <img className='tracks-quill' src={quillImage} alt="quill"/>
    </div>
  );
};

export default Tracks;

