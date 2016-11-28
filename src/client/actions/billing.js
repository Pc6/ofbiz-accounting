import request from 'superagent';
import * as types from '../constants/billing';

export function findBillings() {
  return {
    type: types.FIND_BILLINGS,
    payload: request.get('/api/invoiceList')
      .query({ invoiceTypeId: 'PURCHASE_INVOICE' })
      .then(res => res.body)
  };
}

export function getBilling(id) {
  return {
    type: types.GET_BILLING,
    payload: request.get(`/api/invoices/${id}`)
      .then(res => res.body)
  };
}

export function createBilling(body) {
  return {
    type: types.CREATE_BILLING,
    payload: request.post('/api/invoices')
      .send(body).then(res => res.body)
  };
}

export function updateBilling(id, body) {
  return {
    type: types.UPDATE_BILLING,
    payload: request.put(`/api/invoices/${id}`)
      .send(body).then(res => res.body)
  };
}

export function createBillingItem(id, body) {
  return {
    type: types.CREATE_BILLING_ITEM,
    payload: request.post(`/api/invoices/${id}`)
      .send(body).then(res => res.body)
  };
}

export function updateBillingItem(id, itemId, body) {
  return {
    type: types.UPDATE_BILLING_ITEM,
    payload: request.put(`/api/invoices/${id}/${itemId}`)
      .send(body).then(res => res.body)
  };
}

export function removeBillingItem(id, itemId) {
  return {
    type: types.REMOVE_BILLING_ITEM,
    payload: request.del(`/api/invoices/${id}/${itemId}`)
      .then(res => res.body)
  };
}
