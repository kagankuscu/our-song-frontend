import React from 'react';
import { Song } from '../../models/SongModel';
import { ButtonsComponent } from '../buttons/ButtonsComponent';
import { Frame } from '../Frame/Frame';

interface RandomProps {
  song: Song;
}

export const Random: React.FC<RandomProps> = ({ song }) => {
  return (
    <>
      <Frame url={song.Url}/>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{song?.Singer}</h3>
            <h5 className="card-text">{song?.SongName}</h5>
            <p className="card-text">{song?.WhoLike}</p>
            <ButtonsComponent song={song!} />
          </div>
        </div>
      </div>
    </>
  );
};
