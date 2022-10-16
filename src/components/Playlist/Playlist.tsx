import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAxios } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';
import { Pagination } from '../Pagination/Pagination';
import { PlaylistSongs } from './PlaylistSongs';

export const Playlist: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [data, loading] = useAxios({
    method: 'get',
    url: `${process.env.REACT_APP_SONGS}?page=${searchParams.get('page') || 1}`,
  });
  return (
    <div
      style={{
        backgroundColor: '#c71585',
        height: '100%',
        padding: '2.5rem 1rem',
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        data.pageOfItems && (
          <>
            <PlaylistSongs songs={data.pageOfItems} />
            <Pagination pager={data.pager} />
          </>
        )
      )}
    </div>
  );
};
