# partyq
partyq

## Layout
  - [test](test/) contains chai tests for partyq. Tests are written in ES6 using the babel compiler. Checkout the various test commands in [`package.json`](package.json)

## Packages

### [Redux](http://redux.js.org/)
Redux deserves its own heading for its importance. We want to represent our application's state as an immutable tree data structure. We change the state by applying function to the state tree.

### Dependencies
  - [Immutable](https://facebook.github.io/immutable-js/) for immutable data structure to promote pure functions and functional style

### Dev Dependencies
  - [Babel](https://babeljs.io/) to support ES6 features such as modules
  - [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) for unit testing.
    - [Chai Immutable](https://github.com/astorije/chai-immutable) for using immutable with chai tests.
