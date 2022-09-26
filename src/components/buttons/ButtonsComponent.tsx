import axios from 'axios';
import React from 'react';
import { Song } from '../../models/SongModel';
import style from '../../styles/Button.module.css';
import { Delete } from './Delete';
import { Open } from './Open';
import { Update } from './Update';

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
      <Open song={song} />
      <Update path='/updatesong/' song={song} />
      <Delete path='/' song={song} onClick={() => handleDeleteSong(song._id)} />
    </div>
  );
};
