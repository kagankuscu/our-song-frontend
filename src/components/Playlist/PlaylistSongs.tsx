import React from 'react';
import { ISongs } from '../../interface/Song/ISongs';
import { Song } from '../../models/SongModel';
import { PlaylistSong } from './PlaylistSong';

export const PlaylistSongs: React.FC<ISongs> = ({ songs }) => {
  return (
    <ul className="list-group" style={{ paddingBottom: '1rem' }}>
      {songs.map((song: Song, id: number) => (
        <PlaylistSong key={id} song={song} />
      ))}
    </ul>
  );
};
