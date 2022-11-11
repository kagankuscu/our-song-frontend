import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../interface/Buttons/IButton';
import style from '../../styles/Button.module.css';

export const Open: React.FC<IButton> = ({ song }) => {
  return (
    <Link
      to={`/player/${song?._id}`}
      className={`${style.btn} ${style.btnFs} ${style.btnOutline}`}
    >
      Play
    </Link>
  );
};
