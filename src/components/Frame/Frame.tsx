import React, { useEffect, useState } from 'react';

interface FrameProps {
  url: string;
}

export const Frame: React.FC<FrameProps> = ({ url }) => {
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
