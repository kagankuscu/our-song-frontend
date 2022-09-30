import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ILists } from '../../interface/List/ILists';
import styles from '../../styles/ListComponent.module.css';
import stylesCommon from '../../styles/Style.module.css';

export const Listheader: React.FC<ILists> = ({ isMobile }) => {
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
              onClick={() => handleNavigate('?singer=1')}
            >
              Singer
            </span>
          </div>
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => handleNavigate('?songname=1')}
            >
              Song Name
            </span>
          </div>
          <div className={`col ${stylesCommon.preventSelect}`}>
            <span
              className={`${styles.sort}`}
              onClick={() => handleNavigate('?wholike=1')}
            >
              Who Like
            </span>
          </div>
          {!isMobile && <div className={'col'}></div>}
        </div>
      </div>
    </li>
  );
};
