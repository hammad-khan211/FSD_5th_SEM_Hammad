import React from 'react';
import "./card.css";

function Card(props) {
  return (
    <div>
      <div id="adi">
        <img src={props.src} alt="Cartoon" height={100} width={100} />
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}

export default Card;
