import * as React from "react";
import './Card.css';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import * as PropTypes from "prop-types";



export default function Card() {
  const [editing, setEditing] = useState(true)

  return(
    editing ?
      <div className="new-back">
        <div className="message-body">
          <Edit onClick={() => setEditing(false)}/>
        </div>
      </div>
      :
      <div className="message-main">
        <div className="message-body">
          <Display onClick={() => setEditing(true)}/>
        </div>
      </div>
  )
}

function Display(props) {
  return <div className="text">
    This card is working
    <div className="pencil message-bodylink">
      <FontAwesomeIcon icon={faPencilAlt} onClick={props.onClick}/>
    </div>
  </div>;
}

Display.propTypes = {onClick: PropTypes.func};


function Edit(props) {
  return <>
<textarea>
          </textarea>
    <button className="add-message" onClick={props.onClick}>
      Add
    </button>
  </>;
}

Edit.propTypes = {onClick: PropTypes.func};

