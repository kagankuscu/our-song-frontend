import axios from 'axios';
import { useEffect, useState } from 'react';
import { PaginateModel } from '../models/PaginateModel';
import { Song } from '../models/SongModel';

const useAxios = (configObj: { method: string, url: string, data?: string }): [PaginateModel, boolean] => {
    const [data, setData] = useState<PaginateModel | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getData = async () => {
            const fetch = await axios({
                method: configObj.method,
                url: configObj.url,
                data: configObj.data
            })
            setData(fetch.data.result);
            setLoading(false)
        };

        getData();
    }, [configObj.url]);
    return [data!, loading]
}

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

export { useFetchById, useAxios };
