import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import './PlaylistStyle.css';

export const PlaylistSong: React.FC<ISong> = ({ song }) => {
  return (
    <li className="list-group-item my-list">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/K&E.png`}
          alt={song.SongName}
          width="70px"
          height="70px"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            width: '100%',
          }}
        >
          <p style={{ fontWeight: 'bold', margin: '0' }}>{song.SongName}</p>
          <span
            style={{
              fontSize: '1rem',
              marginLeft: '0.5rem',
              color: 'rgb(238,50,239,0.65)',
            }}
          >
            {song.Singer}
          </span>
        </div>
      </div>
    </li>
  );
};
