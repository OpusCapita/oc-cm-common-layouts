import React from 'react';

// App imports
import { Layout, Content, Primitive } from '../../../src/';

export default class InputColumnComponentView extends React.PureComponent {
  onChange = () => {

  };

  getContent = () => [{
    id: 'column1',
    fields: [{
      label: 'Label 1',
      value: 'Value 1',
      id: 1,
    }, {
      label: 'Field with error',
      value: 'Value 2',
      id: 2,
      error: 'Some error',
    }, {
      label: 'ReadonlyColumn',
      value: 'ReadonlyColumn value',
      id: '2.5',
      readOnly: true,
    }],
  }, {
    id: 'column2',
    fields: [{
      label: 'Required field',
      value: 'Value 3',
      id: 3,
      required: true,
    }, {
      label: 'Required field with error',
      value: 'Value 4',
      id: 4,
      required: true,
      error: 'Some error in required field',
    }, {
      label: 'Label 5',
      value: 'Value 5',
      id: 5,
    }],
  }];

  render() {
    return (
      <Layout.Wrapper>
        <Content.Row>
          {this.getContent().map(section => (
            <Content.Column key={section.id}>
              <Content.Card id={section.id}>
                {section.fields.map((row) => {
                  if (row.readOnly) {
                    return (<Content.ReadonlyColumn
                      key={row.id}
                      label={row.label}
                      value={row.value}
                    />);
                  }

                  return (
                    <Content.InputColumn
                      label={row.label}
                      key={row.id}
                      error={row.error}
                      required={row.required}
                    >
                      <Primitive.Input value={row.value} onChange={this.onChange} />
                    </Content.InputColumn>
                  );
                })}
              </Content.Card>
            </Content.Column>
          ))}
        </Content.Row>
      </Layout.Wrapper>
    );
  }
}
