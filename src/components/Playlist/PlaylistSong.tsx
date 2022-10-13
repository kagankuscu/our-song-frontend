import React from 'react';
import { ISong } from '../../interface/Song/ISong';

export const PlaylistSong: React.FC<ISong> = ({ song }) => {
  return (
    <li className="list-group-item">
      <p>{song.SongName}</p>
      <span style={{ fontSize: '0.75rem', color: 'grey' }}>{song.Singer}</span>
    </li>
  );
};
