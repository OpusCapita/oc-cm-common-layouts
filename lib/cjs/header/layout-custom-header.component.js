'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _primitives = require('../primitives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Header = _primitives.PrimitiveHeader.extend(_templateObject);

var LayoutCustomHeader = function LayoutCustomHeader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Header,
    { className: _constants.classPrefix + '_header' },
    children
  );
};

LayoutCustomHeader.defaultProps = {
  children: null
};

exports.default = LayoutCustomHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LWN1c3RvbS1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJleHRlbmQiLCJMYXlvdXRDdXN0b21IZWFkZXIiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFJQSxJQUFNQSxTQUFTLDRCQUFnQkMsTUFBekIsaUJBQU47O0FBR0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUN6QjtBQUFDLFVBQUQ7QUFBQSxNQUFRLDZDQUFSO0FBQTZDQTtBQUE3QyxHQUR5QjtBQUFBLENBQTNCOztBQVFBRCxtQkFBbUJFLFlBQW5CLEdBQWtDO0FBQ2hDRCxZQUFVO0FBRHNCLENBQWxDOztrQkFJZUQsa0IiLCJmaWxlIjoibGF5b3V0LWN1c3RvbS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlSGVhZGVyIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IEhlYWRlciA9IFByaW1pdGl2ZUhlYWRlci5leHRlbmRgXG5gO1xuXG5jb25zdCBMYXlvdXRDdXN0b21IZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyYH0+e2NoaWxkcmVufTwvSGVhZGVyPlxuKTtcblxuTGF5b3V0Q3VzdG9tSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuTGF5b3V0Q3VzdG9tSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDdXN0b21IZWFkZXI7XG4iXX0=