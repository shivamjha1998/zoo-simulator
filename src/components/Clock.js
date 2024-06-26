// src/components/Clock.js

import React from 'react';
import './Main.css';

const Clock = ({ currentTime }) => {
    return (
        <div className="clock">
            <h2>{currentTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })}</h2>
        </div>
    );
};

export default Clock;
