import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';
import './panel.css';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearched: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isSearched: !this.state.isSearched
    });
  }

  render() {
    return (
      <div className="ant-panel">
        <Row type="flex" justify="space-between">
          <Col span={10}>
            <h2>{this.props.title}</h2>
          </Col>
          <Col span={14}>
            {this.state.isSearched ? <Input size="small" className="ant-search-input" /> : null}
            <Button type="primary" shape="circle" icon="search" onClick={this.handleClick} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" style={{ marginTop: 8 }}>创建</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

Panel.propTypes = { title: React.PropTypes.string };
