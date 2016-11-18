import Router from 'koa-router';
import * as invoiceController from '../controllers/invoiceController';
import * as paymentController from '../controllers/paymentController';
import * as glAccountController from '../controllers/glAccountController';

const router = new Router({
  prefix: '/api'
});

router.get('/invoices/:id', invoiceController.getInvoice)
      .post('/invoices', invoiceController.createInvoice)
      .put('/invoices/:id', invoiceController.updateInvoice)
      .post('/invoices/:id', invoiceController.createInvoiceItem)
      .put('/invoices/:id/:seqId', invoiceController.updateInvoiceItem)
      .del('/invoices/:id/:seqId', invoiceController.removeInvoiceItem);

router.get('/payments/:id', paymentController.getPayment)
      .post('/payments', paymentController.createPayment)
      .put('/payments/:id', paymentController.updatePayment)
      .get('/payments/:id/:appId', paymentController.getPaymentApplication)
      .post('/payments/:id', paymentController.createPaymentApplication)
      .put('/payments/:id/:appId', paymentController.updatePaymentApplication)
      .del('/payments/:id/:appId', paymentController.removePaymentApplication);

router.get('/glAccounts/:id', glAccountController.getGlAccount)
      .post('/glAccounts', glAccountController.createGlAccount)
      .put('/glAccounts/:id', glAccountController.updateGlAccount)
      .del('/glAccounts/:id', glAccountController.deleteGlAccount);

export default router;
