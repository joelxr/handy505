import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class PokemonDetail extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({
      card: this.props.card
    });
  }
  render() {
    const card = this.state.card;

    if (card) {
      const {
        name,
        attacks,
        imageUrlHiRes,
        nationalPokedexNumber,
        rarity,
        resistences,
        retreatCost,
        series,
        set,
        supertype,
        subtype,
        types,
        weaknesses,
        hp,
        artist
      } = card;
      return (
        <div className="card-detail">
          <div className="card-info">
            <div className="nes-container with-title">
              <p className="title">
                #{nationalPokedexNumber} - {name}
              </p>
              <p>HP: {hp}</p>
              <p>Type: {types.join(", ")}</p>
              {weaknesses && weaknesses.length && (
                <p>
                  Weaknesses:
                  {weaknesses
                    .map(weakness => {
                      return `${weakness.type} (${weakness.value})`;
                    })
                    .join(", ")}
                </p>
              )}
              {resistences && resistences.length && (
                <p>
                  Resistences:
                  {resistences
                    .map(resistence => {
                      return `${resistence.type} (${resistence.value})`;
                    })
                    .join(", ")}
                </p>
              )}
              <p>Retreat Cost: {retreatCost.join(", ")}</p>
            </div>
            {attacks && attacks.length > 0 && (
              <div className="nes-container with-title">
                <p className="title">Attacks</p>
                <table className="nes-table">
                  <thead>
                    <tr>
                      <th>Cost</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {attacks.map(attack => (
                      <tr key={attack.name}>
                        <td>
                          {attack.cost && (
                            <p className="attack-cost">
                              {attack.cost.join(", ")}
                            </p>
                          )}
                        </td>
                        <td>
                          <p className="attack-name">
                            {attack.name}
                            {attack.damage && (
                              <span className="attack-damage">
                                ({attack.damage})
                              </span>
                            )}
                          </p>
                        </td>
                        <td>
                          {attack.text && (
                            <p className="attack-text">{attack.text}</p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div className="nes-container with-title">
              <p className="title">Card</p>
              <p>
                Type: {supertype} / {subtype}
              </p>
              <p>Series: {series}</p>
              <p>Set: {set}</p>
              <p>Rarity: {rarity}</p>
              <p>Artist: {artist}</p>
            </div>
          </div>
          <div className="card-cover">
            <LazyLoadImage
              width={460}
              src={imageUrlHiRes}
              alt={name}
              effect="blur"
            />
          </div>
        </div>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

export default PokemonDetail;
