import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key
    });
    // console.log(e.item)
    // browserHistory.push('/salesInvoice');
  }

  render() {
    return (
      <Menu
        mode="inline"
        style={{ width: 240, height: '100%' }}
        onClick={this.handleClick}
        defaultOpenKeys={[]}
        selectedKeys={[this.state.current]}
      >
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <SubMenu key="1" title="销售">
          <Menu.Item key="2">客户发票</Menu.Item>
          <Menu.Item key="3">付款</Menu.Item>
          <Menu.Item key="4">客户</Menu.Item>
        </SubMenu>
        <SubMenu key="purchase" title="采购">
          <Menu.Item key="5">供应商账单</Menu.Item>
          <Menu.Item key="6">付款</Menu.Item>
          <Menu.Item key="7">供应商</Menu.Item>
        </SubMenu>
        <SubMenu key="consult" title="顾问">
          <Menu.Item key="8">日记账分录</Menu.Item>
          <Menu.Item key="9">科目表</Menu.Item>
        </SubMenu>
        <SubMenu key="setting" title="设置">
          <Menu.Item key="10">税金</Menu.Item>
          <Menu.Item key="11">银行账户</Menu.Item>
          <Menu.Item key="12">日记账</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
