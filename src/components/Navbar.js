import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';

import firebase from 'firebase';

const signout = function( e ) {
  firebase.auth().signOut();
}

const style = {}
const titleStyle = {}
const iconStyle = {}

class NavBar extends Component {
  render() {
    return (
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem onClick={ signout }>Sign Out</MenuItem>
          </Drawer>
          <AppBar
            className="navbar"
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
