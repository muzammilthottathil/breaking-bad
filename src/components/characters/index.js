import CharacterCard from "./CharacterCard";
import "../../styles/characters.css";

function Characters({ characterList = [], loading }) {
  if (loading) return <p className="loading">Loading....</p>;

  if (!!characterList.length)
    return (
      <div className="character-list">
        {characterList.map((character) => (
          <CharacterCard
            key={character?.char_id}
            id={character?.char_id}
            name={character?.name}
            img={character?.img}
            occupation={character?.occupation}
            birthday={character?.birthday}
            status={character?.status}
          />
        ))}
      </div>
    );
  else return <p className="not-found">Not Found</p>;
}

export default Characters;
