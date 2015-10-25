import { List, Map} from 'immutable';
import { expect } from 'chai';

import { setEntries } from '../server/core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('item-one', 'item-two');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('item-one', 'item-two')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const entries = ['item-one', 'item-two'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('item-one', 'item-two')
      }));
    });
  });
});
