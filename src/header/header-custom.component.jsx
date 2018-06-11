import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '../';

const HeaderCustom = ({ children }) => (
  <Primitive.Header className={`${classPrefix}_header`}>{children}</Primitive.Header>
);

HeaderCustom.propTypes = {
  children: PropTypes.node,
};

HeaderCustom.defaultProps = {
  children: null,
};

export default HeaderCustom;
