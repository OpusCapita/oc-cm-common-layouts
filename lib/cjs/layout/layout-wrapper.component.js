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

Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: ''
};

exports.default = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXlvdXQvbGF5b3V0LXdyYXBwZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7O0FBREE7OztBQUdBLElBQU1BLGdCQUFnQkMsMkJBQU9DLEdBQXZCLGlCQUFOO0FBSUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJDLFNBQWpCLFFBQWlCQSxTQUFqQjtBQUFBLFNBQ2Q7QUFBQyxpQkFBRDtBQUFBO0FBQ0UsaUJBQWNDLHNCQUFkLGlCQUFxQ0QsU0FEdkM7QUFFRSxVQUFJRDtBQUZOO0FBSUdEO0FBSkgsR0FEYztBQUFBLENBQWhCOztBQWNBRCxRQUFRSyxZQUFSLEdBQXVCO0FBQ3JCSixZQUFVSyxTQURXO0FBRXJCSixNQUFJLEVBRmlCO0FBR3JCQyxhQUFXO0FBSFUsQ0FBdkI7O2tCQU1lSCxPIiwiZmlsZSI6ImxheW91dC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7XG4gIGhlaWdodDoxMDB2aDtcbmA7XG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4sIGlkLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8U3R5bGVkV3JhcHBlclxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3dyYXBwZXIgJHtjbGFzc05hbWV9YH1cbiAgICBpZD17aWR9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkV3JhcHBlcj5cbik7XG5cbldyYXBwZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXX0=