import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ILists } from '../../interface/List/ILists';
import { IPager, IPagination } from '../../interface/Pagination/IPagination';
import { Song } from '../../models/SongModel';
import styles from '../../styles/ListComponent.module.css';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';
import { List } from './List';
import { Listheader } from './Listheader';

export const ListComponent: React.FC<ILists> = ({ isMobile }) => {
  const [listOfSong, setListOfSong] = useState<Song[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pager, setPager] = useState<IPager>();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const pageSize = 20;

  useEffect(() => {
    const getData = async () => {
      let data;
      const sortVals = searchParams.getAll('sort');
      if (searchParams.getAll('sort').length === 0) {
        data = await axios.get(
          `${process.env.REACT_APP_SONGS}?page=${page}&pageSize=${pageSize}`
        );
      } else {
        data = await axios.get(
          `${process.env.REACT_APP_SONGS}?sort=${sortVals[0]}&sort=${sortVals[1]}&page=${page}&pageSize=${pageSize}`
        );
      }
      console.log(data.data.result.pager);
      setListOfSong(data.data.result.pageOfItems);
      setPager(data.data.result.pager);
      setLoading(false);
    };
    getData();
    console.log(`pager: ${pager}`);
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
          <Pagination pager={pager!} />
        </div>
      )}
    </>
  );
};
