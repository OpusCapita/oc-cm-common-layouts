import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '../';

var HeaderCustom = function HeaderCustom(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return React.createElement(
    Primitive.Header,
    { className: classPrefix + '_header ' + className, id: id },
    children
  );
};

HeaderCustom.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

HeaderCustom.defaultProps = {
  children: null,
  id: '',
  className: ''
};

export default HeaderCustom;