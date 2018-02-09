import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <input type="email" id="email" /><br />
        <input type="password" id="password" /><br />
        <input type="button" value="submit" />
      </div>
    );
  }
}

export default Login;
