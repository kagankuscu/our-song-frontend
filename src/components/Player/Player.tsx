import { ISong } from '../../interface/Song/ISong';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { Playlist } from '../Playlist/Playlist';
import { SongInfo } from '../SongInfo/SongInfo';

export const Player: React.FC<ISong> = ({ song }) => {
  return (
    <div
      style={{
        height: 'calc(100% - 116px)',
        display: 'flex',
        gap: '10rem',
        paddingLeft: '2.25rem',
        justifyContent: 'center',
        width: '100%',
        border: '1px solid',
      }}
    >
      <div
        style={{
          height: 'calc(100% - 116px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          width: '60%',
        }}
      >
        <SongInfo song={song} />
        <AudioPlayer song={song.Url} />
      </div>
      <div style={{ width: '40%', height: '100%' }}>
        <Playlist />
      </div>
    </div>
  );
};
