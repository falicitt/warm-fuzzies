import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CardTitle() {
  const cards = useSelector((globalState) => globalState.cards);
  console.log(cards.name);

  return (
    <div className="card_title">
      <h2>
        {cards.name} {cards.person_name}
      </h2>
    </div>
  );
}

export default CardTitle;
