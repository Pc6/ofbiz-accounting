import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Dashboard from '../components/Dashboard';
import Invoice from '../containers/Invoice';
import SalesPayment from '../components/SalesPayment';
import Customer from '../components/Customer';
import Billing from '../containers/Billing';
import PurchasePayment from '../components/PurchasePayment';
import Supplier from '../components/Supplier';
import JournalDetail from '../components/JournalDetail';
import GlAccount from '../components/GlAccount';
import Tax from '../components/Tax';
import Bank from '../components/Bank';
import GlJournal from '../components/GlJournal';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="invoice" component={Invoice} />
    <Route path="sPayment" component={SalesPayment} />
    <Route path="customer" component={Customer} />
    <Route path="billing" component={Billing} />
    <Route path="pPayment" component={PurchasePayment} />
    <Route path="supplier" component={Supplier} />
    <Route path="JournalDetail" component={JournalDetail} />
    <Route path="glAccount" component={GlAccount} />
    <Route path="tax" component={Tax} />
    <Route path="bank" component={Bank} />
    <Route path="glJournal" component={GlJournal} />
  </Route>
);

export default routes;
