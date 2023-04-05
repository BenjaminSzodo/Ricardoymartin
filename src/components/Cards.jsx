import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards">
      <>
        {characters.map((character) => {
          return (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onclose={onClose}
            />
          );
        })}
      </>
    </div>
  );
}