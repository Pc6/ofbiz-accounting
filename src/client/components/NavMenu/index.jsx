import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;

const NavMenu = ({ current, onMenuItemClick }) => (
  <Menu
    mode="inline"
    style={{ width: 240, height: '100%' }}
    onClick={onMenuItemClick}
    defaultOpenKeys={[]}
    selectedKeys={[current]}
  >
    <Menu.Item key="dashboard">Dashboard</Menu.Item>
    <SubMenu key="1" title="销售">
      <Menu.Item key="invoice">客户发票</Menu.Item>
      <Menu.Item key="sPayment">付款</Menu.Item>
      <Menu.Item key="customer">客户</Menu.Item>
    </SubMenu>
    <SubMenu key="purchase" title="采购">
      <Menu.Item key="billing">供应商账单</Menu.Item>
      <Menu.Item key="pPayment">付款</Menu.Item>
      <Menu.Item key="supplier">供应商</Menu.Item>
    </SubMenu>
    <SubMenu key="consult" title="顾问">
      <Menu.Item key="journalDetail">日记账分录</Menu.Item>
      <Menu.Item key="glAccount">科目表</Menu.Item>
    </SubMenu>
    <SubMenu key="setting" title="设置">
      <Menu.Item key="tax">税金</Menu.Item>
      <Menu.Item key="bank">银行账户</Menu.Item>
      <Menu.Item key="glJournal">日记账</Menu.Item>
    </SubMenu>
  </Menu>
);

NavMenu.propTypes = {
  current: React.PropTypes.string,
  onMenuItemClick: React.PropTypes.func
};

export default NavMenu;
