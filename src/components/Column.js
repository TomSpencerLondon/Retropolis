import * as React from "react";
import Card from './Card';
import './Column.css';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cards: []
    }
  }

  render(){
    return(
      <div className="column">
        <div className="column-header">
          <span>
            Went well
          </span>
          <button className="add-card" onClick={this.addCard}>
            +
          </button>
          <ul>
            {this.state.cards.map((component, index) => (
              <React.Fragment key={index}>
                { component }
              </React.Fragment>)
            )}
          </ul>
        </div>
      </div>

      )
  }

  addCard() {
    const cardsToAdd = this.state.cards;

    cardsToAdd.push(<Card />)

    this.setState({
      cards: cardsToAdd
    })
  }
}

export default Column;