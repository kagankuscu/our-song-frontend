import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ISong } from '../../interface/Song/ISong';
import './PlaylistStyle.css';

export const PlaylistSong: React.FC<ISong> = ({ song }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [getPage] = useSearchParams();
  useEffect(() => {
    const getP = getPage.get('page');
    if (getP) {
      setPage(parseInt(getP));
    }
  }, [getPage]);
  const handlePlayOtherSong = () => {
    // this is new song url to play
    navigate(`/player/${song._id}?page=${page}`);
    // this is for refreshing page
    navigate(0);
  };
  return (
    <li className="list-group-item my-list" onClick={handlePlayOtherSong}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/K&E.png`}
          alt={song.SongName}
          width="70px"
          height="70px"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            width: '100%',
          }}
        >
          <p style={{ fontWeight: 'bold', margin: '0' }}>{song.SongName}</p>
          <span
            style={{
              fontSize: '1rem',
              marginLeft: '0.5rem',
              color: 'rgb(238,50,239,0.65)',
            }}
          >
            {song.Singer}
          </span>
        </div>
      </div>
    </li>
  );
};
