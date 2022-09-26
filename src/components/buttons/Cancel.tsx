import React from 'react';
import { Link } from 'react-router-dom';
import { IButton } from '../../interface/Buttons/IButton';
import btnStyle from '../../styles/Button.module.css';

export const Cancel: React.FC<IButton> = ({ path }) => {
  return (
    <Link to={path!} className={`${btnStyle.btn} ${btnStyle.btnOutline}`}>
      Cancel
    </Link>
  );
};
