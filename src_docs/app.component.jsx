import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@opuscapita/oc-cm-theme';
import Layout from './containers/layouts';
import './app.component.scss';
import './images/favicon.ico';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    );
  }
}

export default hot(App);
