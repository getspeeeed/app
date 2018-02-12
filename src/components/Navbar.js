import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import firebase from 'firebase';

const signout = function( e ) {
  firebase.auth().signOut();
}

const style = {
  backgroundColor: "#333333",
}
const titleStyle = {}
const iconStyle = {}
const containerStyle = {
  backgroundColor: "#f5f5f5",
  color: "#555555",
}
const MenuItemStyle = {
  color: "#555555",
}

class NavBar extends Component {
  render() {
    return (
        <div>
          <Drawer
            className="navbar"
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
            containerStyle={ containerStyle }
          >
            <MenuItem onClick={ signout } style={ MenuItemStyle }>Sign Out</MenuItem>
          </Drawer>
          <AppBar
            title="Speeeed"
            onLeftIconButtonClick={() => this.props.onToggle()}
            style={ style }
            titleStyle={ titleStyle }
            iconStyleLeft={ iconStyle }
            iconStyleRight={ iconStyle }
          />
        </div>
    );
  }
}

export default NavBar;
