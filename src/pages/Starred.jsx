import { getShowByIDs } from '../api/tvmaze';
import { TextCenter } from '../common/TextCenter';
import ShowGrid from '../component/shows/ShowGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIDs(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <TextCenter>No Shows were starred.</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Shows are loading...</TextCenter>;
};

export default Starred;
