import Router from 'koa-router';
import * as invoiceController from '../controllers/invoiceController';
import * as paymentController from '../controllers/paymentController';
import * as glAccountController from '../controllers/glAccountController';
import * as finAccountController from '../controllers/finAccountController';
import * as glJournalController from '../controllers/glJournalController';
import * as glReconciliationController from '../controllers/glReconciliationController';
import * as taxAuthorityController from '../controllers/taxAuthorityController';
import * as partyGroupController from '../controllers/partyGroupController';
import * as personController from '../controllers/personController';
import * as acctgTransController from '../controllers/acctgTransController';

const router = new Router({
  prefix: '/api'
});

router.get('/invoices/:id', invoiceController.getInvoice)
      .post('/invoices', invoiceController.createInvoice)
      .put('/invoices/:id', invoiceController.updateInvoice)
      .post('/invoices/:id', invoiceController.createInvoiceItem)
      .put('/invoices/:id/:seqId', invoiceController.updateInvoiceItem)
      .del('/invoices/:id/:seqId', invoiceController.removeInvoiceItem)
      .get('/invoiceList', invoiceController.findInvoices);

router.get('/payments/:id', paymentController.getPayment)
      .post('/payments', paymentController.createPayment)
      .put('/payments/:id', paymentController.updatePayment)
      .get('/payments/:id/:appId', paymentController.getPaymentApplication)
      .post('/payments/:id', paymentController.createPaymentApplication)
      .put('/payments/:id/:appId', paymentController.updatePaymentApplication)
      .del('/payments/:id/:appId', paymentController.removePaymentApplication)
      .get('/paymentList', paymentController.findPayments);

router.get('/glAccounts/:id', glAccountController.getGlAccount)
      .post('/glAccounts', glAccountController.createGlAccount)
      .put('/glAccounts/:id', glAccountController.updateGlAccount)
      .del('/glAccounts/:id', glAccountController.deleteGlAccount)
      .get('/glAccountList', glAccountController.findGlAccounts);

router.get('/finAccounts/:id', finAccountController.getFinAccount)
      .post('/finAccounts', finAccountController.createFinAccount)
      .put('/finAccounts/:id', finAccountController.updateFinAccount)
      .del('/finAccounts/:id', finAccountController.deleteFinAccount)
      .get('/finAccountList', finAccountController.findFinAccounts);

router.get('/glJournals/:id', glJournalController.getGlJournal)
      .post('/glJournals', glJournalController.createGlJournal)
      .put('/glJournals/:id', glJournalController.updateGlJournal)
      .del('/glJournals/:id', glJournalController.deleteGlJournal)
      .get('/glJournalList', glJournalController.findGlJournals);

router.get('/glReconciliations/:id', glReconciliationController.getGlReconciliation)
      .post('/glReconciliations', glReconciliationController.createGlReconciliation)
      .put('/glReconciliations/:id', glReconciliationController.updateGlReconciliation)
      .del('/glReconciliations/:id', glReconciliationController.deleteGlReconciliation)
      .get('/glReconciliationList', glReconciliationController.findGlReconciliations);

router.get('/taxAuthorities', taxAuthorityController.getTaxAuthority)
      .post('/taxAuthorities', taxAuthorityController.createTaxAuthority)
      .put('/taxAuthorities', taxAuthorityController.updateTaxAuthority)
      .del('/taxAuthorities', taxAuthorityController.deleteTaxAuthority)
      .get('/taxAuthorityList', taxAuthorityController.findTaxAuthorities);

router.get('/partyGroups/:id', partyGroupController.getPartyGroup)
      .post('/partyGroups', partyGroupController.createPartyGroup)
      .put('/partyGroups/:id', partyGroupController.updatePartyGroup)
      .get('/partyGroupList', partyGroupController.findPartyGroups);

router.get('/persons/:id', personController.getPerson)
      .post('/persons', personController.createPerson)
      .put('/person/:id', personController.updatePerson)
      .get('/personList', personController.findPersons);

router.get('/acctgTrans/:id', acctgTransController.getAcctgTrans)
      .post('/acctgTrans', acctgTransController.createAcctgTrans)
      .put('/acctgTrans/:id', acctgTransController.updateAcctgTrans)
      .del('/acctgTrans/:id', acctgTransController.deleteAcctgTrans)
      .get('/acctgTransList', acctgTransController.findAcctgTrans);

export default router;
