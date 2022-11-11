import { useEffect, useRef, useState } from 'react';
import {
  AiFillBackward,
  AiFillForward,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { ISongSource } from '../../interface/Song/ISongSource';
import { calculateVideoDurationTime } from '../../Utils/Calcute';
import './AudioPlayer.css';

export function AudioPlayer({ song }: ISongSource) {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [readyState, setReadyState] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const frameRef = useRef<any>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const seconds = Math.floor(frameRef.current?.player?.player?.getDuration());
    setDuration(seconds);
    progressBar.current!.max = `${seconds}`;
    progressBar.current?.addEventListener('mouseup', mouseUpEvent);
    progressBar.current?.addEventListener('mousedown', mouseDownEvent);
    return () => {
      progressBar.current?.removeEventListener('mouseup', mouseUpEvent);
      progressBar.current?.removeEventListener('mousedown', mouseDownEvent);
    };
  }, [readyState]);

  const mouseUpEvent = () => {
    setIsPlay(true);
    frameRef.current?.player?.player?.player.playVideo();
  };

  const mouseDownEvent = () => {
    setIsPlay(false);
  };

  const playPause = () => {
    const prevValue = isPlay;
    setIsPlay(!prevValue);
    if (!prevValue) {
      frameRef.current?.player?.player?.player.playVideo();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      frameRef.current?.player?.player?.player.pauseVideo();
      cancelAnimationFrame(animationRef!.current);
    }
  };
  const whilePlaying = () => {
    progressBar.current!.value = `${frameRef.current?.player?.player?.player?.getCurrentTime()}`;
    animationRef.current = requestAnimationFrame(whilePlaying);
    changePlayerCurrentTime();
  };

  const ended = () => {
    setCurrentTime(0);
    setIsPlay(false);
    progressBar.current!.value = '0';
    frameRef.current?.player?.player?.seekTo(0);
  };
  const changeRange = () => {
    frameRef.current?.player?.player.seekTo(
      parseInt(progressBar.current!.value)
    );
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setCurrentTime(parseInt(progressBar.current!.value));
    progressBar.current?.style.setProperty(
      '--seek-before-width',
      `${(Number(progressBar.current.value) / duration) * 100}%`
    );
  };

  const handleReady = () => {
    setReadyState(true);
  };

  const backThirty = () => {
    progressBar.current!.value = `${Number(progressBar.current!.value) - 30}`;
    changeRange();
    mouseUpEvent();
  };

  const forwardThirty = () => {
    progressBar.current!.value = `${Number(progressBar.current!.value) + 30}`;
    changeRange();
    mouseUpEvent();
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
        <ReactPlayer
          url={song}
          style={{ display: 'none' }}
          ref={frameRef}
          onEnded={ended}
          onReady={handleReady}
        />
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
