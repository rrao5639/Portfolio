import React from 'react';
import './Loading.css';

const Loading = ({ percentage }) => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <h2>Loading... {percentage}%</h2>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Loading;
