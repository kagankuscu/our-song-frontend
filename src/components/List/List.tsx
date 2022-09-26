import { IList } from '../../interface/List/IList';
import styles from '../../styles/ListComponent.module.css';
import { DesktopComponent } from './DesktopComponent';

export const List: React.FC<IList> = ({ song, isMobile }) => {
  const handleClick = (id: string) => {
    if (isMobile) {
      window.open(`/song/${id}`, '_parent');
      return;
    }
  };
  return (
    <li
      className={'list-group-item'}
      id={styles.item}
      onClick={() => handleClick(song._id)}
    >
      <div className="container">
        <div className="row align-item-start">
          <div className="col">{song.Singer}</div>
          <div className="col">{song.SongName}</div>
          <div className="col">{song.WhoLike}</div>
          {isMobile ? null : (
            <DesktopComponent isMobile={isMobile} song={song} />
          )}
        </div>
      </div>
    </li>
  );
};
