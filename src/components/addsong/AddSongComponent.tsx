import React, { useState } from 'react';
import { Song } from '../../models/SongModel';
import styles from '../../styles/UpdateComponent.module.css';
import './AddSong.css';
import { AddSongButtons } from './AddSongButtons';

export const AddSongComponent: React.FC = () => {
  const [song, setSong] = useState<Song>({
    Singer: '',
    SongName: '',
    WhoLike: '',
    Url: '',
    _id: '',
  });
  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div className="card">
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: '3rem', paddingBottom: '2rem' }}
          >
            Add Song{' '}
          </h5>
          <form className={styles.formContainer}>
            <label>Singer Name:</label>
            <input
              type="text"
              name="Singer"
              placeholder=""
              onChange={handleChange}
            />
            <label>Song Name:</label>
            <input
              type="text"
              name="SongName"
              placeholder=""
              onChange={handleChange}
            />
            <label>Who Like the this song:</label>
            <select name="WhoLike" onChange={handleChange}>
              <option value="Empty"></option>
              <option value="Kagan">Kagan</option>
              <option value="Emine">Emine</option>
            </select>
            <label>Url:</label>
            <input
              type="text"
              name="Url"
              placeholder=""
              onChange={handleChange}
            />
            <AddSongButtons song={song}/>
          </form>
        </div>
      </div>
    </div>
  );
};
