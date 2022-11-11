import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import { Card, CardBody, CardTitle } from '../Card/CardIndex';

export const SongInfo: React.FC<ISong> = ({ song }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle title={song?.Singer} />
        <h5 className="card-text">{song?.SongName}</h5>
        <p className="card-text">{song?.WhoLike}</p>
      </CardBody>
    </Card>
  );
};
