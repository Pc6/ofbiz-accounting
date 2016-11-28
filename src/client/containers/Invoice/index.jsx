import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactList from 'react-list';
import Panel from '../../components/Panel';
import { findInvoices } from '../../actions/invoice';

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(findInvoices());
  }

  renderItem(index) {
    const invoice = this.props.invoices.get(index);
    return (
      <div key={invoice.get('invoiceId')} className="ant-listItem" >
        <h3>{invoice.get('invoiceId')}</h3>
        <p className="ant-listItem-sub">
          <span>{invoice.get('partyId')}</span>
          <span>{invoice.get('statusId')}</span>
        </p>
      </div>
    );
  }

  render() {
    return (<div>
      <Panel title="客户发票" />
      <div style={{ paddingTop: 8 }}>
        <ReactList
          type="uniform"
          itemRenderer={this.renderItem}
          length={this.props.invoices.size}
        />
      </div>
    </div>);
  }
}

Invoice.propTypes = {
  invoices: React.PropTypes.arrayOf(React.PropTypes.object),
  dispatch: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    invoices: state.invoices
  };
}

export default connect(mapStateToProps)(Invoice);
