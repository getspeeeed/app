import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';
import { firebaseConfig } from '../firebase-config.js';
import Main from './Main';
import Signin from './Signin';
import { Snackbar } from 'material-ui';

firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "",
      user: null,
    };
  }

  Alert = (message) => {
    this.setState({
      open: true,
      message: message,
      style: {
        backgroundColor: "#ff0000"
      }
    });
  };

  Info = (message) => {
    this.setState({
      open: true,
      message: message,
      style: {}
    });
  };

  CloseBar = () => {
    this.setState({
      open: false,
    });
  };

  snackbar_style = {
    backgroundColor: "#ff0000"
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
        })
      } else {
        this.setState({
          user: user,
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    if (this.state.user) {
      return (
        <MuiThemeProvider>
          <div id="container">
            <Main Alert={this.Alert} Info={this.Info} />
            <Snackbar
              open={ this.state.open }
              message={ this.state.message }
              autoHideDuration={ 4000 }
              onRequestClose={ this.handleRequestClose }
              bodyStyle={ this.state.style }
            />
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <div id="container">
            <Signin Alert={this.Alert} Info={this.Info} />
            <Snackbar
              open={ this.state.open }
              message={ this.state.message }
              autoHideDuration={ 4000 }
              onRequestClose={ this.CloseBar }
              bodyStyle={ this.state.style }
            />
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

export default App;
