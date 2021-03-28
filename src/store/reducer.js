import { LOAD_ACTION, EDIT_CARD, REMOVE_CARD, FILTER_CARDS } from "./actions";

const INITIAL_STATE = {cards: [], filteredCards: [], filter: '',};

const editCard = (list, card) => {
  return list.reduce((acc, e) => {
    let element = e._id === card._id ? card : e;
    return acc.concat(element);
  }, []);
};

const removeCard = (list, card) => {
  return list.reduce((acc, e) => {
    return e._id === card._id ? acc : acc.concat(e);
  }, []);
};

const filterCards = (cards, filter) => cards.filter((e) => e.name.toLowerCase().includes(filter));

const reducer = (state = INITIAL_STATE, action) => {
  let rawCards = [];
  switch (action.type) {
    case LOAD_ACTION:
      return { ...state, cards: action.payload, filteredCards: action.payload};
    case EDIT_CARD:
      rawCards = editCard(state.cards, action.payload);
      return { ...state, cards: rawCards, filteredCards: filterCards(rawCards, state.filter)};
    case REMOVE_CARD:
      rawCards = removeCard(state.cards, action.payload);
      return { ...state, cards: rawCards, filteredCards: filterCards(rawCards, state.filter)};
    case FILTER_CARDS:
      return { ...state, filter: action.payload, filteredCards: filterCards(state.cards, action.payload)};
    default:
      return state;
  }
};

export default reducer;
