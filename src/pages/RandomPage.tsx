import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Loading } from '../components/Loading/Loading';
import { Random } from '../components/Random/Random';
import { ResponseModelSong } from '../models/ResponseModel';
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
  const runOnce = useRef<boolean>(true);
  useEffect(() => {
    const getSongs = async () => {
      const songsList: AxiosResponse<ResponseModelSong> = await axios.get(
        `${process.env.REACT_APP_RANDOMSONG}`
      );
      console.log(songsList.data);
      setSong(songsList.data.result);
      setLoading(false);
    };
    if (runOnce.current) {
      runOnce.current = false;
      getSongs();
    }
  }, []);

  return <>{loading ? <Loading /> : <Random song={song} />}</>;
};
