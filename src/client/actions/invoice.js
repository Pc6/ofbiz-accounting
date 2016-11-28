import request from 'superagent';
import * as types from '../constants/invoice';

export function findInvoices() {
  return {
    type: types.FIND_INVOICES,
    payload: request.get('/api/invoiceList')
      .query({ invoiceTypeId: 'SALES_INVOICE' })
      .then(res => res.body)
  };
}

export function getInvoice(id) {
  return {
    type: types.GET_INVOICE,
    payload: request.get(`/api/invoices/${id}`)
      .then(res => res.body)
  };
}

export function createInvoice(body) {
  return {
    type: types.CREATE_INVOICE,
    payload: request.post('/api/invoices')
      .send(body).then(res => res.body)
  };
}

export function updateInvoice(id, body) {
  return {
    type: types.UPDATE_INVOICE,
    payload: request.put(`/api/invoices/${id}`)
      .send(body).then(res => res.body)
  };
}

export function createInvoiceItem(id, body) {
  return {
    type: types.CREATE_INVOICE_ITEM,
    payload: request.post(`/api/invoices/${id}`)
      .send(body).then(res => res.body)
  };
}

export function updateInvoiceItem(id, itemId, body) {
  return {
    type: types.UPDATE_INVOICE_ITEM,
    payload: request.put(`/api/invoices/${id}/${itemId}`)
      .send(body).then(res => res.body)
  };
}

export function removeInvoiceItem(id, itemId) {
  return {
    type: types.REMOVE_INVOICE_ITEM,
    payload: request.del(`/api/invoices/${id}/${itemId}`)
      .then(res => res.body)
  };
}
