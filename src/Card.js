import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Card extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <div className="card">
        <LazyLoadImage
          width={240}
          height={330}
          src={image}
          alt={name}
          effect="blur"
        >
        </LazyLoadImage>
      </div>
    );
  }
}

export default Card;
