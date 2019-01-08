import React from "react";
import API from "./api";
import PokemonDetail from "./PokemonDetail";
import TrainerDetail from "./TrainerDetail";
import EnergyDetail from "./EnergyDetail";

class CardDetail extends React.Component {
  state = {};
  componentDidMount() {
    const id = this.props.id;
    this.findCardById(id);
  }
  findCardById(id) {
    API.get("/cards", { params: { id } }).then(res => {
      if (res.data.cards.length === 1) {
        const card = res.data.cards[0];
        this.setState({ card });
      }
    });
  }
  render() {
    const card = this.state.card;

    if (card) {
      const supertype = card.supertype;

      if (supertype === "Trainer") {
        return <TrainerDetail card={card} />;
      } else if (supertype === "Energy") {
        return <EnergyDetail card={card} />;
      } else if (supertype === "Pokémon") {
        return <PokemonDetail card={card} />;
      } else {
        return <h3>Loading...</h3>;
      }
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

export default CardDetail;
