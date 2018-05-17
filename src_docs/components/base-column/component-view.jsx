import React from 'react';
import { BaseColumComponent } from '../../../src/index';

export default class BaseColumnComponentView extends React.PureComponent {
  //             {'  {'} alignment: {'single, elements: this.singleChilds },\n'}
  singleChilds = () => (
    <div id="single-content-area">
      <h2>I am the SingleArea HEADER</h2>
      <div id="single-container">
        <h4>
          Using the BaseColumComponent with following props:
          <pre>
            {}render() {'{\n\n'}

            {}const columns = {'[\n'}

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
      {
        elements: this.singleChilds,
      },
    ];

    return (
      <BaseColumComponent columns={columns} />
    );
  }
}
