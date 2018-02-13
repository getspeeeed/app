import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer, IconMenu, IconButton } from 'material-ui';
import firebase from 'firebase';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const signout = function( e ) {
  firebase.auth().signOut();
}

const style = {
  backgroundColor: "#333333",
}
const titleStyle = {}
const iconStyle = {}
const iconStyleRight = {
  color: "#ffffff"
}
const containerStyle = {
  backgroundColor: "#f5f5f5",
  color: "#555555",
}
const MenuItemStyle = {
  color: "#555555",
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color="#ffffff" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class NavBar extends Component {
  userInfo = () => {
    return <div>hello</div>
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
            containerStyle={ containerStyle }
          >
            <MenuItem onClick={ signout } style={ MenuItemStyle }>Sign Out</MenuItem>
          </Drawer>
          <AppBar
            title=""
            onLeftIconButtonClick={() => this.props.onToggle()}
            style={ style }
            titleStyle={ titleStyle }
            iconStyleLeft={ iconStyle }
            iconStyleRight={ iconStyleRight }
            iconElementRight={<Logged />}
          />
        </div>
    );
  }
}

export default NavBar;
