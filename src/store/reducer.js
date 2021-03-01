import { LOAD_ACTION, EDIT_CARD, REMOVE_CARD, FILTER_CARDS } from "./actions";

const INITIAL_STATE = {cards: [{"_id":"5ce27b5b89230f002e13f606","name":"Duo","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/703ea030-8527-4a17-bd6f-23763eabfec9.png","count":{"total":0}},{"_id":"5ce27b5b89230f002e13f607","name":"My little pet","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/9f9e1020-55fa-445b-a68d-e8c9ebda55be.png","count":{"total":0}},{"_id":"5ce27b5b89230f002e13f608","name":"Guide me","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/6d8d9eab-54f4-43c7-b4d6-eb7c942aec4b.png","count":{"total":0}},{"_id":"5ce27b5b89230f002e13f609","name":"I'll heal you","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/753c3953-309f-4141-9d7e-078214efca62.png","count":{"total":0}},{"_id":"5ce27b5b89230f002e13f60a","name":"ZING","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/67d34218-12c8-431f-82a5-7fcac3b6a430.png","count":{"total":0}},{"_id":"5ce27bsd5b89230f002e13f606","name":"Duo","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/703ea030-8527-4a17-bd6f-23763eabfec9.png","count":{"total":0}},{"_id":"5cesd27b5b89230f002e13f607","name":"My little pet","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/9f9e1020-55fa-445b-a68d-e8c9ebda55be.png","count":{"total":0}},{"_id":"5ce27b5b89230f0sd02e13f608","name":"Guide me","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/6d8d9eab-54f4-43c7-b4d6-eb7c942aec4b.png","count":{"total":0}},{"_id":"5ce27b5b8923sd0f002e13f609","name":"I'll heal you","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/753c3953-309f-4141-9d7e-078214efca62.png","count":{"total":0}},{"_id":"5ce27b5b89230sdsdf002e13f60a","name":"ZING","imageUrl":"https://static.streamloots.com/e19c7bf6-ca3e-49a8-807e-b2e9a1a47524/67d34218-12c8-431f-82a5-7fcac3b6a430.png","count":{"total":0}}], // TODO: retrieve this data from an end-point
filter: '',};

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
