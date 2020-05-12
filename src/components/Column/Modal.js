import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import * as PropTypes from "prop-types";

function AddColumnDialog(props) {
  return (
    <div className="modal">
      <div className="modal-header">New column</div>
      <div className="modal-content">
        <input
          className="modal-input"
          placeholder="enter column name"
          onChange={props.onChange}
        />
      </div>
      <div className="modal-actions">
        <button
          type="button"
          className="modal-open-button"
          data-dismiss="modal"
          aria-label="Save"
          onClick={props.onClick}
        >
          OK
        </button>

        <button
          type="button"
          className="modal-close-button"
          data-dismiss="modal"
          aria-label="Close"
          onClick={props.onClick1}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

AddColumnDialog.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onClick1: PropTypes.any,
};
export default function Modal({ isShowing, hide, addColumn }) {
  const [newColumnName, setNewColumnName] = useState("");

  function handleChange(e) {
    setNewColumnName(e.target.value);
  }

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <AddColumnDialog
              onChange={handleChange}
              onClick={() => {
                addColumn(newColumnName);
                hide();
              }}
              onClick1={hide}
            />
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
