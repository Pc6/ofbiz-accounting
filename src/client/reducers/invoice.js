import { fromJS, List } from 'immutable';
import * as types from '../constants/invoice';

export default function invoice(state = List(), action) {
  switch (action.type) {
    case `${types.FIND_INVOICES}_FULFILLED`: {
      const invoiceList = fromJS(action.payload)
        .getIn(['invoices', 'col-LinkedList', 'eeval-Invoice'])
        .map(x => x.get('attributes'));
      return state.update(() => invoiceList);
    }
    default: {
      return state;
    }
  }
}
