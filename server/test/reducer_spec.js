import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../reducer';

describe('reducer', () => {
  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['item-one']};
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      entries: ['item-one']
    }));
  });

  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = {type: 'SET_ENTRIES', entries: ['item-one']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['item-one']
    }));
  });
});
