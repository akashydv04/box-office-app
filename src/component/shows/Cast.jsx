const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={
                person.image
                  ? person.image.medium
                  : './placeholder_no_image.png'
              }
              alt="image"
            />
          </div>
          <div>
            {person.name} | {character.name} {Boolean(voice) && '|Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cast;
