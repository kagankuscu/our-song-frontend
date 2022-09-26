import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../interface/Buttons/IButton';
import btnStyle from '../../styles/Button.module.css';

export const Save: React.FC<IButton> = ({ onClick, path }) => {
  return (
    <Link
      to={path!}
      className={`${btnStyle.btn} ${btnStyle.btnSuccess}`}
      onClick={onClick}
    >
      Save
    </Link>
  );
};
