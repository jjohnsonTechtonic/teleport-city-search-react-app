import React, { useEffect, useState } from "react";
import CityDetails from "./components/CityDetails";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { getCityDetailsByLink, getImageByCity } from "./utilities/API";
import SearchContext from "./utilities/SearchContext";

const App = () => {
  const [searchData, updateSearchData] = useState({
    term: "",
    results: [],
  });

  const [cityDetails, getCityDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const setTerm = (newTerm) => {
    updateSearchData({ ...searchData, term: newTerm });
  };

  const setResults = (newResults) => {
    updateSearchData({ ...searchData, results: newResults });
  };

  const setCityDetails = (url) => {
    //api call 1
    getCityDetailsByLink(url)
      .then((res) => res.json())
      .then((data) => {
        getCityDetails(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (cityDetails) {
      getImageByCity(cityDetails.name)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          if (typeof data === "object") {
            setImageUrl(data.photos[0].image.web);
          } else {
            setImageUrl("");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [cityDetails]);
  return (
    <>
      <h1>Teleport City Search</h1>
      <main className="wrapper">
        <SearchContext.Provider value={{ ...searchData, setTerm, setResults }}>
          <SearchBar />
          <SearchResults setCityDetails={setCityDetails} />
        </SearchContext.Provider>
        {cityDetails ? (
          <CityDetails details={cityDetails} imageUrl={imageUrl} />
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default App;
