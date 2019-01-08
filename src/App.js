import React from "react";
import ReactDOM from "react-dom";
import API from "./api";
import { Provider } from "./Context";
import { Router, Link } from "@reach/router";
import Menu from "./Menu";
import Cards from "./Cards";
import CardDetail from "./CardDdetail";

import "../node_modules/nes.css/scss/nes.scss";
import "./assets/scss/style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      cards: [],
      cardName: "",
      handleCardNameChange: this.handleCardNameChange,
      handlePrevPage: this.handlePrevPage,
      handleNextPage: this.handleNextPage,
      loadCards: this.loadCards
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

  handleCardNameChange = event => {};

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Menu />
          <Router>
            <Cards path="/" />
            <CardDetail path="/detail/:id" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
