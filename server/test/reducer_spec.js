import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../reducer';

describe('reducer', () => {
  it('has an initial state', () => {
    const action = {type: 'SET_ITEMS', items: ['item-one']};
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      items: ['item-one']
    }));
  });

  it('handles SET_ITEMS', () => {
    const initialState = Map();
    const action = {type: 'SET_ITEMS', items: ['item-one']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      items: ['item-one']
    }));
  });
});
