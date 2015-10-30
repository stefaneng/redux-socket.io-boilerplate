import { setItems, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ITEMS':
    return setItems(state, action.items);
  default:
    return state;
  }
}
