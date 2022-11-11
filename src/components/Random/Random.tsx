import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { SongInfo } from '../SongInfo/SongInfo';

export const Random: React.FC<ISong> = ({ song }) => {
  return (
    <>
      <div
        className="container"
        style={{
          height: 'calc(100% - 116px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <SongInfo song={song} />
        <AudioPlayer song={song.Url} />
      </div>
    </>
  );
};
