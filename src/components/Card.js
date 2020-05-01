import * as React from "react";
import "./Card.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import * as PropTypes from "prop-types";

export default function Card() {
  const [editing, setEditing] = useState(true);
  const [text, setText] = useState('');

  function handleChange(e){
    setText(e.target.value);
  }

  return editing ? (
    <div className="new-back">
      <div className="message-body">
        <Edit onClick={() => setEditing(false)} onChange={handleChange} text={text} />
      </div>
    </div>
  ) : (
    <div className="message-main">
      <div className="message-body">
        <Display onClick={() => setEditing(true)} text={text} />
      </div>
    </div>
  );
}

function Display(props) {
  return (
    <div className="text">
      {props.text}
      <div className="pencil message-bodylink">
        <FontAwesomeIcon icon={faPencilAlt} onClick={props.onClick}/>
      </div>
    </div>
  );
}

Display.propTypes = { onClick: PropTypes.func };

function Edit(props) {
  return (
    <>
      <textarea onChange={props.onChange } defaultValue={props.text}></textarea>
      <button className="add-message" onClick={props.onClick}>
        Add
      </button>
    </>
  );
}

Edit.propTypes = { onClick: PropTypes.func };
