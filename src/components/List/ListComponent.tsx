import axios from 'axios';
import { useEffect, useState } from 'react';
import { ILists } from '../../interface/List/ILists';
import { Song } from '../../models/SongModel';
import styles from '../../styles/ListComponent.module.css';
import { Loading } from '../Loading/Loading';
import { List } from './List';
import { Listheader } from './Listheader';
import { useSearchParams } from 'react-router-dom';

export const ListComponent: React.FC<ILists> = ({ isMobile }) => {
  const [listOfSong, setListOfSong] = useState<Song[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      let data;
      const sortVals = searchParams.getAll('sort');
      if (searchParams.getAll('sort').length === 0) {
        data = await axios.get(`${process.env.REACT_APP_SONGS}`);
      } else {
        data = await axios.get(
          `${process.env.REACT_APP_SONGS}?sort=${sortVals[0]}&sort=${sortVals[1]}`
        );
      }
      setListOfSong(data.data.result);

      setLoading(false);
    };
    getData();
    console.log(searchParams.getAll('sort'));
  }, [searchParams]);
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
