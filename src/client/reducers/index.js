import { combineReducers } from 'redux';
import invoice from './invoice';
import billing from './billing';

const reducers = combineReducers({
  invoices: invoice,
  billings: billing
});

export default reducers;
