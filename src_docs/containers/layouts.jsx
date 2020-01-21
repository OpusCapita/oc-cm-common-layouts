import React from 'react';
import { Layout } from '../../src';
import Navigation from '../components/examples_nav.component';
import ExampleLayouts from '../components/example_layouts.component';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout.Wrapper>
        <Navigation />
        <ExampleLayouts />
      </Layout.Wrapper>
    );
  }
}
