var _templateObject = _taggedTemplateLiteralLoose(['\n  height:100vh;\n'], ['\n  height:100vh;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../constants';

var StyledWrapper = styled.div(_templateObject);
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return React.createElement(
    StyledWrapper,
    {
      className: classPrefix + '_wrapper ' + className,
      id: id
    },
    children
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};
Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: ''
};

export default Wrapper;