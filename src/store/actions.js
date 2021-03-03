const LOAD_ACTION = "loadAction";
const EDIT_CARD = "editCard";
const REMOVE_CARD = "removeCard";
const FILTER_CARDS = "filterCards";

const fecthCards = () => (dispatch) => {
    fetch("cards.json")
    .then((res) => res.json())
    .then((data) => dispatch({type: LOAD_ACTION, payload: data}))
    .catch(() => {
        console.error(`Ups... data couldn't be loaded`);
    });
  }

export { LOAD_ACTION, EDIT_CARD, REMOVE_CARD, FILTER_CARDS, fecthCards };