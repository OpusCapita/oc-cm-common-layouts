'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;\n  height:100vh;\n'], ['\n  width:100vw;\n  height:100vh;\n']);

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
  var children = _ref.children;
  return _react2.default.createElement(
    StyledWrapper,
    { className: _constants.classPrefix + '_wrapper' },
    children
  );
};

Wrapper.defaultProps = {
  children: undefined
};

exports.default = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXlvdXQvbGF5b3V0LXdyYXBwZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRXcmFwcGVyIiwiZGl2IiwiV3JhcHBlciIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsZ0JBQWdCLDJCQUFPQyxHQUF2QixpQkFBTjtBQUlBLElBQU1DLFVBQVUsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2Q7QUFBQyxpQkFBRDtBQUFBLE1BQWUsOENBQWY7QUFBcURBO0FBQXJELEdBRGM7QUFBQSxDQUFoQjs7QUFPQUQsUUFBUUUsWUFBUixHQUF1QjtBQUNyQkQsWUFBVUU7QUFEVyxDQUF2Qjs7a0JBSWVILE8iLCJmaWxlIjoibGF5b3V0LXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDoxMDB2dztcbiAgaGVpZ2h0OjEwMHZoO1xuYDtcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxTdHlsZWRXcmFwcGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3dyYXBwZXJgfT57Y2hpbGRyZW59PC9TdHlsZWRXcmFwcGVyPlxuKTtcblxuV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5XcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXX0=