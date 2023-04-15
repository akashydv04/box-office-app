import { Link } from 'react-router-dom';

const ActorsCard = ({ name, image, birthday, deathday, country, gender }) => {
  return (
    <div>
      <img src={image} alt="image" />
      <h2>
        {name} {gender && `(${gender})`}
      </h2>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      <p>{birthday && `Born ${birthday}`}</p>
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorsCard;
