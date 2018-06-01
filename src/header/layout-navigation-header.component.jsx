import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
// App imports
import { classPrefix, theme } from '../constants';
import LayoutHeader from './layout-basic-header.component';
import { PrimitiveBorderlessButton, PrimitiveHeaderTitle } from '../primitives';

const BackButton = PrimitiveBorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
  font-size: 16px;
`;

class LayoutNavigationHeader extends React.PureComponent {
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
        {title && <PrimitiveHeaderTitle>{title}</PrimitiveHeaderTitle>}
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

LayoutNavigationHeader.propTypes = {
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

LayoutNavigationHeader.defaultProps = {
  title: null,
  onBackClick: null,
  itemIds: [],
  goToItem: null,
  itemId: null,
  itemSeparator: null,
  listItemsDisabled: false,
  menuItems: [],
};

export default LayoutNavigationHeader;
