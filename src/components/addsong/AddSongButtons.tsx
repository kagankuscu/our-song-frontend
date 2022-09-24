import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/SongModel';
import btnStyle from '../../styles/Button.module.css';

interface AddSongButtonsProps{
  song:Song
}

export const AddSongButtons: React.FC<AddSongButtonsProps> = ({song}) => {
  const handleSaved = async () => {
    const con = window.confirm('Are you sure to update?');
    if (con) {
      const data = await axios.post(`${process.env.REACT_APP_SONGS}`, song);
      if (data.data.status === 201) {
        alert('Successfully Saved.');
        window.location.href = '/allsongs'
      } else {
        alert('It is not saved!');
      }
    }
  };
  return (
    <>
      <span
        // to={'/song/' + id}
        className={`${btnStyle.btn} ${btnStyle.btnSuccess}`}
        onClick={handleSaved}
      >
        Save
      </span>
      <Link
        to={'/allsongs/'}
        className={`${btnStyle.btn} ${btnStyle.btnOutline}`}
      >
        Cancel
      </Link>
    </>
  );
};
