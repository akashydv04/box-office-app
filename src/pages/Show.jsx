import { useParams } from 'react-router-dom';

const Show = () => {
  const params = useParams();
  return <div>{params.showId}</div>;
};

export default Show;
