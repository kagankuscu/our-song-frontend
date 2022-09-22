import React, { useEffect, useState } from 'react';
import { ListComponent } from '../components/List/ListComponent';

interface AllSongProps {}

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const AllSongPage: React.FC<AllSongProps> = ({}) => {
  const [width, setWidth] = useState<number>(getWidth());
  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  return <ListComponent isMobile={width<600}/>;
};
