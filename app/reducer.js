import {List, Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function addItem(e, item) {
  return state.items.push(item);
}

export default function(state = Map({items: List()}), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'ADD_ITEM':
    return state.merge(Map({items: List([action.item])}));
  default:
    return state;
  }
}
