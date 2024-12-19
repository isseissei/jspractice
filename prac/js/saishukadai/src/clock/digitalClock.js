import React, { useState, useEffect } from 'react';
import './digitalClock.css';  // CSSファイルをインポート

const DigitalClock = ({ mosaicStrength }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <div className="clock-container">
      <h1 className="time" style={{ filter: `blur(${mosaicStrength}px)` }}>
        {time}
      </h1>
    </div>
  );
};

export default DigitalClock;
