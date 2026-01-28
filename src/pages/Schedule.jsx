import React from 'react';
import scheduleImage from "../assets/hh26_schedj_coming_soon.png"
import './Pages.css';

const Schedule = () => {
  return (
    <div>
      <p className='section-title'>~Schedule~</p>
      <img className='schedule-image' src={scheduleImage} alt="wics logo"/>
    </div>
  );
};

export default Schedule;