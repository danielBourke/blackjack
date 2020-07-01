import React from "react";
import Card from "./Card";

const Hand = ({ hand }) => {
  return (
    <>
              <div  style={{minWidth: "100vw", display: "flex",  flexDirection: "row",  }}>

      {hand &&
        hand.map((card, i) => (
          <div key={i} style={{marginLeft: "20px"}}>
            <Card  card={card} />
          </div>
        ))}
        </div>
    </>
  );
};

export default Hand;
