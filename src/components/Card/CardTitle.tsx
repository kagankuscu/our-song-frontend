import React from 'react';
import { ICardTitle } from '../../interface/Card/ICardTitle';

export const CardTitle: React.FC<ICardTitle> = ({ title }) => {
  return (
    <h5
      className="card-title"
      style={{ fontSize: '3rem', paddingBottom: '2rem' }}
    >
      {title}
    </h5>
  );
};
