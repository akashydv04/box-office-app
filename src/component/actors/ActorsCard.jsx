import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../../common/SearchCard';

const ActorsCard = ({ name, image, birthday, deathday, country, gender }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt="image" />
      </SearchImgWrapper>
      <h2>
        {name} {gender && `(${gender})`}
      </h2>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      <p>{birthday && `Born ${birthday}`}</p>
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorsCard;
