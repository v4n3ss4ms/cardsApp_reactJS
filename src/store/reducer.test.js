import MOCKS from '../__mocks__/common';
import reducer from './reducer';
import { LOAD_ACTION, EDIT_CARD, REMOVE_CARD, FILTER_CARDS } from "./actions";

it('load', () => {
    const loadState = reducer(MOCKS.INITIAL_STATE, {type:LOAD_ACTION, payload: MOCKS.INITIAL_STATE_LOAD});
    expect(loadState.cards.length).toBe(1);
    expect(loadState.filteredCards.length).toBe(1);
    expect(loadState.cards[0]).toBe('FirstLoad');
    expect(loadState.filteredCards[0]).toBe('FirstLoad');
  });

  it('edit', () => {
    const loadState = reducer(MOCKS.INITIAL_STATE, {type:LOAD_ACTION, payload: MOCKS.CARD_LIST});
    const editedState = reducer(loadState, {type:EDIT_CARD, payload: MOCKS.CARD_EDITED});
    const ID = '2222';
    const initial_card = loadState.cards.find(e => e._id === ID);
    const edited_card = editedState.cards.find(e => e._id === ID);
    expect(initial_card.name).not.toBe(edited_card.name);
  });