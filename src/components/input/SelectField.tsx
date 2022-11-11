import React from 'react';
import { ISelectField } from '../../interface/Input/ISelectField';

export const SelectField: React.FC<ISelectField> = ({
  name,
  firstOption,
  secondOption,
  thirdOption,
  value,
  onChange,
}) => {
  return (
    <div className="input-group mb-0">
      <label className="input-group-text text">Who Like</label>
      <select
        className="form-select input"
        id="inputGroupSelect01"
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="Empty">Choose...</option>
        <option value={firstOption}>{firstOption}</option>
        <option value={secondOption}>{secondOption}</option>
        <option value={thirdOption}>{thirdOption}</option>
      </select>
    </div>
  );
};
