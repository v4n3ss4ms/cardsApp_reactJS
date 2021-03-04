import { LOAD_ACTION, EDIT_CARD, REMOVE_CARD, FILTER_CARDS } from "./actions";

const INITIAL_STATE = {cards: [], filter: '',};

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

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ACTION:
      return { ...state, cards: action.payload };
    case EDIT_CARD:
      return { ...state, cards: editCard(state.cards, action.payload) };
    case REMOVE_CARD:
      return { ...state, cards: removeCard(state.cards, action.payload) };
    case FILTER_CARDS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
