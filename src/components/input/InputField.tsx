import React from 'react';
import { IInputField } from '../../interface/Input/IInputField';
import './Input.css';

export const InputField: React.FC<IInputField> = ({
  name,
  info,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="input-group mb-0">
      <span className="input-group-text" id="inputGroup-sizing-default">
        {info}
      </span>
      <input
        name={name}
        type={type}
        className="form-control update-input"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
