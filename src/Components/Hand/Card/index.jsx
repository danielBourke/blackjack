import React from "react";

const Card = ({ card }) => {
  return (
    <div style={{border: "1px solid black", minWidth: "200px", minHeight: "300px"}}>
      <h1>{card && card.value}</h1>
     <h1>{card && card.suit}</h1> 
    </div>
  );
};

export default Card;
