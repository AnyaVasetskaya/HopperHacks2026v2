import React from 'react';
import './Pages.css';

const Apply = () => {
  return (
    <div>
      <p className='section-title'>~Apply~</p>
      <div style={{display: 'flex', alignItems: 'center', flexDirection:'column'}}>
        
          <button style={{zIndex: '8888', backgroundImage: `url(${applyImage})`, width: '900px'}}  className="sub-buttons">
            <h1><a rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}} target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScEnULt8WaWTGS8XNwhYtH2femvzaNcFTWPYBglAIwPkoAvVw/viewform?usp=sf_link">Apply as a Mentor</a></h1>
          </button>
          <button style={{zIndex: '8888', backgroundImage: `url(${applyImage})`, width: '900px'}}  className="sub-buttons">
            <h1><a rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}} target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdFX9mjuWEe_VP5P-EGU2ayepsHlFOTQv7QTqE8sI-fPzxEKw/viewform?usp=dialog">Apply as a Volunteer</a></h1>
          </button>
      </div>
    </div>
  );
};

export default Apply;

