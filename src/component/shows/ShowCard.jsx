import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    .split(' ')
    .slice(0, 10)
    .join(' ')
    .replace(/<.+?>/g, '');
  return (
    <div>
      <img src={image} alt="image" />
      <h2>{name}</h2>
      <p>{summaryStripped}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
