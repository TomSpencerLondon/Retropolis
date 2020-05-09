import * as React from "react";
import { useState } from "react";
import Column from "./Column";
import Nav from "./Nav";
import "./Board.css";

export default function Board() {
  const [columns, setColumns] = useState([]);

  const addColumn = (name) => {
    setColumns([...columns, <Column name={name} />]);
  };

  return (
    <>
      <Nav addColumn={addColumn} />
      <div className="capture">{columns}</div>
    </>
  );
}
