import React from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { ISortArrow } from '../../interface/List/ISortArrow';

export const SortArrow: React.FC<ISortArrow> = ({ sort }) => {
  return <>{sort === 0 ? null : sort > 0 ? <BsArrowUp /> : <BsArrowDown />}</>;
};
