import React, { useState } from 'react';
import './CongratsPopup.css';
import proteinImage from '../../images/protein.png';  // プロテイン画像のパス

function CongratsPopup({ isVisible, onClose }) {
    if (!isVisible) return null; // ポップアップが非表示なら何も表示しない

    // ポップアップ外のクリックで閉じる処理
    const handleOverlayClick = (e) => {
        // ポップアップコンテンツ部分以外をクリックした場合に閉じる
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-content">
                <h2 className="popup-title">おつかれさま</h2>
                <img src={proteinImage} alt="プロテイン" className="popup-image" />
            </div>
        </div>
    );
}

export default CongratsPopup;
