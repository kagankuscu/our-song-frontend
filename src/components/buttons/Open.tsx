import React from 'react';
import { IButton } from '../../interface/Buttons/IButton';
import style from '../../styles/Button.module.css';


export const Open: React.FC<IButton> = ({song}) => {
  return (
    <a
      href={song!.Url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.btn} ${style.btnFs} ${style.btnOutline}`}
    >
      Open
    </a>
  );
};
