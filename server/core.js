import { List, Map } from 'immutable';

export const INITIAL_STATE = Map();

export function setItems(state, items) {
  return state.set('items', List(items));
}
