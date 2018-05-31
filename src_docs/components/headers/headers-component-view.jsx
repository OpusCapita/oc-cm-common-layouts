import React from 'react';
import { Header } from '../../../src/index';

export default class HeadersComponentView extends React.PureComponent {

  onHeaderNavigationBrowseClick = () => {
    alert('CLICK');
  };

  onMenuItemClick = (e) => {
    alert(`Item ${e.target.id} clicked`);
  };

  render() {
    return (
      <Header.Navigation
        title="Navigation header"
        itemIds={['1', '2', '3']}
        itemId="1"
        goToItem={this.onHeaderNavigationBrowseClick}
        menuItems={[{
          id: '1',
          title: 'First item',
          onClick: this.onMenuItemClick,
        }, {
          id: '2',
          title: 'Second item',
          onClick: this.onMenuItemClick,
        }]
        }
      />
    );
  }
}
