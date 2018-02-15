import React, { Component } from 'react';
import { MenuItem, IconMenu, FlatButton, Divider } from 'material-ui';
import PersonIcon from 'material-ui/svg-icons/social/person';
import firebase from 'firebase';

class NavBar extends Component {

  currentUser = firebase.auth().currentUser;

  signOut = function( e ) {
    firebase.auth().signOut();
  }

  style = {
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
  }

  render() {
    return (
      <div style={this.style}>
        <IconMenu
          iconButtonElement={
            <FlatButton
              label={this.currentUser.email}
              labelPosition="after"
              primary={true}
              icon={<PersonIcon />}
              hoverColor="transparent"
              style={{
                color: "#ffffff",
              }}
              labelStyle={{ textTransform: "none" }}
            />
          }
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
          <MenuItem primaryText={this.currentUser.email} />
          <Divider />
          <MenuItem primaryText="Help" />
          <Divider />
          <MenuItem primaryText="Sign out" onClick={ this.signOut } />
        </IconMenu>
      </div>
    );
  }
}

export default NavBar;
