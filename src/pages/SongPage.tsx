import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SongComponent } from '../components/song/SongComponent';
import { Song } from '../models/SongModel';
import { Loading } from '../components/Loading/Loading';

export const SongPage: React.FC = ({}) => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [song, setSong] = useState<Song>();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${process.env.REACT_APP_SONGID}/${id}`);

      setSong(data.data.result);
      setLoading(false);
    };
    getData();
  }, []);

  return <>{loading ? <Loading /> : <SongComponent song={song!} />} </>;
};
