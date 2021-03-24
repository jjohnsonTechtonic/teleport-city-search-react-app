import React, { useContext } from "react";
import SearchContext from "../utilities/SearchContext";
const shortid = require("shortid");

const SearchResults = ({ setCityDetails }) => {
  const { results } = useContext(SearchContext);
  return (
    <section className="search__results" data-cy="results">
      <h2>
        {results.length ? `${results.length} matches found` : "No results yet!"}
      </h2>
      {results.map((item) => {
        const url = item["_links"]["city:item"]["href"];
        const fullName = item["matching_full_name"];
        return (
          <button
            className="btn"
            key={shortid.generate()}
            onClick={() => setCityDetails(url)}
          >
            {fullName}
          </button>
        );
      })}
    </section>
  );
};

export default SearchResults;
