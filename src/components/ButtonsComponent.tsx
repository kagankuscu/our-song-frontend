import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Song } from '../models/SongModel';

interface ButtonsComponentProps {
  song: Song;
}

export const ButtonsComponent: React.FC<ButtonsComponentProps> = ({ song }) => {
  const handleDeleteSong = async (id: string) => {
    const con = window.confirm('Are you sure to delete?');
    if (con) {
      await axios.delete(`http://192.168.0.4:4041/songs/songId/${id}`);
    }
  };
  return (
    <>
      <a
        href={song.Url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-fs aLink"
      >
        Open
      </a>
      <Link to={'/updatesong/' + song._id} className="btn btn-fs">
        Update
      </Link>
      <Link
        to="/"
        className="btn btn-fs"
        onClick={() => handleDeleteSong(song._id)}
      >
        Delete
      </Link>
    </>
  );
};
