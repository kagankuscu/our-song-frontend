import { useState, useEffect } from 'react'
import axios from 'axios';
import { Song } from '../models/SongModel';


const useFetchById = (id: string): [Song, boolean] => {
    const [data, setData] = useState<Song | null>(null);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getData = async () => {
            const song = await axios.get(`${process.env.REACT_APP_SONGID}/${id}`);
            setData(song.data.result);
            setLoading(false)
        };

        getData();
    }, [id]);
    return [data!, loading]
}

export default useFetchById;