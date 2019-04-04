import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ThemeProvider } from 'styled-components';
import theme from '@opuscapita/oc-cm-theme';

// App imports

import App from './app.component';

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
