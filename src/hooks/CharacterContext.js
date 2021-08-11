import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const characterContext = createContext();

export const useCharacterContext = () => useContext(characterContext);

export function CharacterContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );

      setCharacterList(res.data);
      setLoading(false);
    };

    getCharacters();
  }, []);

  const values = { loading, characterList };

  return (
    <characterContext.Provider value={values}>
      {children}
    </characterContext.Provider>
  );
}
