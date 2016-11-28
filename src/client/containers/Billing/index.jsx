import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactList from 'react-list';
import Panel from '../../components/Panel';
import { findBillings } from '../../actions/billing';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(findBillings());
  }

  renderItem(index) {
    const billing = this.props.billings.get(index);
    return (
      <div key={billing.get('invoiceId')} className="ant-listItem" >
        <h3>{billing.get('invoiceId')}</h3>
        <p className="ant-listItem-sub">
          <span>{billing.get('partyIdFrom')}</span>
          <span>{billing.get('statusId')}</span>
        </p>
      </div>
    );
  }

  render() {
    return (<div>
      <Panel title="供应商账单" />
      <div style={{ paddingTop: 8 }}>
        <ReactList
          type="uniform"
          itemRenderer={this.renderItem}
          length={this.props.billings.size}
        />
      </div>
    </div>);
  }
}

Billing.propTypes = {
  billings: React.PropTypes.arrayOf(React.PropTypes.object),
  dispatch: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    billings: state.billings
  };
}

export default connect(mapStateToProps)(Billing);
