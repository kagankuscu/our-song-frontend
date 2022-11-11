import React, { useState } from 'react';
import { ISong } from '../../interface/Song/ISong';
import { Song } from '../../models/SongModel';
import { UpdateButtonComponent } from '../buttons/UpdateButtonComponent';
import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardTitle } from '../Card/CardTitle';
import { Container } from '../Container/Container';
import { Form } from '../form/Form';
import { InputField } from '../input/InputField';
import { SelectField } from '../input/SelectField';

export const UpdateComponent: React.FC<ISong> = ({ song }) => {
  const [updateSong, setUpdateSong] = useState<Song>(song);
  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setUpdateSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Container>
      <Card>
        <CardBody>
          <CardTitle title="Update Song" />
          <Form>
            <InputField
              info="Singer"
              type="text"
              name="Singer"
              value={updateSong.Singer}
              onChange={handleChange}
            />
            <InputField
              info="Song Name"
              name="SongName"
              type="text"
              value={updateSong.SongName}
              onChange={handleChange}
            />
            <SelectField
              name="WhoLike"
              firstOption="Kagan"
              secondOption="Emine"
              thirdOption="Kagan-Emine"
              value={updateSong.WhoLike}
              onChange={handleChange}
            />
            <InputField
              info="Url"
              name="Url"
              type="text"
              value={updateSong.Url}
              onChange={handleChange}
            />
            <UpdateButtonComponent song={song} updateSong={updateSong} />
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};
