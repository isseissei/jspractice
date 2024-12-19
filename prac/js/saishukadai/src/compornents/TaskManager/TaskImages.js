import React from 'react';
import './TaskImages.css';

// 画像をインポート
import incompleteImage from '../../images/incomplete.png'; // 未完了タスクの画像
import completeImage from '../../images/complete.png'; // 完了タスクの画像

// import { GiMuscleUp } from "react-icons/gi";
// import { FaChild } from "react-icons/fa6";

const TaskImages = ({ completedTasks }) => {
  // タスク数に応じて画像を選択
  const taskImages = Array(9)
    .fill(null)
    .map((_, index) => (index < completedTasks ? completeImage : incompleteImage));

  return (
    <div className="task-images">
      {taskImages.map((image, index) => (
        <img key={index} src={image} alt={`Task ${index + 1}`} className="task-image" />
      ))}
    </div>
  );
};

export default TaskImages;
