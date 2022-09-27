import React from 'react';
import { IContainer } from '../../interface/Container/IContainer';

export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {children}
    </div>
  );
};
