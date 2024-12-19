import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import dead from '../../images/dead.png'
import './dead.css'

const Dead = ({ onStart, onStop, onReset }) => {
    return (
        <div className="dead-container">

            <img
                src={dead}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    );
};

export default Dead;
