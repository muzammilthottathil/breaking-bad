import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useCharacterContext } from "../hooks/CharacterContext";
import CharacterNav from "../components/CharacterNav";
import CharacterDetails from "../components/CharacterDetails";
import { useEffect, useState } from "react";
import Quotes from "../components/Quotes";
import axios from "axios";
import "../styles/character_page.css";

function Character() {
  const [quotes, setQuotes] = useState([]);
  const [quotesLoading, setQuotesLoading] = useState(true);
  const { characterList } = useCharacterContext();

  const params = useParams();

  // filtering out required character
  const character = characterList.find(
    (el) => el?.char_id.toString() === params.id.toString()
  );

  console.log(character);

  useEffect(() => {
    // Requesting for quotes
    const getQuotes = async () => {
      setQuotesLoading(true);
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/quote?author=${character?.name}`
      );

      setQuotes(res.data);
      setQuotesLoading(false);
    };

    !!character && getQuotes();
  }, [params, character]);

  return (
    <div className="container">
      <Header />
      <CharacterNav name={character?.name} appearance={character?.appearance} />

      {/* Details */}
      <div className="character-detailed-section">
        <div className="character-card-no-effect">
          <img
            className="character-image"
            src={character?.img}
            alt={character?.name}
          />
        </div>
        <CharacterDetails
          name={character?.name}
          dob={character?.birthday}
          occupation={character?.occupation?.join(", ")}
          status={character?.status}
          nickname={character?.nickname}
          actor={character?.portrayed}
        />
      </div>

      {/* Quotes */}
      <Quotes loading={quotesLoading} quotes={quotes} />
    </div>
  );
}

export default Character;
