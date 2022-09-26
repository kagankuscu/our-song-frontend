import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UpdateComponent } from '../components/update/UpdateComponent';
import { Song } from '../models/SongModel';

export const UpdatePage: React.FC = ({}) => {
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
  return <>{loading ? <h1>Loading</h1> : <UpdateComponent song={song!} />}</>;
};
