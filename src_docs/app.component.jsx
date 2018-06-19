import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from './containers/layouts';
import './app.component.scss';
import './images/favicon.ico';

@hot(module)
export default class App extends React.Component {
  render() {
    return (
      <Layout />
    );
  }
}
