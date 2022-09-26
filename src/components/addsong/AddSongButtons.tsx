import axios from 'axios';
import React from 'react';
import { Song } from '../../models/SongModel';
import { Cancel } from '../buttons/Cancel';
import { Save } from '../buttons/Save';

interface AddSongButtonsProps {
  song: Song;
}

export const AddSongButtons: React.FC<AddSongButtonsProps> = ({ song }) => {
  const handleSaved = async () => {
    const con = window.confirm('Are you sure to update?');
    if (con) {
      const data = await axios.post(`${process.env.REACT_APP_SONGS}`, song);
      if (data.data.status === 201) {
        alert('Successfully Saved.');
        window.location.href = '/allsongs';
      } else {
        alert('It is not saved!');
      }
    }
  };
  return (
    <>
      <Save path='/allsongs/' onClick={handleSaved} />
      <Cancel path="/allsongs/" />
    </>
  );
};
