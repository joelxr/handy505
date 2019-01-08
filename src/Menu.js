import React from "react";
import { Consumer } from "./Context";

class Menu extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="menu">
            <div className="brand">HANDY.505</div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Menu;
