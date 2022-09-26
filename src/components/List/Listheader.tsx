import React from 'react';
import { ILists } from '../../interface/List/ILists';
import styles from '../../styles/ListComponent.module.css';

export const Listheader: React.FC<ILists> = ({isMobile}) => {
  return (
    <li className={`list-group-item ${styles.colHeader}`}>
      <div className="container">
        <div className="row align-item-start">
          <div className={'col'}>Singer</div>
          <div className={'col'}>Song Name</div>
          <div className={'col'}>Who Like</div>
          {!isMobile && <div className={'col'}></div>}
        </div>
      </div>
    </li>
  );
};
