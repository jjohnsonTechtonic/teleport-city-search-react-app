import React, { useEffect, useState } from "react";
import { getScoresByCity } from "../utilities/API";

const CityScores = ({ cityName }) => {
  const [scoreDetails, setScoreDetails] = useState({
    summary: "",
    categories: [],
    overall: null,
  });

  useEffect(() => {
    getScoresByCity(cityName)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if (typeof data === "object") {
          setScoreDetails({
            summary: data.summary,
            categories: data.categories,
            overall: data["teleport_city_score"],
          });
        } else {
          setScoreDetails({});
        }
      })
      .catch((err) => console.log(err));
  }, [cityName]);

  return (
    <div data-cy="cityScores" className="details__scores">
      {scoreDetails.summary ? (
        <>
          <h4>Overall Score: {Math.round(scoreDetails.overall)}/100</h4>
          <p dangerouslySetInnerHTML={{ __html: scoreDetails.summary }}></p>
          <ul>
            {scoreDetails.categories.map(({ name, score_out_of_10 }) => {
              return (
                <li key={`${name}-${score_out_of_10}`}>
                  {name}: <span>{score_out_of_10.toFixed(1)}</span> / 10
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p data-cy="nothing-available">
          No details available for this location
        </p>
      )}
    </div>
  );
};

export default CityScores;
