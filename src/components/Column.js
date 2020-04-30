import * as React from "react";
import Card from './Card';
import './Column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  render(){
    return(
      <div className="column">
        <div className="column-header">
          <span>
            Went well
          </span>
          <button className="add-card" onClick={this.sayHello}>
            +
          </button>
        </div>
      </div>

      )
  }

  sayHello() {
    alert('hello')
  }
}

export default Column;