'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var HeaderSection = _styledComponents2.default.section(_templateObject, _constants.theme.header.height);
var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id;
  return _react2.default.createElement(
    _.Primitive.Header,
    { id: id, className: _constants.classPrefix + '_header ' + className },
    _react2.default.createElement(
      HeaderSection,
      { className: _constants.classPrefix + '_header_section left' },
      left
    ),
    _react2.default.createElement(
      HeaderSection,
      { className: _constants.classPrefix + '_header_section center' },
      center
    ),
    _react2.default.createElement(
      HeaderSection,
      { className: _constants.classPrefix + '_header_section right' },
      right
    )
  );
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: ''
};

exports.default = HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsIkhlYWRlckJhc2ljIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiY2xhc3NOYW1lIiwiaWQiLCJjbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7O0FBRkE7OztBQUlBLElBQU1BLGdCQUFnQkMsMkJBQU9DLE9BQXZCLGtCQUlNQyxpQkFBTUMsTUFBTixDQUFhQyxNQUpuQixDQUFOO0FBWUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLE1BQ1pDLE1BRFksUUFDWkEsTUFEWTtBQUFBLE1BQ0pDLEtBREksUUFDSkEsS0FESTtBQUFBLE1BQ0dDLFNBREgsUUFDR0EsU0FESDtBQUFBLE1BQ2NDLEVBRGQsUUFDY0EsRUFEZDtBQUFBLFNBR2xCO0FBQUMsZUFBRCxDQUFXLE1BQVg7QUFBQSxNQUFrQixJQUFJQSxFQUF0QixFQUEwQixXQUFjQyxzQkFBZCxnQkFBb0NGLFNBQTlEO0FBQ0U7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY0Usc0JBQWQseUJBQWY7QUFBaUVMO0FBQWpFLEtBREY7QUFFRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSxXQUFjSyxzQkFBZCwyQkFBZjtBQUFtRUo7QUFBbkUsS0FGRjtBQUdFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNJLHNCQUFkLDBCQUFmO0FBQWtFSDtBQUFsRTtBQUhGLEdBSGtCO0FBQUEsQ0FBcEI7O0FBa0JBSCxZQUFZTyxZQUFaLEdBQTJCO0FBQ3pCTixRQUFNTyxTQURtQjtBQUV6Qk4sVUFBUU0sU0FGaUI7QUFHekJMLFNBQU9LLFNBSGtCO0FBSXpCSixhQUFXLEVBSmM7QUFLekJDLE1BQUk7QUFMcUIsQ0FBM0I7O2tCQVFlTCxXIiwiZmlsZSI6ImhlYWRlci1iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuY29uc3QgSGVhZGVyQmFzaWMgPSAoe1xuICBsZWZ0LCBjZW50ZXIsIHJpZ2h0LCBjbGFzc05hbWUsIGlkLFxufSkgPT4gKFxuICA8UHJpbWl0aXZlLkhlYWRlciBpZD17aWR9IGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlciAke2NsYXNzTmFtZX1gfT5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBsZWZ0YH0+e2xlZnR9PC9IZWFkZXJTZWN0aW9uPlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGNlbnRlcmB9PntjZW50ZXJ9PC9IZWFkZXJTZWN0aW9uPlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIHJpZ2h0YH0+e3JpZ2h0fTwvSGVhZGVyU2VjdGlvbj5cbiAgPC9QcmltaXRpdmUuSGVhZGVyPlxuKTtcblxuSGVhZGVyQmFzaWMucHJvcFR5cGVzID0ge1xuICBsZWZ0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXNpYztcbiJdfQ==