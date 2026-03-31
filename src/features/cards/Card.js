import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from './cardsSlice';


/**
 * Displays a flippable flashcard. Clicking toggles between front and back.
 * @param {string} id - The card id
 */
export default function Card({ id }) {
  const card = useSelector((state) => selectCards(state, id));
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
