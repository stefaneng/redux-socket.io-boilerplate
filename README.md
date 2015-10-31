# Redux Socket.io Boilerplate

## Build Status
[![Build Status](https://travis-ci.org/stefaneng/redux-socket.io-boilerplate.svg)](https://travis-ci.org/stefaneng/redux-socket.io-boilerplate)

## Commands
  - `npm start` runs the development server with [hot-loading](https://github.com/gaearon/react-hot-loader).
  - `npm test` runs both server side and client side tests
  - `npm run lint` runs eslint on files
  - `npm run build` builds partyq for production
  - `npm run test:server` runs server side tests
  - `npm run test:client` runs client side tests
  - `npm run test:server-watch` runs server tests when files change
  - `npm run test:client-watch` runs client tests when files change
  - `npm run test:watch` runs tests when files change

## Layout
  - [/test](test/) General tests that do not fit in front or backend.
    - [/test/learning](test/learning) various non-application tests. Used to experiment with a new API or get comformable with the testing framework.

### Frontend
  - [/app](app/) root of front end code
  - [/app/test](app/test) front end tests

### Backend
  - [/server](server/) contains the main backend source code for partyq. Reducer, Redux store, and core functionality.
  - [/server/test](server/test/) contains chai tests for the partyq backend.

## Packages

### [React](https://facebook.github.io/react/)

### [Redux](http://redux.js.org/)
Redux manages the state in partyq. We want to represent our application's state as an immutable tree data structure. We change the state by applying function to the state tree. Also uses [react-redux](https://github.com/rackt/react-redux) to play nicely with react.
  - [backend reducer](server/reducer.js)
  - [backend store](server/store.js)
  - [frontend reducer](app/reducer.js)

### [Express](http://expressjs.com/)
Framework used on backend

### [Webpack](https://webpack.github.io/)
Module bundler. See
  - [webpack.config.js](webpack.config.js) for development config
  - [webpack.production.config.js](webpack.production.config.js) for production config
Based on the configurations from [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate).

### Other Dependencies
  - [Immutable](https://facebook.github.io/immutable-js/) for immutable data structure to promote pure functions and functional style.
    - See [/tests/learning/immutable_spec.js](tests/learning/immutable_spec.js) for an example of how to use and test the immutable data structures.
    - [Full API Docs](https://facebook.github.io/immutable-js/docs/#/)
  - [Socket.io](http://socket.io/) abstracts websockets for realtime applications

### Dev Dependencies
  - [jsdom](https://github.com/tmpvar/jsdom) implements the DOM in node, so we don't need to use karma for tests.
  - [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) with [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) allows for serving of files to a public path without building each time.
  - [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) allows for hot reloading while running own server.
  - [Babel](https://babeljs.io/) to support ES6 features such as modules
  - [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) for unit testing.
    - [Chai Immutable](https://github.com/astorije/chai-immutable) for using immutable with chai tests.
  - [Eslint](http://eslint.org/) ensures coding standards. Current settings can be found in [.eslintrc](.eslintrc).
    - Extends the [airbnb eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) configuration for ES6.
    - [babel-eslint](https://github.com/babel/babel-eslint) to lint ES6 code.
    - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) to lint React and jsx parts.
  - [pre-commit](https://github.com/observing/pre-commit) to run lint and test before each commit
  - [rimraf](https://github.com/isaacs/rimraf) to clear the `dist` folder before starting partyq or building partyq.
  - [postcss-loader](https://github.com/postcss/postcss-loader)
  - [autoprefixer](https://github.com/postcss/autoprefixer) "Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you."
  - [stats-webpack-plugin](https://github.com/unindented/stats-webpack-plugin) get the stats of the webpack build.
  - [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extract text from bundle into a file.


## References
  - [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
  - [The Ultimate Webpack Setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
  - [Redux Easy Boilerplate](https://github.com/anorudes/redux-easy-boilerplate)
