import React from 'react';
import { ILoading } from '../../interface/Loading/Loading';

export const Loading: React.FC<ILoading> = ({}) => {
  return (
    <div className="text-center">
      <div
        className="spinner-border m-5"
        style={{ width: '5rem', height: '5rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
