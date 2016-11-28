import { fromJS, List } from 'immutable';
import * as types from '../constants/billing';

export default function invoice(state = List(), action) {
  switch (action.type) {
    case `${types.FIND_BILLINGS}_FULFILLED`: {
      const billingList = fromJS(action.payload)
        .getIn(['invoices', 'col-LinkedList', 'eeval-Invoice'])
        .map(x => x.get('attributes'));
      return state.update(() => billingList);
    }
    default: {
      return state;
    }
  }
}
