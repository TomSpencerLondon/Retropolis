import * as React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="menu board-menu">
          <span></span>
            <button className="new-column">
              New column
            </button>
        </div>
      </nav>
    </>
  )
}