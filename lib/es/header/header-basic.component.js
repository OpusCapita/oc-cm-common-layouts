var _templateObject = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  flex-basis: ', ';\n  flex-shrink: 1;\n'], ['\n  flex-basis: ', ';\n  flex-shrink: 1;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '../';

var HeaderSection = styled.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = styled(HeaderSection)(_templateObject2);

var SideSection = styled(HeaderSection)(_templateObject3, function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return React.createElement(
    Primitive.Header,
    { id: id, className: classPrefix + '_header ' + className },
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section left', basis: sideSectionBasis },
      left
    ),
    React.createElement(
      CenterSection,
      { className: classPrefix + '_header_section center' },
      center
    ),
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section right', basis: sideSectionBasis },
      right
    )
  );
};

HeaderBasic.propTypes = {
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  sideSectionBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px'
};

export default HeaderBasic;