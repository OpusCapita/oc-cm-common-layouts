import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@opuscapita/oc-cm-theme';

// App imports
import App from './app.component';

render(
  (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  ),
  document.getElementById('oc-examples'),
);
