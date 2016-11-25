import React, { Component } from 'react';
import Drawer from 'react-motion-drawer';
import { Icon } from 'antd';
import NavMenu from '../NavMenu';
import './appBar.css';

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
    this.drawerChange = this.drawerChange.bind(this);
  }

  drawerChange() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  render() {
    return (
      <div className="ant-appBar">
        <h1 className="ant-title">
          <Icon type="bars" onClick={this.drawerChange} />&nbsp;
          { this.props.title }
        </h1>
        <Drawer
          open={this.state.isDrawerOpen}
          width={240}
          onChange={open => this.setState({ isDrawerOpen: open })}
        >
          <NavMenu />
        </Drawer>
      </div>
    );
  }
}

AppBar.propTypes = { title: React.PropTypes.string };
AppBar.defaultProps = { title: 'Ofbiz Accounting' };

export default AppBar;
