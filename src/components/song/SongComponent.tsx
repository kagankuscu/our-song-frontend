import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import { ButtonsComponent } from '../buttons/ButtonsComponent';
import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardTitle } from '../Card/CardTitle';
import { Container } from '../Container/Container';

export const SongComponent: React.FC<ISong> = ({ song }) => {
  return (
    <Container>
      <Card>
        <CardBody>
          <CardTitle title="Song" />
          <h2 className="card-subtitle mb-2" style={{ color: '#e44ec3' }}>
            {song.Singer}
          </h2>
          <p
            className="card-text"
            style={{ fontSize: '1.3rem', fontWeight: '500' }}
          >
            {song.SongName}
          </p>
          <p className="card-text text-muted">{song.WhoLike}</p>
          <ButtonsComponent song={song!} />
        </CardBody>
      </Card>
    </Container>
  );
};
