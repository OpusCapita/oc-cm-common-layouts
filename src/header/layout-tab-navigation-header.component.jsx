import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveNavbar from '@opuscapita/react-responsive-navbar';
// App imports
import { classPrefix, theme } from '../constants';
import { PrimitiveHeader, PrimitiveHeaderTitle } from '../primitives';

const ProductTitle = PrimitiveHeaderTitle.extend`
  margin-right: ${theme.gutterWidth};
`;

const LayoutTabNavigationHeader = ({ onSelect, title, list, activeKey, showNavItemBorder, showNavItemTooltip }) => ( // eslint-disable-line
  <PrimitiveHeader className={`${classPrefix}_product-header`}>
    {title && <ProductTitle>{title}</ProductTitle>}
    {!!list.length &&
    <ResponsiveNavbar
      activeKey={activeKey}
      list={list}
      showNavItemBorder={showNavItemBorder}
      showNavItemTooltip={showNavItemTooltip}
      onSelect={onSelect}
    />}
  </PrimitiveHeader>
);

LayoutTabNavigationHeader.propTypes = {
  title: PropTypes.string,
  activeKey: PropTypes.number,
  list: PropTypes.arrayOf(PropTypes.shape({})),
  showNavItemBorder: PropTypes.bool,
  showNavItemTooltip: PropTypes.bool,
  onSelect: PropTypes.func,
};

LayoutTabNavigationHeader.defaultProps = {
  title: null,
  activeKey: 0,
  list: [],
  showNavItemBorder: false,
  showNavItemTooltip: true,
  onSelect: null,
};

export default LayoutTabNavigationHeader;
