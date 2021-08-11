import { useState } from "react";
import Characters from "../components/characters";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/search_filter";
import { useCharacterContext } from "../hooks/CharacterContext";

// Character per Page
const characterPerPage = 12;

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // To reduce fetching same requests from API all the time.
  const { loading, characterList } = useCharacterContext();

  // get category filtered output
  const categoryFilteredList =
    activeFilter === "All"
      ? [...characterList]
      : [...characterList].filter(
          (el) =>
            el.category.toUpperCase().indexOf(activeFilter.toUpperCase()) > -1
        );

  // get search filtered output
  const search = searchWord.toUpperCase();
  const searchFilteredList =
    search === ""
      ? [...categoryFilteredList]
      : [...categoryFilteredList].filter(
          (el) => el.name.toUpperCase().indexOf(search) > -1
        );

  // get current characters
  const indexOfLastCharacter = currentPage * characterPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage;
  const currentCharacters = searchFilteredList.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change Page
  const paginate = (number) => setCurrentPage(number);

  return (
    <div className="container">
      <Header />
      <SearchFilter
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Characters characterList={currentCharacters} loading={loading} />
      <Pagination
        currentPage={currentPage}
        characterPerPage={characterPerPage}
        totalCharacters={searchFilteredList.length || 0}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
