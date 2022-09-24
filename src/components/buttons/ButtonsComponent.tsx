import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Song } from '../../models/SongModel';
import style from '../../styles/Button.module.css';

interface ButtonsComponentProps {
  song: Song;
}

export const ButtonsComponent: React.FC<ButtonsComponentProps> = ({ song }) => {
  const handleDeleteSong = async (id: string) => {
    const con = window.confirm('Are you sure to delete?');
    if (con) {
      await axios.delete(`${process.env.REACT_APP_SONGID}/${id}`);
    }
  };
  return (
    <div className={style.btnContainer}>
      <a
        href={song.Url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${style.btn} ${style.btnFs} ${style.btnOutline}`}
      >
        Open
      </a>
      <Link
        to={'/updatesong/' + song._id}
        className={`${style.btn} ${style.btnFs} ${style.btnSuccess}`}
      >
        Update
      </Link>
      <Link
        to="/"
        className={`${style.btn} ${style.btnDanger} ${style.btnFs}`}
        onClick={() => handleDeleteSong(song._id)}
      >
        Delete
      </Link>
    </div>
  );
};
