import React from 'react';

export default class ContainerComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="plain_container">
        <h3>There can be anything inside Container</h3>
      </div>
    )
  }
}
