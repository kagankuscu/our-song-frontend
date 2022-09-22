import React from 'react';
import { ButtonsComponent } from '../ButtonsComponent';
import { Song } from '../../models/SongModel';

interface SongComponentProps {
  song: Song;
}

export const SongComponent: React.FC<SongComponentProps> = ({ song }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Song </h5>
        <h6 className="card-subtitle mb-2 text-muted">{song.Singer}</h6>
        <p className="card-text">{song.SongName}</p>
        <p className="card-text">{song.WhoLike}</p>
        <ButtonsComponent song={song!} />
      </div>
    </div>
  );
};
