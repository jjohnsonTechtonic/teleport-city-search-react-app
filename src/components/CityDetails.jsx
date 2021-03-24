import React from "react";
import CityScores from "./CityScores";

const CityDetails = ({ details, imageUrl }) => {
  const { name, full_name, population } = details;

  return (
    <article data-cy="cityDetails" className="details">
      {imageUrl ? (
        <img data-cy="cityImage" src={imageUrl} alt={`Photo of ${full_name}`} />
      ) : (
        <></>
      )}
      <h2>{name}</h2>
      <h3>{full_name}</h3>
      <h4>Population: {population}</h4>
      <CityScores cityName={name} />
    </article>
  );
};

export default CityDetails;
