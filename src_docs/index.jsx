import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ThemeProvider } from 'styled-components';
// App imports
import App from './app.component';
import theme from '../src/theme';

const history = createHistory();

render(
  (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  ),
  document.getElementById('oc-examples'),
);
