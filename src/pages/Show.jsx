import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getShowByID } from '../api/tvmaze';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setShowError(null);
//         const result = await getShowByID(showId);
//         console.log(result);
//         setShowData(result);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [showId]);
//   return { showData, showError };
// };

const Show = () => {
  const { showId } = useParams();

  // const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowByID(showId),
  });

  if (showError) {
    return <div>Got error: ${showError.message}</div>;
  }

  if (showData) {
    return <div>{showData.name}</div>;
  }

  return <div>{showId}</div>;
};

export default Show;
