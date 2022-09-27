import React from 'react';
import { ICardBody } from '../../interface/Card/ICardBody';

export const CardBody: React.FC<ICardBody> = ({ children }) => {
  return <div className="card-body">{children}</div>;
};
