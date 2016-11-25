import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Dashboard from '../components/Dashboard';
import SalesInvoice from '../components/SalesInvoice';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="salesInvoice" component={SalesInvoice} />
  </Route>
);

export default routes;
