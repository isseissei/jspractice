import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import squat from '../../images/squat.png'
import './leg.css'


const Leg = ({ onStart, onStop, onReset }) => {
  return (
    <div className="leg-container">

            <img
                src={squat}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
  );
};

export default Leg;
