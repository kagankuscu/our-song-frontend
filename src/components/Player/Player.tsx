import { ISong } from '../../interface/Song/ISong';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { Playlist } from '../Playlist/Playlist';
import { SongInfo } from '../SongInfo/SongInfo';
import './PlayerStyle.css';

export const Player: React.FC<ISong> = ({ song }) => {
  return (
    <div className="container all-container">
      <div className="song-container">
        <SongInfo song={song} />
        <AudioPlayer song={song.Url} />
      </div>
      <div className="playlist">
        <Playlist />
      </div>
    </div>
  );
};
