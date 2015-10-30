import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        items: List.of('item-one', 'item-two')
      })
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      items: List.of('item-one', 'item-two')
    }));
  });
  it('handles ADD_ITEM in empty state', () => {
    const initialState = Map();
    const action = {
      type: 'ADD_ITEM',
      item: 'new-item'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      items: List.of('new-item')
    }));
  });
});
