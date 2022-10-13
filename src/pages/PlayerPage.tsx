import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading/Loading';
import { Player } from '../components/Player/Player';
import { useFetchById } from '../hooks/useFetch';

export const PlayerPage: React.FC = () => {
  const { id } = useParams();
  const [song, loading] = useFetchById(`${id!}`);
  return <>{loading ? <Loading /> : <Player song={song!} />}</>;
};
