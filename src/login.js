import React, { Component } from 'react';
import './login.css';

import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton, TextField } from 'material-ui';

import firebase from 'firebase';

const style = {
  color: "#ffffff",
}

const hint_style = {
  color: "rgba( 255, 255, 255, 0.4 )",
}

const login = function( event ) {
  const email = document.getElementById( 'email' ).value;
  const password = document.getElementById( 'password' ).value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error)
  });
}

class Login extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="login">
          <div className="login-form">
            <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
            <TextField id="email" type="email" hintText="Email" fullWidth={true} inputStyle={ style } hintStyle={ hint_style } />
            <TextField id="password" type="password" hintText="Password" fullWidth={true} inputStyle={ style } hintStyle={ hint_style } />
            <RaisedButton className="signin" label="SIGN IN" primary={true} fullWidth={true} onClick={ login } />
            <p className="small center"><a href="#">Forgot your password?</a></p>
          </div>
          <div className="login-footer">
            <RaisedButton className="signup" label="Create your account" secondary={true} style={ { margin: "1em 0" } } />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
