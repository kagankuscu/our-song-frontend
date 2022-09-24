import React from 'react';
import { ButtonsComponent } from '../buttons/ButtonsComponent';
import { Song } from '../../models/SongModel';

interface SongComponentProps {
  song: Song;
}

export const SongComponent: React.FC<SongComponentProps> = ({ song }) => {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <div className="card">
        <div className="card-body" style={{lineHeight:'1.5rem'}}>
          <h1 className="card-title" style={{textAlign:'center'}}>Song </h1>
          <h2 className="card-subtitle mb-2" style={{color:'#e44ec3'}}>{song.Singer}</h2>
          <p className="card-text" style={{fontSize:'1.3rem',fontWeight:'500'}}>{song.SongName}</p>
          <p className="card-text text-muted">{song.WhoLike}</p>
          <ButtonsComponent song={song!} />
        </div>
      </div>
    </div>
  );
};
