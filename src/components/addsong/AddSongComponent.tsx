import React, { useState } from 'react';
import { Song } from '../../models/SongModel';
import { Form } from '../form/Form';
import { InputField } from '../input/InputFielad';
import { SelectField } from '../input/SelectField';
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
          <Form>
            <InputField
              name="Singer"
              info="Singer"
              type="text"
              onChange={handleChange}
            />
            <InputField
              name="SongName"
              info="Song Name"
              type="text"
              onChange={handleChange}
            />
            <SelectField
              name="WhoLike"
              firstOption="Kagan"
              secondOption="Emine"
              onChange={handleChange}
            />
            <InputField
              name="Url"
              type="text"
              onChange={handleChange}
              info="Url"
            />
            <AddSongButtons song={song} />
          </Form>
        </div>
      </div>
    </div>
  );
};
