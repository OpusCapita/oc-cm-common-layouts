import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { PrimitiveHeader } from '../primitives';

const Header = PrimitiveHeader.extend`
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
