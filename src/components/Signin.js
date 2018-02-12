import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import SigninForm from './SigninForm'
import PasswordReset from './PasswordReset';
import Signup from './Signup';

import './Signin.css';

class Signin extends Component {

  resetform = ( event ) => {
    ReactDOM.render(<PasswordReset />, document.getElementById('root'));
  }

  render() {
    return (
      <HashRouter>
        <div className="signin">
          <Route exact path="/" render={ () => <SigninForm  Alert={this.props.Alert} Info={this.props.Info} /> } />
          <Route path="/reset-password" render={ () => <PasswordReset  Alert={this.props.Alert} Info={this.props.Info} /> } />
          <Route path="/signup" render={ () => <Signup  Alert={this.props.Alert} Info={this.props.Info} /> } />
        </div>
      </HashRouter>
    );
  }
}

export default Signin;
