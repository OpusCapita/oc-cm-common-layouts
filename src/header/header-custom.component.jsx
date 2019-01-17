import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '..';

const HeaderCustom = ({ children, id, className }) => (
  <Primitive.Header className={`${classPrefix}_header ${className}`} id={id}>{children}</Primitive.Header>
);

HeaderCustom.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};

HeaderCustom.defaultProps = {
  children: null,
  id: '',
  className: '',
};

export default HeaderCustom;
