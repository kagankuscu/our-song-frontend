import React, { useState } from 'react';
import { ISong } from '../../interface/Song/ISong';
import { Song } from '../../models/SongModel';
import { UpdateButtonComponent } from '../buttons/UpdateButtonComponent';
import { Form } from '../form/Form';
import { InputField } from '../input/InputFielad';
import { SelectField } from '../input/SelectField';

export const UpdateComponent: React.FC<ISong> = ({ song }) => {
  const [updateSong, setUpdateSong] = useState<Song>({
    Singer: '',
    SongName: '',
    WhoLike: '',
    Url: '',
    _id: '',
  });
  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setUpdateSong((prev) => ({
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
            Update{' '}
          </h5>
          <Form>
            <InputField
              info="Singer"
              type="text"
              name="Singer"
              value={song.Singer}
              onChange={handleChange}
            />
            <InputField
              info="Song Name"
              name="SongName"
              type="text"
              value={song.SongName}
              onChange={handleChange}
            />
            <SelectField
              name="WhoLike"
              firstOption="Kagan"
              secondOption="Emine"
              onChange={handleChange}
            />
            <InputField
              info="Url"
              name="Url"
              type="text"
              value={song.Url}
              onChange={handleChange}
            />
            <UpdateButtonComponent song={song} updateSong={updateSong} />
          </Form>
        </div>
      </div>
    </div>
  );
};
