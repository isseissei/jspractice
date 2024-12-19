import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import chinup from '../../images/chinup.png'
import './chinup.css'

const Chinup = ({ onStart, onStop, onReset }) => {
    return (
        <div className="chinup-container">

            <img
                src={chinup}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    );
};

export default Chinup;
