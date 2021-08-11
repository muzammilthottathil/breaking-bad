import searchIcon from "../../Assets/search.svg";

import "../../styles/search.css";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

function SearchFilter({
  searchWord,
  setSearchWord,
  activeFilter,
  setActiveFilter,
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="search-filter-bar">
      <div className="search">
        <img src={searchIcon} alt="search" />
        <input
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          type="text"
          placeholder="Search Characters"
        />
      </div>
      <div className="filter">
        <CustomSelect
          active={active}
          setActive={setActive}
          value={activeFilter}
          setValue={setActiveFilter}
          options={["All", "Breaking Bad", "Better Call Saul"]}
        />
      </div>
    </div>
  );
}

export default SearchFilter;
