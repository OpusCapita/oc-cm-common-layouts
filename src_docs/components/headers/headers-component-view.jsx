import React from 'react';
import { Header, Primitive } from '../../../src/index';

export default class HeadersComponentView extends React.PureComponent {
  renderBasicHeader = () => (
    <Header.Basic
      left={<Primitive.Title>Left content</Primitive.Title>}
      center={<span>Center content</span>}
      right={<span>Right content</span>}
    />
  );


  render() {
    return (
      <React.Fragment>
        {this.renderBasicHeader()}
      </React.Fragment>
    );
  }
}
