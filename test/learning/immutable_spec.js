import { expect } from 'chai';

describe('immutability', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      // Incrementing state will not change original
      expect(state).to.equal(42);
    });
  });
});
