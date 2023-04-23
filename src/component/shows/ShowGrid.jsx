import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    console.log({ showId });
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId: showId });
    } else {
      dispatchStarred({ type: 'STAR', showId: showId });
    }
  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
          image={
            data.show.image
              ? data.show.image.medium
              : './placeholder_no_image.png'
          }
        />
      ))}
    </div>
  );
};
export default ShowGrid;
