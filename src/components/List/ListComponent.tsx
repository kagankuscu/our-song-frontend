import axios from 'axios';
import { useEffect, useState } from 'react';
import { Song } from '../../models/SongModel';
import styles from '../../styles/ListComponent.module.css';
import { List } from './List';
import { Listheader } from './Listheader';
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
        <Listheader isMobile={isMobile} />
        {listOfSong !== undefined
          ? listOfSong.map((list) => (
              <List isMobile={isMobile} key={list._id} song={list!} />
            ))
          : null}
      </ul>
    </div>
  );
};
