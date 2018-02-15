import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import UserMenu from './UserMenu.js'

class NavBar extends Component {

  style = {
    backgroundColor: "#333333",
  }

  titleStyle = {}
  iconStyle = {}

  iconStyleRight = {
    color: "#ffffff"
  }

  containerStyle = {
    backgroundColor: "#f5f5f5",
    color: "#555555",
  }

  MenuItemStyle = {
    color: "#555555",
  }

  render() {
    return (
        <div>
          <Drawer
            className="navbar"
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
            containerStyle={ this.containerStyle }
          >
            <MenuItem style={ this.MenuItemStyle }>Hello</MenuItem>
          </Drawer>
          <AppBar
            title=""
            onLeftIconButtonClick={() => this.props.onToggle()}
            style={ this.style }
            titleStyle={ this.titleStyle }
            iconStyleLeft={ this.iconStyle }
            iconStyleRight={ this.iconStyleRight }
            iconElementRight={ <UserMenu /> }
          />
        </div>
    );
  }
}

export default NavBar;
