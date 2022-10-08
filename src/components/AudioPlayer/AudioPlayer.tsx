import { useEffect, useRef, useState } from 'react';
import {
  AiFillBackward,
  AiFillForward,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';
import { ISongSource } from '../../interface/Song/ISongSource';
import { calculateVideoDurationTime } from '../../Utils/Calcute';
import './AudioPlayer.css';

export function AudioPlayer({ song }: ISongSource) {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const seconds = Math.floor(audioRef.current!.duration);
    setDuration(seconds);
    progressBar.current!.max = `${seconds}`;
  }, [audioRef?.current?.readyState]);

  const playPause = () => {
    const prevValue = isPlay;
    setIsPlay(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef!.current);
    }
  };
  const whilePlaying = () => {
    progressBar.current!.value = `${audioRef.current?.currentTime}`;
    animationRef.current = requestAnimationFrame(whilePlaying);
    changePlayerCurrentTime();
    if (audioRef.current?.ended) {
      setCurrentTime(0);
      setIsPlay(false);
      progressBar.current!.value = '0';
      audioRef.current.currentTime = 0;
    }
  };
  const changeRange = () => {
    audioRef.current!.currentTime = parseInt(progressBar.current!.value);
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setCurrentTime(parseInt(progressBar.current!.value));
    progressBar.current?.style.setProperty(
      '--seek-before-width',
      `${Number(progressBar.current.value) / (duration * 100)}%`
    );
  };

  const backThirty = () => {
    progressBar.current!.value = `${Number(progressBar.current!.value) - 30}`;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current!.value = `${Number(progressBar.current!.value) + 30}`;
    changeRange();
  };

  return (
    <div className="player-container">
      <div className="player-buttons">
        <button onClick={backThirty}>
          <AiFillBackward />
        </button>
        <button onClick={playPause}>
          {isPlay ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button onClick={forwardThirty}>
          <AiFillForward />
        </button>
      </div>
      <div className="process-container">
        <audio src={song} ref={audioRef} />
        <span>{calculateVideoDurationTime(currentTime)}</span>
        <input
          className="process"
          type="range"
          name="process"
          id="process"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
        <span>
          {duration && !isNaN(duration) && calculateVideoDurationTime(duration)}
        </span>
      </div>
    </div>
  );
}
