import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../interface/Buttons/IButton';
import style from '../../styles/Button.module.css';

export const Update: React.FC<IButton> = ({ song,path }) => {
  return (
    <Link
      to={path + song!._id}
      className={`${style.btn} ${style.btnFs} ${style.btnSuccess}`}
    >
      Update
    </Link>
  );
};
