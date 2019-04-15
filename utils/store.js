import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const middlewares = [
  thunk,
  promise,
];

export default createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(
    ...middlewares
  )),
)
