import React from "react";
import ReactDOM from "react-dom";
import API from "./api";
import Card from "./Card";

import "./assets/scss/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      cards: []
    };
  }

  componentDidMount() {
    this.loadCards();
  }

  loadCards() {
    API.get("/cards", { params: { page: this.state.page } }).then(res => {
      this.setState({
        cards: res.data.cards
      });
    });
  }

  handlePrevPage = event => {
    const currentPage = this.state.page;
    this.setState(
      {
        page: currentPage - 1
      },
      this.loadCards
    );
  };

  handleNextPage = event => {
    const currentPage = this.state.page;
    this.setState({ page: currentPage + 1 }, this.loadCards);
  };

  render() {
    return (
      <div>
        <div className="pagination">
          {this.state.page > 1 && (
            <button
              type="button"
              id="prevPageBtn"
              className="btn is-primary"
              onClick={this.handlePrevPage}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            id="nextPageBtn"
            className="btn is-primary"
            onClick={this.handleNextPage}
          >
            Next
          </button>
        </div>
        <div className="cards">
          {this.state.cards.map(card => {
            return (
              <Card key={card.id} image={card.imageUrl} name={card.name} />
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
