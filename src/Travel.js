import React from "react";

const Travel = ({ destination, country, photo, distance}) => (
  <figure>
    <h1>{country}</h1>
    <img src={photo} alt={destination} />    
    <h3>{destination}</h3>
    <p>{distance}</p>
    <hr />
  
  </figure>
);

export default Travel;