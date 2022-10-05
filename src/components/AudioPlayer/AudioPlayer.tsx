import React, { useState } from 'react';
import {
  AiFillBackward,
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillForward,
} from 'react-icons/ai';
import './AudioPlayer.css';

export function AudioPlayer() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const playPause = () => {
    setIsPlay(!isPlay);
  };
  return (
    <div className="player-container">
      <div className="player-buttons">
        <button>
          <AiFillBackward />
        </button>
        <button onClick={playPause}>
          {isPlay ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button>
          <AiFillForward />
        </button>
      </div>
      <input className="process" type="range" name="process" id="process" />
    </div>
  );
}
