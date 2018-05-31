import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import LayoutHeader from '../layout-basic-header.component';
import BackButton from './layout-navigation-header-back.component';

const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
  font-weight: 600;
  margin: 0;
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
    const { showBack, backUrl, title } = this.props;
    return (
      <React.Fragment>
        {showBack ? <BackButton backUrl={backUrl} /> : null}
        {title && <Title>{title}</Title>}
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
  showBack: PropTypes.bool,
  backUrl: PropTypes.string,
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
  showBack: true,
  backUrl: null,
  itemIds: [],
  goToItem: null,
  itemId: null,
  itemSeparator: null,
  listItemsDisabled: false,
  menuItems: [],
};

export default LayoutNavigationHeader;
