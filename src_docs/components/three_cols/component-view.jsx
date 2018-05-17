import React from 'react';
import { OrderedList } from 'immutable';
import { BaseColumComponent } from '../../../src/index';

export default class ThreeColumnComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customWidth: 0,
      customMiddleWidth: 0,
    };
  }

  setLeftWidth = e => (this.setState({ customWidth: Number(e.target.value) }));

  setMiddleWidth = e => (this.setState({ customMiddleWidth: Number(e.target.value) }));

  leftChilds = () => {
    let attrs = {};
    const isCustom = this.state.customWidth !== 0 ?
      { width: this.state.customWidth } : { };
    if (isCustom) attrs = { style: isCustom };

    return (
      <div id="left-content-area" {...attrs}>
        <h2>I am the LeftArea HEADER</h2>
        <div id="left-side-container">
          <h4>LeftSideArea</h4>
          <select onChange={this.setLeftWidth}>
            <option value="0" name="default" id="0">Default</option>
            <option value="150" name="small" id="1">{`${150}px`}</option>
            <option value="450" name="medium" id="2">{`${450}px`}</option>
            <option value="650" name="large" id="3">{`${650}px`}</option>
            <option value="850" name="xlarge" id="4">{`${850}px`}</option>
            <option value="1250" name="xxlarge" id="5">{`${1250}px`}</option>
          </select>
        </div>
      </div>
    );
  }

  middleChilds = () => {
    let attrs = {};
    const isCustom = this.state.customMiddleWidth !== 0 ?
      { width: this.state.customMiddleWidth } : { };
    if (isCustom) attrs = { style: isCustom };
    return (
      <div id="middle-content-area" {...attrs}>
        <h2>I am the MiddleArea HEADER</h2>
        <div id="middle-side-container">
          <h4>MiddleSideArea</h4>
          <select onChange={this.setMiddleWidth}>
            <option value="0" name="default" id="0">Default</option>
            <option value="150" name="small" id="1">{`${150}px`}</option>
            <option value="650" name="medium" id="2">{`${650}px`}</option>
            <option value="850" name="large" id="3">{`${850}px`}</option>
            <option value="1000" name="xlarge" id="4">{`${1000}px`}</option>
            <option value="1250" name="xxlarge" id="5">{`${1250}px`}</option>
          </select>
        </div>
      </div>
    );
  }

  rightChilds = () => (
    <div id="right-content-area">
      <h2>I am the RightArea HEADER</h2>
      <div id="right-side-container">
        <h4>
          Using the ThreeColumComponent with following props:
          <hr />
          <pre>
            {}render() {'{\n\n'}
            {}const columns = {'[\n'}
            {'  {'} alignment: {'left, elements: this.leftChilds },\n'}
            {'  {'} alignment: {'right, elements: this.rightChilds },\n'}
            {'];\n\n'}
            &lt;BaseColumComponent columns={'{'}column{'}\n'}
            /&gt;{'\n'}
            {}{'}\n\n'}
          </pre>
        </h4>
      </div>
    </div>
  )

  render() {
    const columns = [
      { alignment: 'left', elements: this.leftChilds },
      { alignment: 'middle', elements: this.middleChilds },
      { alignment: 'right', elements: this.rightChilds },
    ];

    return (
      <BaseColumComponent columns={columns} />
    );
  }
}
