import { FlexGrid } from '../../common/FlexGrid';
import ActorsCard from './ActorsCard';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : './placeholder_no_image.png'
          }
        />
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
