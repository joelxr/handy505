import React from "react";
import { Consumer } from "./Context";

class Menu extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="menu">
            <div className="search-box">
              <input
                type="text"
                className="nes-input"
                placeholder="Search..."
              />
            </div>
            <div className="separator" />
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
        )}
      </Consumer>
    );
  }
}

export default Menu;
