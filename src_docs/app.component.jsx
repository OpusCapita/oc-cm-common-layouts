import React from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './containers/layouts';
import './app.component.scss';
import './images/favicon.ico';

class App extends React.Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default hot(App);
