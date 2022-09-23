import { useState, useEffect } from 'react';
import styles from '../../styles/ListComponent.module.css';
import axios from 'axios';
import { DesktopComponent } from './DesktopComponent';
import { Song } from '../../models/SongModel';

interface ListComponentProps {
  isMobile: boolean;
}

export const ListComponent: React.FC<ListComponentProps> = ({ isMobile }) => {
  const [listOfSong, setListOfSong] = useState<Song[] | undefined>();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${process.env.REACT_APP_SONGS}`);

      setListOfSong(data.data.result);
    };
    getData();
  }, []);
  return (
    <div id={styles.lists}>
      <ul className="list-group">
        <li className={`list-group-item ${styles.colHeader}`}>
          <div className="container">
            <div className="row align-item-start">
              <div className={'col'}>Singer</div>
              <div className={'col'}>Song Name</div>
              <div className={'col'}>Who Like</div>
              {!isMobile && <div className={'col'}></div>}
            </div>
          </div>
        </li>
        {listOfSong !== undefined
          ? listOfSong.map((list) => (
              <List isMobile={isMobile} key={list._id} song={list!} />
            ))
          : null}
      </ul>
    </div>
  );
};

interface ListProps {
  song: Song;
  isMobile: boolean;
}

const List: React.FC<ListProps> = ({ song, isMobile }) => {
  const handleClick = (id: string) => {
    if (isMobile) {
      window.open(`http://192.168.0.4:3000/song/${id}`, '_parent');
      return;
    }
  };
  return (
    <li
      className={'list-group-item'}
      id={styles.item}
      onClick={() => handleClick(song._id)}
    >
      <div className="container">
        <div className="row align-item-start">
          <div className="col">{song.Singer}</div>
          <div className="col">{song.SongName}</div>
          <div className="col">{song.WhoLike}</div>
          {isMobile ? null : <DesktopComponent song={song} />}
        </div>
      </div>
    </li>
  );
};
