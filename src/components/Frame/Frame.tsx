import React, { useEffect, useState } from 'react';
import { IFrame } from '../../interface/Frame/IFrame';

export const Frame: React.FC<IFrame> = ({ url }) => {
  const [src, setSrc] = useState<string>('');
  function splitUrl(): void {
    const youtubeEmbed = 'https://www.youtube.com/embed/';
    const autoplay = '?autoplay=1';

    const finalUrl = youtubeEmbed + url.split('=')[1] + autoplay;
    setSrc(finalUrl);
  }
  useEffect(() => {
    splitUrl();
  }, []);
  return (
    <iframe
      src={src}
      width="100%"
      height="480"
      title="A YouTube video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};
