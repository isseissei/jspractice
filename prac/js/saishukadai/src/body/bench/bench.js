import React from 'react';
// import startImage from './images/start.png';
// import stopImage from './images/stop.png';
// import resetImage from './images/reset.png';
import bench from '../../images/bench.png'
import './bench.css'

const Bench = ({ onStart, onStop, onReset }) => {
    return (
        <div className="bench-container">

            <img
                src={bench}
                alt="Start Timer"
                onClick={onStart}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    );
};

export default Bench;
