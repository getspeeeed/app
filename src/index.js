import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { slide as Menu } from 'react-burger-menu'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { firebaseConfig } from './firebase-config.js';
import './index.css';
import Login from './login';

injectTapEventPlugin();
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
