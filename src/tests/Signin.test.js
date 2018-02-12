import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Signin from '../components/Signin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><Signin /></MuiThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
