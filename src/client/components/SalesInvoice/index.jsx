import React, { Component } from 'react';
import VirtualList from 'react-virtual-list';
import Panel from '../Panel';

export default class SalesInvoice extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    for (let i = 0; i < 10; i += 1) {
      this.items.push({
        id: i
      });
    }
  }

  renderItem(item) {
    return (
      <div key={item.id} style={{ height: 100 }}>
        <h3>{item.id}</h3>
      </div>
    );
  }

  render() {
    return (<div>
      <Panel title="客户发票" />
      <div>
        <VirtualList
          items={this.items}
          renderItem={this.renderItem}
          itemHeight={100}
        />
      </div>
    </div>);
  }
}
