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
        <Link to={`/show/${id}`}>Read More</Link>
        {/* Below code for open new tab */}
        {/* <a href={`/show/${id}`} target="_blank" rel="noreferrer"> */}
        {/* Read More
        </a> */}
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
