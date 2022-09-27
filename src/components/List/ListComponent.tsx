import axios from 'axios';
import { useEffect, useState } from 'react';
import { ILists } from '../../interface/List/ILists';
import { Song } from '../../models/SongModel';
import styles from '../../styles/ListComponent.module.css';
import { Loading } from '../Loading/Loading';
import { List } from './List';
import { Listheader } from './Listheader';

export const ListComponent: React.FC<ILists> = ({ isMobile }) => {
  const [listOfSong, setListOfSong] = useState<Song[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${process.env.REACT_APP_SONGS}`);

      setListOfSong(data.data.result);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};
