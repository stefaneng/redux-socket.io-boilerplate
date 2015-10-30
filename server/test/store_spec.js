import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../store';

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();

    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ITEMS',
      items: ['item-one', 'item-two']
    });

    expect(store.getState()).to.equal(fromJS({
      items: ['item-one', 'item-two']
    }));
  });
});
