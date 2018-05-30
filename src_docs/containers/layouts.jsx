import React from 'react';
import { Layout } from '../../src';
import Navigation from '../components/examples_nav.component';
import ExampleLayouts from '../components/example_layouts.component';

// import '@opuscapita/oc-cm-common-styles/styles/layouts';


export default class MainLayout extends React.PureComponent {
  render() {
    return (
      <Layout.Wrapper>
        <Navigation />
        <ExampleLayouts />
      </Layout.Wrapper>
    );
  }
}
