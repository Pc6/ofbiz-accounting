import React, { Component } from 'react';
import { Table } from 'antd';
import Panel from '../Panel';

export default class SalesPayment extends Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '付款日期',
      dataIndex: 'date'
    }, {
      title: '名字',
      dataIndex: 'name'
    }, {
      title: '付款日记账',
      dataIndex: 'glJournal'
    }, {
      title: '客户',
      dataIndex: 'customer'
    }, {
      title: '状态',
      dataIndex: 'status'
    }];
    this.data = [{
      key: '1',
      date: '2016.11.2',
      name: 'test',
      glJournal: 'test',
      customer: 'demoCustomer',
      status: 'ready'
    }, {
      key: '2',
      date: '2016.11.2',
      name: 'test',
      glJournal: 'test',
      customer: 'demoCustomer',
      status: 'ready'
    }, {
      key: '3',
      date: '2016.11.2',
      name: 'test',
      glJournal: 'test',
      customer: 'demoCustomer',
      status: 'ready'
    }];
    this.rowSelection = {
      onChange(selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll(selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows);
      }
    };
  }

  render() {
    return (
      <div>
        <Panel title="付款" />
        <Table
          columns={this.columns}
          dataSource={this.data}
          rowSelection={this.rowSelection}
          scroll={{ x: 600 }}
          style={{ backgroundColor: '#fff' }}
        />
      </div>
    );
  }
}
