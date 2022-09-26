import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Random } from '../components/Random/Random';
import { Song } from '../models/SongModel';

export const RandomPage: React.FC = ({}) => {
  const [song, setSong] = useState<Song>({
    Singer: '',
    Url: '',
    WhoLike: '',
    _id: '',
    SongName: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    const getSongs = async () => {
      const songsList: any = await axios.get(`${process.env.REACT_APP_SONGS}`);
      setSongs(songsList.data.result);
      setLoading(false);
    };
    if (!loading) {
      chooseRandomSong(1, songs.length + 1);
    } else {
      getSongs();
    }
  }, [loading]);

  const chooseRandomSong = (min: number, max: number) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const randomSong = songs[randomNumber];
    setSong(randomSong);
  };

  return <>{loading ? <h1>Loading</h1> : <Random song={song!} />}</>;
};
