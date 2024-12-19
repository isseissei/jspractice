import React, { useState, useEffect } from 'react';
import './IntervalTimer.css';

const IntervalTimer = ({ isRunning, reset, onComplete }) => {
    const initialTime = 120; // 2分
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        let interval;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            onComplete(); // タイマーが終了したら親に通知
        } else {
            clearInterval(interval);
        }

        // クリーンアップ処理
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, onComplete]);

    // リセット時にタイマーを初期値に戻す
    useEffect(() => {
        if (reset) {
            setTimeLeft(initialTime);
        }
    }, [reset]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="timer-container">
            <div className="timer">
                <h1>{formatTime(timeLeft)}</h1>
                {/* {timeLeft === 0 && <p>タイマー終了！</p>} */}
            </div>
        </div>
    );
};

export default IntervalTimer;
