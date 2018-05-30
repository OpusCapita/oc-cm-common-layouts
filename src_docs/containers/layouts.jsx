import React from 'react';
import { Container } from '../../src/container/index';
import Navigation from '../components/examples_nav.component';
import ExampleLayouts from '../components/example_layouts.component';

// import '@opuscapita/oc-cm-common-styles/styles/layouts';


export default class Layout extends React.PureComponent {
  render() {
    return (
      <Container containerId="example-layout-container">
        <Navigation />
        <ExampleLayouts />
      </Container>
    );
  }
}
