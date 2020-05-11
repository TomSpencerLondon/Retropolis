import * as React from "react";
import Card from "./Card";
import "./Column.css";
import { useState } from "react";
import { uuid } from "uuidv4";

export default function Column({ name }) {
  const [cards, setCards] = useState([]);

  const addCard = () => setCards([...cards, { id: uuid(), text: "" }]);
  const deleteCard = (id) => setCards(cards.filter((card) => card.id !== id));

  return (
    <div className="column">
      <div className="column-header">
        <h2>
          <span>{name}</span>
        </h2>
        <button className="add-card" onClick={addCard}>
          +
        </button>
      </div>
      <ul className="column_2">
        {cards.map((card, index) => (
          <li key={index} className="message">
            <Card id={card.id} deleteCard={deleteCard} />
          </li>
        ))}
      </ul>
    </div>
  );
}
