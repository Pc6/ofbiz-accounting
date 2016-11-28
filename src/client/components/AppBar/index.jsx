import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Drawer from 'react-motion-drawer';
import { Icon } from 'antd';
import NavMenu from '../NavMenu';
import './appBar.css';

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      current: '1'
    };
    this.drawerChange = this.drawerChange.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  onMenuItemClick(e) {
    this.setState({
      current: e.key,
      isDrawerOpen: false
    });
    // console.log(e.item)
    browserHistory.push(`/${e.key}`);
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
          <NavMenu current={this.state.current} onMenuItemClick={this.onMenuItemClick} />
        </Drawer>
      </div>
    );
  }
}

AppBar.propTypes = { title: React.PropTypes.string };
AppBar.defaultProps = { title: 'Ofbiz Accounting' };

export default AppBar;
