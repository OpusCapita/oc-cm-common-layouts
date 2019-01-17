import React from 'react';
import items from '../demo-items.json';
import { Content } from '../../../src/index';
import FixedColumnsSelect from './fixed-columns-select.component';

export default class FixedColumnsComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      golumnGrow: 1,
      stretchRow: true,
      col0Grow: 1,
      col1Grow: 1,
      col2Grow: 2,
      col3Grow: 1,
    };
  }

  onColumnCountChange = (e) => {
    this.setState({ columnCount: parseInt(e.target.value, 10) });
  };

  onStretchContainerChange = (e) => {
    this.setState({ stretchRow: e.target.value === 'true' });
  };

  onColumnGrowChange = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  };

  getItemChunks = () => {
    const n = this.state.columnCount;
    const rest = items.length % n;
    let restUsed = rest;
    const chunkSize = Math.floor(items.length / n);
    const result = [];

    for (let i = 0; i < items.length; i += chunkSize) {
      let end = chunkSize + i;
      let add = false;

      if (rest !== 0 && restUsed) { // should add one element for the division
        end += 1;
        restUsed -= 1; // we've used one division element now
        add = true;
      }

      result.push(items.slice(i, end)); // part of the array

      if (add) i += 1; // also increment i in the case we added an extra element for division
    }
    return result;
  };

  render() {
    const columnOptions = [
      { value: 1, label: '1 column' },
      { value: 2, label: '2 columns' },
      { value: 3, label: '3 columns' },
      { value: 4, label: '4 columns' },
    ];

    const growOptions = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
    ];

    const stretchRowOptions = [
      { value: true, label: 'On' },
      { value: false, label: 'Off' },
    ];

    return (
      <React.Fragment>
        <Content.Row
          topOffset={40}
          stretch={this.state.stretchRow}
          id="fixed-columns-content-row"
          className="fixed-columns-content-row-class"
        >
          {this.getItemChunks().map((columns, columnIndex) => (
            <Content.Column
              key={`col-${columns[0].id}`}
              grow={this.state[`col${columnIndex}Grow`]}
              id="fixed-columns-content-column"
              className="fixed-columns-content-column-class"
            >

              {columns.map((card, cardIndex) => (
                <React.Fragment key={card.id}>

                  {cardIndex === 0
                  && (
                  <Content.Card id={card.id}>
                    <FixedColumnsSelect
                      onChange={this.onColumnGrowChange}
                      value={this.state[`col${columnIndex}Grow`]}
                      options={growOptions}
                      name={`col${columnIndex}Grow`}
                      label={`Column #${columnIndex + 1} flex-grow value`}
                    />
                  </Content.Card>
                  )}
                  {columnIndex === 0 && cardIndex === 0
                  && (
                  <Content.Card id={card.id} title="Column options">
                    <FixedColumnsSelect
                      onChange={this.onColumnCountChange}
                      value={this.state.columnCount}
                      options={columnOptions}
                      label="Column count"
                    />
                    <FixedColumnsSelect
                      onChange={this.onStretchContainerChange}
                      value={this.state.stretchRow}
                      options={stretchRowOptions}
                      label="Row stretching (prop:stretch)"
                    />
                  </Content.Card>
                  )}
                  <Content.Card id={card.id} key={card.id} title={card.name}>
                    {card.children.map(row => <p key={row.id}>{row.name}</p>)}
                  </Content.Card>
                </React.Fragment>
              ))}
            </Content.Column>
          ))}
        </Content.Row>
      </React.Fragment>
    );
  }
}
