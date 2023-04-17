import React from 'react';

function Card(carte) {
    return (
      <article className="card">
        <img src={carte.image} class="cardImage"/>
        <h2 class="cardName">{carte.name}</h2>
        <p class="cardContent">{carte.dateOfBirth}</p>
        <p class="cardContent">{carte.house}</p>
        <p class="cardContent">{carte.patronus}</p>
        <p class="cardContent">{carte.actor}</p>
      </article>
    );
}

export default Card;