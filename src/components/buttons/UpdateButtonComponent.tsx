import axios from 'axios';
import React from 'react';
import { IUpdateButton } from '../../interface/Buttons/IUpdateButton';
import { Cancel } from './Cancel';
import { Save } from './Save';

export const UpdateButtonComponent: React.FC<IUpdateButton> = ({
  song,
  updateSong,
}) => {
  const handleSaved = async (id: string) => {
    const con = window.confirm('Are you sure to update?');
    if (con) {
      updateSong._id = song._id;
      const data = await axios.put(
        `${process.env.REACT_APP_SONGID}/${id}`,
        updateSong
      );
      if (data.data.result.modifiedCount > 0) {
        alert('Successfully Saved.');
      } else {
        alert('It is not saved!');
      }
    }
  };
  return (
    <>
      <Save
        path={`/song/${song._id}`}
        song={updateSong}
        onClick={() => handleSaved(song._id)}
      />
      <Cancel path="/allsongs/" />
    </>
  );
};
