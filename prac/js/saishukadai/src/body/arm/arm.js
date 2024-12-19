import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import pushup from '../../images/pushup.png'
import './arm.css'

const Arm = ({ onStart, onStop, onReset }) => {
    return (
        <div className="arm-container">

            <img
                src={pushup}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    );
};

export default Arm;
