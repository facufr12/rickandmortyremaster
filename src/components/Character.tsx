import "./Character.css";

export function Character(character) {
  return (
    <div className="character-card">
      <h5 className="character-card-title">{character.name}</h5>
      <img className="character-card-image img-fluid rounded-pill " src={character.image} alt={character.name} />
      <div className="character-card-body">
        <p>Status: {character.status}</p>
      </div>
    </div>
  );
}
