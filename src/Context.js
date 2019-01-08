import React from "react";

const Context = React.createContext({
  page: "1",
  cards: [],
  cardName: "",
  handleCardNameChange() {},
  handlePrevPage() {},
  handleNextPage() {},
  loadCards() {}
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
