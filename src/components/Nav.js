import * as React from "react";
import "./Nav.css";
import Modal from "./Modal";
import useModal from "./UseModal";

export default function Nav() {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <nav>
        <div className="menu board-menu">
          <span></span>
            <button className="new-column" onClick={toggle}>
              New column
            </button>
        </div>
      </nav>

      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </>
  )
}


