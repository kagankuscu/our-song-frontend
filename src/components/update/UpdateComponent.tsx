import React from 'react';
import { Song } from '../../models/SongModel';
import { UpdateButtonComponent } from './UpdateButtonComponent';
import styles from '../../styles/UpdateComponent.module.css';

interface UpdateComponentProps {
  song: Song;
}

export const UpdateComponent: React.FC<UpdateComponentProps> = ({ song }) => {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:'3rem',paddingBottom:'2rem'}}>Update </h5>
          <form className={styles.form_container}>
            <input type="text" name="Singer" value={song.Singer} />
            <input type="text" name="SongName" value={song.SongName} />
            <input type="text" name="WhoLike" value={song.WhoLike} />
            <input type="text" name="Url" value={song.Url} />
            <UpdateButtonComponent song={song!} />
          </form>
        </div>
      </div>
    </div>
  );
};
