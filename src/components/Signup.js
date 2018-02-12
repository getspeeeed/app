import React, { Component } from 'react';
import { RaisedButton, TextField, FlatButton, Checkbox } from 'material-ui';
import firebase from 'firebase';

class Signup extends Component {
  style = {
    color: "#ffffff",
    textTransform: "none"
  }

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  }

  errorStyle = {
    fontSie: "0.8rem",
    color: "#999999",
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
            <TextField
              id="email"
              type="email"
              hintText="Email"
              fullWidth={ true }
              inputStyle={ this.style }
              hintStyle={ this.hint_style }
              required
            />
            <TextField
              id="password"
              type="password"
              hintText="Password"
              fullWidth={ true }
              inputStyle={ this.style }
              hintStyle={ this.hint_style }
              errorText="Use at least one letter, one numeral, and seven characters."
              errorStyle={ this.errorStyle }
              required
            />
            <RaisedButton
              className="signin"
              label="SIGN UP"
              primary={true}
              fullWidth={true}
              onClick={ this.signin }
            />
            <p class="small">By clicking [SIGN UP], you agree to our terms of service and privacy policy.
              We’ll occasionally send you account related emails.</p>
          </form>
          <p className="small center">
            <FlatButton label="Sign in" labelStyle={ this.style } onClick={ () => { window.location.hash = "" } } />
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
