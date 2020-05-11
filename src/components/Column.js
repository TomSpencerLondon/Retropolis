import * as React from "react";
import Card from "./Card";
import "./Column.css";
import { useState } from "react";
import { uuid } from "uuidv4";

export default function Column({ name }) {
  const [cards, setCards] = useState(new Map());

  const addCard = () => setCards([...cards, <Card id={uuid()} />]);

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
        {[...cards.keys()].map((k) => (
          <li key={k} className="message">
            {cards.get(k)}
          </li>
        ))}
      </ul>
    </div>
  );
}
