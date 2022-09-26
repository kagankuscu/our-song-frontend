import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../interface/Buttons/IButton';
import style from '../../styles/Button.module.css';

export const Delete: React.FC<IButton> = ({ onClick, path }) => {
  return (
    <Link
      to={path!}
      className={`${style.btn} ${style.btnDanger} ${style.btnFs}`}
      onClick={onClick}
    >
      Delete
    </Link>
  );
};
