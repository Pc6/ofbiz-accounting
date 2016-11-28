import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers';
import loggerMiddleware from '../middlewares/logger';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware(),
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
