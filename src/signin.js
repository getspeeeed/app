import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './signin.css';

import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton, TextField, FlatButton } from 'material-ui';

import firebase from 'firebase';

import PasswordReset from './passwordreset';

class Signin extends Component {
  style = {
    color: "#ffffff",
    textTransform: "none"
  }

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  }

  signin = ( event ) => {
    const email = document.getElementById( 'email' ).value;
    const password = document.getElementById( 'password' ).value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      alert( error.message )
    });
  }

  resetform = ( event ) => {
    ReactDOM.render(<PasswordReset />, document.getElementById('root'));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="login">
          <div className="login-form">
            <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
            <form>
              <TextField id="email" type="email" hintText="Email" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } />
              <TextField id="password" type="password" hintText="Password" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } />
              <RaisedButton className="signin" label="SIGN IN" primary={true} fullWidth={true} onClick={ this.signin } />
            </form>
            <p className="small center"><FlatButton label="Forgot your password?" labelStyle={ this.style } onClick={ this.resetform } /></p>
          </div>
          <div className="login-footer">
            <RaisedButton className="signup" label="Create your account" secondary={true} style={ { margin: "1em 0" } } />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Signin;
