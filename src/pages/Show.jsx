// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getShowByID } from '../api/tvmaze';
import ShowMainData from '../component/shows/ShowMainData';
import Details from '../component/shows/Details';
import Seasons from '../component/shows/Seasons';
import Cast from '../component/shows/Cast';

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

  // const navigateTo = useNavigate();

  // const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowByID(showId),
  });

  if (showError) {
    return <div>Got error: ${showError.message}</div>;
  }

  // const onGoBack = () => {
  //   navigateTo('/');
  // };

  if (showData) {
    return (
      <div>
        <Link to="/">Go To Home</Link>
        {/* <button type="button" onClick={onGoBack}>
          Go Back Home
        </button> */}
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is Loading...</div>;
};

export default Show;
