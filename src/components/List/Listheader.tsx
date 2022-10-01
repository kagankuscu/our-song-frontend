import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILists } from '../../interface/List/ILists';
import styles from '../../styles/ListComponent.module.css';
import stylesCommon from '../../styles/Style.module.css';
import { Query } from '../../Utils/Query';

export const Listheader: React.FC<ILists> = ({ isMobile }) => {
  const [sortBySinger, setSortBySinger] = useState<number>(1);
  const [sortBySongName, setSortBySongName] = useState<number>(1);

  const toggleSort = () => {
    if (sortBySinger === 1 || sortBySongName === 1) {
      setSortBySinger(-1);
      setSortBySongName(-1);
    } else {
      setSortBySinger(1);
      setSortBySongName(1);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = (navigateTo: string) => {
    toggleSort();
    navigate(navigateTo);
  };
  return (
    <li className={`list-group-item ${styles.colHeader}`}>
      <div className="container">
        <div className="row align-item-start">
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => handleNavigate(Query.singer + sortBySinger)}
            >
              Singer
            </span>
          </div>
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => handleNavigate(Query.songName + sortBySongName)}
            >
              Song Name
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
