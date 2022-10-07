import React from 'react';
import { ISong } from '../../interface/Song/ISong';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { ButtonsComponent } from '../buttons/ButtonsComponent';
import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardTitle } from '../Card/CardTitle';
import { Frame } from '../Frame/Frame';

export const Random: React.FC<ISong> = ({ song }) => {
  return (
    <>
      <div
        className="container"
        style={{
          height: 'calc(100% - 116px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Card>
          <CardBody>
            <CardTitle title={song?.Singer} />
            <h5 className="card-text">{song?.SongName}</h5>
            <p className="card-text">{song?.WhoLike}</p>
            <ButtonsComponent song={song!} />
          </CardBody>
        </Card>
        <AudioPlayer song="songs/GALENA x DJ DAMYAN x COSTI - WELCOME TO BULGARIA.mp3" />
      </div>
    </>
  );
};
