import React from "react";
import { Consumer } from "./Context";
import Card from "./Card"

class Cards extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="cards">
            {context.cards.map(card => {
              return (
                <Card
                  id={card.id}
                  key={card.id}
                  image={card.imageUrl}
                  name={card.name}
                />
              );
            })}
          </div>
        )}
      </Consumer>
    );
  }
}

export default Cards;
