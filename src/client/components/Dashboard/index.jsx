import React, { Component } from 'react';
import { Card, Row } from 'antd';
import Panel from '../Panel';
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Panel title="Dashboard" />
        <div className="ant-dashboard">
          <Row type="flex" justify="space-around">
            <Card title="银行" extra={<a>更多</a>} style={{ width: 300, marginBottom: 16 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="销售" extra={<a>更多</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  title: React.PropTypes.string
};
