const CARD_LIST = [{"_id":"1111","name":"Duo","imageUrl":"1111.png"},{"_id":"2222","name":"My little pet","imageUrl":"2222.png"}];
const CARD_EDITED = {"_id":"2222","name":"Not little anymore","imageUrl":"2222.png"};

const MOCKS = {
    INITIAL_STATE: {cards: [], filteredCards: [], filter: '',},
    INITIAL_STATE_LOAD: ['FirstLoad'],
    CARD_LIST: CARD_LIST,
    CARD_EDITED: CARD_EDITED,
    SINGLE_CARD: CARD_LIST[0],
};

export default MOCKS;