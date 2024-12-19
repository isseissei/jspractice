import React, { useState, useEffect } from 'react';
import './App.css';
import macchoMan from './images/macchoMan.png';
import pushup from './images/pushup.png';
import squat from './images/squat.png';
import Arm from './body/arm/arm';
import DigitalClock from './clock/digitalClock';
import IntervalTimer from './compornents/timer/IntervalTimer';
import TaskImages from './compornents/TaskManager/TaskImages';
import Leg from './body/leg/leg';
import Bench from './body/bench/bench';
import CongratsPopup from './compornents/Popup/CongratsPopup';
import Cookies from 'js-cookie';
import Abu from './body/abu/abu';
import Dead from './body/dead/dead';
import Chinup from './body/chinup/chinup';


const maxTask = 9


function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false); // タイマーが完了したかを管理

  const startTimer = () => {
    setIsRunning(true);
    setReset(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setReset(true);
  };

  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = Cookies.get('completedTasks');
    return savedTasks ? parseInt(savedTasks, 10) : 0;
  });

  const increaseTaskCount = () => {
    setCompletedTasks((prev) => {
      const newTaskCount = Math.min(prev + 1, maxTask);
      Cookies.set('completedTasks', newTaskCount, { expires: 1 });
      return newTaskCount;
    });
  };

  const resetTaskCount = () => {
    setCompletedTasks(0);
  };

  const [mosaicStrength, setMosaicStrength] = useState(() => {
    // クッキーからmosaicStrengthを取得（なければ38を設定）
    const savedStrength = Cookies.get('mosaicStrength');
    return savedStrength ? parseInt(savedStrength, 10) : 38;
  });

  // タイマーが完了した場合にタスクを増やす
  const handleTimerComplete = () => {
    setTimerCompleted(true); // タイマーが完了したことを親に通知
    resetTimer(); // タイマーの状態をリセット

  };

  useEffect(() => {
    if (reset) {
      console.log("タイマーが完了しました！");
      increaseTaskCount();
      setMosaicStrength((prevStrength) => {
        console.log(prevStrength)
        const newStrength = prevStrength - 2;
        if (newStrength <= 20) {

          handleTaskCompletion()

          Cookies.set('mosaicStrength', 0, { expires: 1 }); // 1日間有効
          return 0; // 強さを0にリセット
        }

        // 通常の処理
        Cookies.set('mosaicStrength', newStrength, { expires: 1 }); // 1日間有効
        return newStrength;
      });
    }

  }, [reset]); // timerCompletedが変化した時に実行

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleTaskCompletion = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };


  return (
    <div className="App">
      {/* <button onClick={handleTaskCompletion}>タスク完了！</button> */}
      <CongratsPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
      <IntervalTimer
        isRunning={isRunning}
        reset={reset}
        onComplete={handleTimerComplete} // タイマー終了時のコールバック
      />

      <img
        src={macchoMan}
        alt="中央のマッチョ"
        className="center-image"
      />


      <TaskImages completedTasks={completedTasks} />
      {/* <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <button onClick={increaseTaskCount}>タスクを完了</button>
        <button onClick={resetTaskCount}>リセット</button>
      </div> */}

      <Arm
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />

      {/* <svg className="line" viewBox="0 0 400 400">
        <line x1="100" y1="100" x2="40" y2="160" stroke="black" strokeWidth="2" />
        <image href={squat} x="20" y="140" width="40" height="40" />
      </svg> */}
      <Leg
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
      <Bench
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
      <Abu
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
      <Dead
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
      <Chinup
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
      <DigitalClock mosaicStrength={mosaicStrength} />

    </div>
  );
}

export default App;
