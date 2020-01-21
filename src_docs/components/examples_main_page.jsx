import React from 'react';
import { Content } from '../../src';

export default class MainPage extends React.PureComponent {
  render() {
    return (
      <Content.Row>
        <Content.Column id="oc-cm-common-main-column">
          <Content.Card title="oc-cm-common-components">
            <section>
              <strong>Layout components</strong>
              <p>Some info</p>
            </section>

            <section>
              <strong>Content components</strong>
              <p>Some info</p>
            </section>

            <section>
              <strong>Header components</strong>
              <p>Some info</p>
            </section>

            <section>
              <strong>Primitives</strong>
              <p>Some info</p>
            </section>
          </Content.Card>
        </Content.Column>
      </Content.Row>
    );
  }
}
