import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SongComponent } from '../components/song/SongComponent';
import { Song } from '../models/SongModel';

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

  return <>{loading ? <h1>Loading</h1> : <SongComponent song={song!} />} </>;
};
