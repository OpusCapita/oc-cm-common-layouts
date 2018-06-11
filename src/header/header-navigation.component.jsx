import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
// App imports
import { classPrefix, theme } from '../constants';
import LayoutHeader from './header-basic.component';
import * as Primitive from '../primitives';

const BackButton = Primitive.BorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
  font-size: 16px;
`;

class HeaderNavigation extends React.PureComponent {
  getRightContent = () => {
    const { menuItems } = this.props;
    if (!menuItems.length) return null;

    return (
      <DropdownMenu
        id={`${classPrefix}_navigation-header-menu`}
        menuItems={menuItems}
      />
    );
  };

  renderLeftContent = () => {
    const { onBackClick, title } = this.props;
    return (
      <React.Fragment>
        {typeof onBackClick === 'function' &&
        <BackButton onClick={onBackClick}><Icon type="indicator" name="arrowLeft" /></BackButton>}
        {title && <Primitive.Title>{title}</Primitive.Title>}
      </React.Fragment>
    );
  };

  renderCenterContent = () => {
    const {
      itemIds, goToItem, itemId, itemSeparator, listItemsDisabled,
    } = this.props;

    if (!this.props.itemIds.length) return null;
    return (
      <ListItems
        id={`${classPrefix}_navigation-header-items`}
        itemIds={itemIds}
        goToItem={goToItem}
        itemId={itemId}
        itemElement={itemSeparator}
        disabled={listItemsDisabled}
      />
    );
  };

  render() {
    return (
      <LayoutHeader
        className={`${classPrefix}_navigation-header`}
        left={this.renderLeftContent()}
        center={this.renderCenterContent()}
        right={this.getRightContent()}
      />
    );
  }
}

HeaderNavigation.propTypes = {
  title: PropTypes.string,
  onBackClick: PropTypes.func,
  itemIds: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  goToItem: PropTypes.func,
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  itemSeparator: PropTypes.node,
  listItemsDisabled: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
  ])),
};

HeaderNavigation.defaultProps = {
  title: null,
  onBackClick: null,
  itemIds: [],
  goToItem: null,
  itemId: null,
  itemSeparator: null,
  listItemsDisabled: false,
  menuItems: [],
};

export default HeaderNavigation;
