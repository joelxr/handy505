import React from "react";
import LazyLoad from "react-lazyload";

class Card extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <LazyLoad height={50}>
        <div className="card">
          <img className="card-image" src={image} alt={name} />
        </div>
      </LazyLoad>
    );
  }
}

export default Card;
