import { List, Map} from 'immutable';
import { expect } from 'chai';

import { setItems } from '../core';

describe('application logic', () => {
  describe('setItems', () => {
    it('adds the items to the state', () => {
      const state = Map();
      const items = List.of('item-one', 'item-two');
      const nextState = setItems(state, items);

      expect(nextState).to.equal(Map({
        items: List.of('item-one', 'item-two')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const items = ['item-one', 'item-two'];
      const nextState = setItems(state, items);

      expect(nextState).to.equal(Map({
        items: List.of('item-one', 'item-two')
      }));
    });
  });
});
