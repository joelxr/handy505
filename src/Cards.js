import React from "react";
import { Consumer } from "./Context";
import Card from "./Card";

class Cards extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <div className="search">
              <div className="search-box">
                <input
                  type="text"
                  className="nes-input"
                  placeholder="Search..."
                  onChange={context.handleCardNameChange}
                />
              </div>
              <div className="pagination">
                {context.page > 1 && (
                  <button
                    type="button"
                    className="nes-btn"
                    onClick={context.handlePrevPage}
                  >
                    Previous
                  </button>
                )}
                <button
                  type="button"
                  className="nes-btn"
                  onClick={context.handleNextPage}
                >
                  Next
                </button>
              </div>
            </div>
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
          </div>
        )}
      </Consumer>
    );
  }
}

export default Cards;
