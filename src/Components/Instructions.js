import React from 'react';

const Instructions = () => {
  return (
    <div className="instructions">
      <p>Instructions</p>
      <ol>
        <li>Set your break and session length.</li>
        <li>Press the timer to start/pause.</li>
        <li>When you hear the sound, go on break or get back to work.</li>
        <li>If you want to set different times, simply press the timer to pause it first. (Different settings will reset the timer.)</li>
      </ol>
    </div>
  );
};

export default Instructions;
