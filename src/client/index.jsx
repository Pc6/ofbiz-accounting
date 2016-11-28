import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import './styles/global.css';

const router = (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
