import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

import firebase from 'firebase';

const signout = function( e ) {
  firebase.auth().signOut();
}

const style = {
  backgroundColor: "#333333"
}

class NavBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
            title="Speeeed"
            onLeftIconButtonClick={() => this.props.onToggle()}
            style={ style }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
