import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/SongModel';
import styles from '../../styles/UpdateComponent.module.css';

interface UpdateButtonComponentProps {
  song: Song;
}

export const UpdateButtonComponent: React.FC<UpdateButtonComponentProps> = ({
  song,
}) => {
  const handleSaved = async (id: string) => {
    const con = window.confirm('Are you sure to update?');
    if (con) {
      const data = await axios.put(
        `http://192.168.0.4:4041/songs/songId/${id}`,
        song
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
      <Link
        to={'/song/' + song._id}
        className={'btn btn-fs ' + styles.btnSuccess}
        onClick={() => handleSaved(song._id)}
      >
        Save
      </Link>
      <Link to={'/song/' + song._id} className={"btn btn-fs " + styles.btnCancel}>
        Cancel
      </Link>
    </>
  );
};
