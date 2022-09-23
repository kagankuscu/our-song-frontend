import React from 'react';
import { Song } from '../../models/SongModel';
import { ButtonsComponent } from '../ButtonsComponent';
import styles from '../../styles/ListComponent.module.css';


interface DesktopComponentProps {
  song: Song;
}

export const DesktopComponent: React.FC<DesktopComponentProps> = ({ song }) => {
  return (
    <div className="col">
      <div className={styles.btnContainer}>
        <ButtonsComponent song={song}/>
      </div>
    </div>
  );
};
