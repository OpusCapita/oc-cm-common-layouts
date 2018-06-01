import React from 'react';
import { Header } from '../../../src/index';

export default class HeadersComponentView extends React.PureComponent {

  onHeaderNavigationBrowseClick = () => {
    alert('Nav arrow clicked');
  };

  onMenuItemClick = (e) => {
    alert(`Menu item #${e.target.id} clicked`);
  };

  onBackClick = () => {
    alert('Back clicked');
  };

  render() {
    return (
      <Header.Navigation
        onBackClick={this.onBackClick}
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
