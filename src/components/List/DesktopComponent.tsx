import React from 'react';
import { IList } from '../../interface/List/IList';
import { ButtonsComponent } from '../buttons/ButtonsComponent';

export const DesktopComponent: React.FC<IList> = ({ song }) => {
  return (
    <div className="col">
      <ButtonsComponent song={song} />
    </div>
  );
};
