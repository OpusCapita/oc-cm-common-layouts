'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height:100vh;\n'], ['\n  height:100vh;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var StyledWrapper = _styledComponents2.default.div(_templateObject);
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    StyledWrapper,
    {
      className: _constants.classPrefix + '_wrapper ' + className,
      id: id
    },
    children
  );
};

Wrapper.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string
};
Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: ''
};

exports.default = Wrapper;