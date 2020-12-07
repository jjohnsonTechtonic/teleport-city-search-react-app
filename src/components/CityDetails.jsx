import React from 'react';
import CityScores from './CityScores';

const CityDetails = ({details,imageUrl}) => {
    const {name, full_name, population} = details;

    return <article className="details">
        {imageUrl?<img src={imageUrl} alt={`Photo of ${full_name}`}/>:<></>}
        <h1>{name}</h1>
        <h2>{full_name}</h2>
        <h3>Population: {population}</h3>
        <CityScores cityName={name}/>
    </article>
};

export default CityDetails;