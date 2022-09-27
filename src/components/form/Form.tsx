import React from 'react';
import { IForm } from '../../interface/Form/IForm';
import './Form.css';

export const Form: React.FC<IForm> = ({ children }) => {
  return <form className="form-container">{children}</form>;
};
