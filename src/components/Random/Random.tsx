import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import { ButtonsComponent } from '../buttons/ButtonsComponent';
import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardTitle } from '../Card/CardTitle';
import { Frame } from '../Frame/Frame';

export const Random: React.FC<ISong> = ({ song }) => {
  return (
    <>
      <Frame url={song.Url} />
      <div className="container">
        <Card>
          <CardBody>
            <CardTitle title={song?.Singer} />
            <h5 className="card-text">{song?.SongName}</h5>
            <p className="card-text">{song?.WhoLike}</p>
            <ButtonsComponent song={song!} />
          </CardBody>
        </Card>
      </div>
    </>
  );
};
