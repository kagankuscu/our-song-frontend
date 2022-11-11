import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILists } from '../../interface/List/ILists';
import styles from '../../styles/ListComponent.module.css';
import stylesCommon from '../../styles/Style.module.css';
import { Query } from '../../Utils/Query';
import { SortArrow } from './SortArrow';

export const Listheader: React.FC<ILists> = ({ isMobile }) => {
  const [sortBySinger, setSortBySinger] = useState<number>(0);
  const [sortBySongName, setSortBySongName] = useState<number>(0);
  const [sort, setSort] = useState<string>();

  useEffect(() => {
    if (sort === 'singer') {
      handleNavigate(`${Query.singer}${sortBySinger}`);
    } else if (sort === 'songname') {
      handleNavigate(`${Query.songName}${sortBySongName}`);
    }
  }, [sortBySinger, sortBySongName]);

  const toggleSingerSort = () => {
    setSort('singer');
    setSortBySongName(0);
    if (sortBySinger === 1) {
      setSortBySinger(-1);
    } else {
      setSortBySinger(1);
    }
  };

  const toggleSongNameSort = () => {
    setSort('songname');
    setSortBySinger(0);
    if (sortBySongName === 1) {
      setSortBySongName(-1);
    } else {
      setSortBySongName(1);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = (navigateTo: string) => {
    navigate(navigateTo);
  };
  return (
    <li className={`list-group-item ${styles.colHeader}`}>
      <div className="container">
        <div className="row align-item-start">
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => toggleSingerSort()}
            >
              Singer <SortArrow sort={sortBySinger} />
            </span>
          </div>
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => toggleSongNameSort()}
            >
              Song Name
              <SortArrow sort={sortBySongName} />
            </span>
          </div>
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span>Who Like</span>
          </div>
          {!isMobile && <div className={'col'}></div>}
        </div>
      </div>
    </li>
  );
};
