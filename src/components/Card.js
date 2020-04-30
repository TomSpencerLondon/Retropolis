import * as React from "react";
import './Card.css';

class Card extends React.Component {
  render() {
   return(
     <div className="message-main">
       <div className="message-body">
         <div className="text">
           This card is working
         </div>
       </div>
     </div>
     )
  }
}

export default Card;