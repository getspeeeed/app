import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { firebaseConfig } from './firebase-config.js';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
