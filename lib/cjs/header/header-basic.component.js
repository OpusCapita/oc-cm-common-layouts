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
      right = _ref.right;
  return _react2.default.createElement(
    _.Primitive.Header,
    { className: _constants.classPrefix + '_header' },
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
  right: undefined
};

exports.default = HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWlnaHQiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7O0FBRkE7OztBQUlBLElBQU1BLGdCQUFnQiwyQkFBT0MsT0FBdkIsa0JBSU0saUJBQU1DLE1BQU4sQ0FBYUMsTUFKbkIsQ0FBTjtBQVlBLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLE1BQVQsUUFBU0EsTUFBVDtBQUFBLE1BQWlCQyxLQUFqQixRQUFpQkEsS0FBakI7QUFBQSxTQUNsQjtBQUFBLGdCQUFXLE1BQVg7QUFBQSxNQUFrQiw2Q0FBbEI7QUFDRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSwwREFBZjtBQUFpRUY7QUFBakUsS0FERjtBQUVFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLDREQUFmO0FBQW1FQztBQUFuRSxLQUZGO0FBR0U7QUFBQyxtQkFBRDtBQUFBLFFBQWUsMkRBQWY7QUFBa0VDO0FBQWxFO0FBSEYsR0FEa0I7QUFBQSxDQUFwQjs7QUFjQUgsWUFBWUksWUFBWixHQUEyQjtBQUN6QkgsUUFBTUksU0FEbUI7QUFFekJILFVBQVFHLFNBRmlCO0FBR3pCRixTQUFPRTtBQUhrQixDQUEzQjs7a0JBTWVMLFciLCJmaWxlIjoiaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gJy4uLyc7XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgJi5jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5jb25zdCBIZWFkZXJCYXNpYyA9ICh7IGxlZnQsIGNlbnRlciwgcmlnaHQgfSkgPT4gKFxuICA8UHJpbWl0aXZlLkhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBsZWZ0YH0+e2xlZnR9PC9IZWFkZXJTZWN0aW9uPlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGNlbnRlcmB9PntjZW50ZXJ9PC9IZWFkZXJTZWN0aW9uPlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIHJpZ2h0YH0+e3JpZ2h0fTwvSGVhZGVyU2VjdGlvbj5cbiAgPC9QcmltaXRpdmUuSGVhZGVyPlxuKTtcblxuSGVhZGVyQmFzaWMucHJvcFR5cGVzID0ge1xuICBsZWZ0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFzaWM7XG4iXX0=