import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import abu from '../../images/abu.png'
import './abu.css'

const Abu = ({ onStart, onStop, onReset }) => {
    return (
        <div className="abu-container">

            <img
                src={abu}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    );
};

export default Abu;
