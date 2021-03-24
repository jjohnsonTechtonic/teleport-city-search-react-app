import React, { useContext, useRef } from "react";
import { getResultsBySearchTerm } from "../utilities/API";
import SearchContext from "../utilities/SearchContext";

const SearchBar = () => {
  const inputRef = useRef();
  const { setTerm, setResults } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = inputRef.current.value.trim();
    setTerm(term);
    getResultsBySearchTerm(term)
      .then((res) => res.json())
      .then((data) => {
        setResults(data["_embedded"]["city:search-results"]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      data-cy="searchbar"
      className="search__bar"
      onSubmit={handleSubmit}
      action="submit"
    >
      <input type="text" ref={inputRef} />
      <button data-cy="search" className="btn btn--search" type="submit">
        <span>Search </span>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
