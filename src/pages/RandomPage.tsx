import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Loading } from '../components/Loading/Loading';
import { Random } from '../components/Random/Random';
import { ResponseModel } from '../models/ResponseModel';
import { Song } from '../models/SongModel';

export const RandomPage: React.FC = () => {
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
    const getRandomPage = (): number => {
      const randomNumber = Math.floor(Math.random() * (10000 - 1)) + 1;
      return randomNumber;
    };
    const getSongs = async () => {
      const songsList: AxiosResponse<ResponseModel> = await axios.get(
        `${process.env.REACT_APP_SONGS}?page=${getRandomPage()}`
      );

      setSongs(songsList.data.result.pageOfItems);
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

  return <>{loading ? <Loading /> : <Random song={song!} />}</>;
};
