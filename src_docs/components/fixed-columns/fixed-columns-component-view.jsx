import React from 'react';
import items from '../demo-items.json';
import { Content, Header } from '../../../src/layout';
import FixedColumnsSelect from './fixed-columns-select.component';

export default class FixedColumnsComponentView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      columnCount: '2',
      stretchContainer: true,
    };
  }

  onColumnCountChange = (e) => {
    this.setState({ columnCount: e.target.value });
  };

  onStretchContainerChange = (e) => {
    this.setState({ stretchContainer: e.target.value === 'true' });
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
      { value: '1', label: '1 column' },
      { value: '2', label: '2 columns' },
      { value: '3', label: '3 columns' },
      { value: '4', label: '4 columns' },
    ];

    const stretchContainerOptions = [
      { value: true, label: 'props.stretchContainer: true' },
      { value: false, label: 'props.stretchContainer: false' },
    ];


    return (
      <div>
        <Header.Basic
          left={
            <FixedColumnsSelect
              onChange={this.onColumnCountChange}
              value={this.state.columnCount}
              options={columnOptions}
            />}
          center={<FixedColumnsSelect
            onChange={this.onStretchContainerChange}
            value={this.state.stretchContainer}
            options={stretchContainerOptions}
          />}
        />
        <Content.Row
          topOffset={60}
          stretch={this.state.stretchContainer}
        >
          {this.getItemChunks().map(columns => (
            <Content.Column key={`col-${columns[0].id}`}>
              {columns.map(card => (
                <Content.Card key={card.id} title={card.name}>
                  {card.children.map(row => <p key={row.id}>{row.name}</p>)}
                </Content.Card>
              ))}
            </Content.Column>
          ))}
        </Content.Row>
      </div>
    );
  }
}
