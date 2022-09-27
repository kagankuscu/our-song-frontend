import React from 'react';
import { ICard } from '../../interface/Card/ICard';

export const Card: React.FC<ICard> = ({ children }) => {
  return <div className="card">{children}</div>;
};
