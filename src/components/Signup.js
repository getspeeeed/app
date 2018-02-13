import React, { Component } from 'react';
import { RaisedButton, TextField, FlatButton } from 'material-ui';
import firebase from 'firebase';
import PasswordField from './PasswordField'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableSignIn: true,
    };
  }

  style = {
    color: "#ffffff",
    textTransform: "none",
  }

  hint_style = {
    color: "rgba( 255, 255, 255, 0.4 )",
  }

  errorStyle = {
    fontSie: "0.8rem",
    color: "#999999",
  }

  signup = ( event ) => {
    const self = this;
    const email = document.getElementById( 'email' ).value;
    const password = document.getElementById( 'password' ).value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      const user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
        window.location.hash = ""
      }).catch(function(error) {
        self.props.Alert(error.message)
      });
    }).catch((error) => {
      self.props.Alert(error.message)
    })
  }

  render() {
    return (
      <div className="signup">
        <div className="main">
          <h1><img src="./img/logo-white.png" alt="Speeeed" className="logo" /></h1>
          <h2>Create your account</h2>
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
            <PasswordField
              id="password"
              type="password"
              hintText="Password"
              fullWidth={ true }
              inputStyle={ this.style }
              hintStyle={ this.hint_style }
              iconColor="#ffffff"
              required
            />
            <RaisedButton
              className="btn-signin"
              label="SIGN UP"
              backgroundColor="#FFC107"
              fullWidth={true}
              onClick={this.signup}
            />
            <p className="small">By clicking [SIGN UP], you agree to our terms of service and privacy policy.
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
