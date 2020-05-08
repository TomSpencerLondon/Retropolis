import * as React from "react";
import {useState} from "react";
import Column from "./Column";
import Nav from "./Nav";


export default function Board() {
  const [columns, setColumns] = useState([]);

  const addColumn = (name) => {setColumns([...columns, <Column name={name}/>])}

  return (
    <div>
      <Nav addColumn={addColumn}/>
      {columns}
    </div>
  )
}