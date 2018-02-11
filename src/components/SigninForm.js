import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './SigninForm.css';

import { RaisedButton, TextField, FlatButton } from 'material-ui';

import firebase from 'firebase';

class SigninForm extends Component {
  style = {
    color: "#ffffff",
    textTransform: "none"
  }

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  }

  signin = ( event ) => {
    const self = this;
    const email = document.getElementById( 'email' ).value;
    const password = document.getElementById( 'password' ).value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      self.props.Alert(error.message)
    });
  }

  resetform = ( event ) => {
    window.location.href = "/#reset-password"
  }

  render() {
    return (
      <div className="login">
        <div className="login-form">
          <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
          <form>
            <TextField id="email" type="email" hintText="Email" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } required />
            <TextField id="password" type="password" hintText="Password" fullWidth={true} inputStyle={ this.style } hintStyle={ this.hint_style } required />
            <RaisedButton className="signin" label="SIGN IN" primary={true} fullWidth={true} onClick={ this.signin } />
          </form>
          <p className="small center"><FlatButton label="Forgot your password?" labelStyle={ this.style } onClick={ this.resetform } /></p>
        </div>
        <div className="login-footer">
          <RaisedButton className="signup" label="Create your account" secondary={true} style={ { margin: "1em 0" } } />
        </div>
        <BrowserRouter>
        <div>
        <Route path="/" />
        <Route path="/world" render={props => <div>hello</div>} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default SigninForm;
