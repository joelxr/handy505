import React from "react";
import { Link } from "@reach/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Card extends React.Component {
  render() {
    const { id, name, image } = this.props;
    return (
      <div className="card">
        <Link to={`/detail/${id}`}>
          <LazyLoadImage
            width={240}
            height={330}
            src={image}
            alt={name}
            effect="blur"
          />
        </Link>
      </div>
    );
  }
}

export default Card;
