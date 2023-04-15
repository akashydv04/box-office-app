import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          summary={data.show.summary}
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
