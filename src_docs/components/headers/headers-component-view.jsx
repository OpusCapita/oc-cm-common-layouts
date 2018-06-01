import React from 'react';
import { Header } from '../../../src/index';

export default class HeadersComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  };

  /**
   * Navigation header callbacks, etc.
   */
  onHeaderNavigationBrowseClick = () => {
    alert('Nav arrow clicked');
  };

  onMenuItemClick = (e) => {
    alert(`Menu item #${e.target.id} clicked`);
  };

  onBackClick = () => {
    alert('Back clicked');
  };

  /**
   * TabNavigation header callbacks, etc.
   */
  onTabChange = (href) => {
    // Mocking page change
    const newActiveKey = parseInt(href.replace(/[^0-9]/g, ''), 10) - 1;
    this.setState({ activeTab: newActiveKey });
  };

  renderNavigationHeader = () => (
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

  renderTabNavigationHeader = () => (
    <Header.TabNavigation
      title="TabNavigation header"
      list={[
        { name: 'Item 1', href: '/item1' },
        { name: 'Item 2', href: '/item2' },
        { name: 'Item 3', href: '/item3' },
        { name: 'Item 4', href: '/item4' },
        { name: 'Item 5', href: '/item5' },
        { name: 'Item 6', href: '/item6' },
      ]}
      onSelect={this.onTabChange}
      activeKey={this.state.activeTab}
    />
  );

  render() {
    return (
      <React.Fragment>
        {this.renderNavigationHeader()}
        <br />
        {this.renderTabNavigationHeader()}
      </React.Fragment>
    );
  }
}
