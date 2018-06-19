import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import App from './app.component';

const history = createHistory();

render(
  (
    <Router history={history}>
      <App />
    </Router>),
  document.getElementById('oc-examples'),
);
