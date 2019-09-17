import React from 'react';

// App imports
import { Layout, Content, Primitive } from '../../../src';

export default class InputColumnComponentView extends React.PureComponent {
  onChange = () => {};

  getContent = () => [
    {
      id: 'column1',
      fields: [
        {
          label: 'Label 1',
          value: 'Value 1',
          id: '1',
        },
        {
          label: 'Field with error',
          value: 'Value 2',
          id: '2',
          error: 'Some error',
        },
        {
          label: 'Field with warning',
          value: 'Value 3',
          id: '3',
          warning: 'Some warning',
        },
        {
          label: 'ReadonlyRow',
          value: 'ReadonlyRow value',
          id: '2.5',
          readOnly: true,
        },
        {
          label: 'With append',
          value: 'Value 4',
          id: '6',
          append: 'This can be either node, string or number',
        },
      ],
    },
    {
      id: 'column2',
      fields: [
        {
          label: 'Required field',
          value: 'Value 3',
          id: '3',
          required: true,
        },
        {
          label: 'Required field with error, and some long text as label',
          value: 'Value 4',
          id: '4',
          required: true,
          error: 'Some error in required field',
        },
        {
          label: 'Required field with warning, and some long text as label',
          value: 'Value 5',
          id: '5',
          required: true,
          warning: 'Some warning in required field',
        },
        {
          label: 'Label 6',
          value: 'Value 6',
          id: '6',
        },
      ],
    },
  ];

  render() {
    return (
      <Layout.Wrapper>
        <Content.Row>
          {this.getContent().map(section => (
            <Content.Column key={section.id}>
              <Content.Card id={section.id}>
                {section.fields.map((row) => {
                  if (row.readOnly) {
                    return (
                      <Content.ReadonlyColumn
                        key={row.id}
                        id={row.id}
                        label={row.label}
                        value={row.value}
                      />
                    );
                  }

                  return (
                    <Content.InputColumn
                      label={row.label}
                      key={row.id}
                      id={row.id}
                      error={row.error}
                      warning={row.warning}
                      required={row.required}
                      append={row.append}
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
