import * as React from "react";
import Card from "./Card";
import "./Column.css";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cards: [],
    };
  }

  render() {
    return (
      <div className="column">
        <div className="column-header">
          <h2>
            <span>{this.props.name}</span>
          </h2>
          <button className="add-card" onClick={this.addCard}>
            +
          </button>
        </div>
        <ul className="column_2">
          {this.state.cards.map((component, index) => (
            <li key={index} className="message">
              {component}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  addCard() {
    const cardsToAdd = this.state.cards;

    cardsToAdd.push(<Card />);

    this.setState({
      cards: cardsToAdd,
    });
  }
}

export default Column;
