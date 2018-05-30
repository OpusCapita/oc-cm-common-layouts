import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import HeaderPrimitive from '../primitives/layout-primitive-header.component';

const Header = HeaderPrimitive.extend`
`;

const LayoutCustomHeader = ({ children }) => (
  <Header className={`${classPrefix}_header`}>{children}</Header>
);

LayoutCustomHeader.propTypes = {
  children: PropTypes.node,
};

LayoutCustomHeader.defaultProps = {
  children: null,
};

export default LayoutCustomHeader;
