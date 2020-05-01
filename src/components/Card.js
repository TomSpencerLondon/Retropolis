import * as React from "react";
import './Card.css';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
export default function Card() {
  const [editing, setEditing] = useState(true)

   return(
    editing ?
      <div className="new-back">
        <div className="message-body">
          <textarea>
          </textarea>
          <button className="add-message" onClick={() => setEditing(false)}>
            Add
          </button>
        </div>
      </div>
:
      <div className="message-main">
        <div className="message-body">
          <div className="text">
            This card is working
            <div className="pencil message-bodylink">
              <FontAwesomeIcon icon={ faPencilAlt } onClick={() => setEditing(true)} />
            </div>
          </div>

        </div>
      </div>
     )
}