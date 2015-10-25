# partyq
partyq

## Commands
  - `npm test` runs tests once
  - `npm run test:watch` runs tests when files change
  - `npm run lint` runs eslint on files

## Layout
  - [/src](src/) contains the main source code for partyq. Reducer, Redux store, and core functionality.
  - [/test](test/) contains chai tests for partyq. Tests are written in ES6 using the babel compiler. Checkout the various test commands in [`package.json`](package.json)
    - [/test/learning](test/learning) various non-application tests. Used to experiment with a new API or get comformable with the testing framework.

## Packages

### [React](https://facebook.github.io/react/)


### [Redux](http://redux.js.org/)
Redux manages the state in partyq. We want to represent our application's state as an immutable tree data structure. We change the state by applying function to the state tree.
  - [partyq reducer](src/reducer.js)
  - [partyq store](src/store.js)

### Dependencies
  - [Immutable](https://facebook.github.io/immutable-js/) for immutable data structure to promote pure functions and functional style.
    - See [/tests/learning/immutable_spec.js](tests/learning/immutable_spec.js) for an example of how to use and test the immutable data structures.
    - [Full API Docs](https://facebook.github.io/immutable-js/docs/#/)
  - [Socket.io](http://socket.io/) abstracts websockets for realtime applications

### Dev Dependencies
  - [Babel](https://babeljs.io/) to support ES6 features such as modules
  - [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) for unit testing.
    - [Chai Immutable](https://github.com/astorije/chai-immutable) for using immutable with chai tests.
  - [Eslint](http://eslint.org/) ensures coding standards. Current settings can be found in [.eslintrc](.eslintrc).
    - Extends the [airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) configuration for ES6.
    - [babel-eslint](https://github.com/babel/babel-eslint) to lint ES6 code.
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) to lint React and jsx parts.
  - [pre-commit](https://github.com/observing/pre-commit) to run lint and test before each commit
