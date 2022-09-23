import React from 'react';
import { Song } from '../../models/SongModel';
import { ButtonsComponent } from '../ButtonsComponent';

interface DesktopComponentProps {
  song: Song;
}

export const DesktopComponent: React.FC<DesktopComponentProps> = ({ song }) => {
  return (
    <div className="col">
      <ButtonsComponent song={song} />
    </div>
  );
};
