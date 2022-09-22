import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SongComponent } from '../components/song/SongComponent';
import { Song } from '../models/SongModel';

interface SongProps {}

export const SongPage: React.FC<SongProps> = ({}) => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [song, setSong] = useState<Song>();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `http://192.168.0.4:4041/songs/songId/${id}`
      );

      setSong(data.data.result);
      setLoading(false);
    };
    getData();
  }, []);

  return <>{loading ? <h1>Loading</h1> : <SongComponent song={song!}/>} </>;
};
