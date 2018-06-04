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

var _primitives = require('../primitives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var HeaderSection = _styledComponents2.default.section(_templateObject, _constants.theme.header.height);
var LayoutBasicHeader = function LayoutBasicHeader(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right;
  return _react2.default.createElement(
    _primitives.PrimitiveHeader,
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

LayoutBasicHeader.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined
};

exports.default = LayoutBasicHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LWJhc2ljLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwiaGVhZGVyIiwiaGVpZ2h0IiwiTGF5b3V0QmFzaWNIZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFLQSxJQUFNQSxnQkFBZ0IsMkJBQU9DLE9BQXZCLGtCQUlNLGlCQUFNQyxNQUFOLENBQWFDLE1BSm5CLENBQU47QUFZQSxJQUFNQyxvQkFBb0IsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLE1BQVQsUUFBU0EsTUFBVDtBQUFBLE1BQWlCQyxLQUFqQixRQUFpQkEsS0FBakI7QUFBQSxTQUN4QjtBQUFBO0FBQUEsTUFBaUIsNkNBQWpCO0FBQ0U7QUFBQyxtQkFBRDtBQUFBLFFBQWUsMERBQWY7QUFBaUVGO0FBQWpFLEtBREY7QUFFRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSw0REFBZjtBQUFtRUM7QUFBbkUsS0FGRjtBQUdFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLDJEQUFmO0FBQWtFQztBQUFsRTtBQUhGLEdBRHdCO0FBQUEsQ0FBMUI7O0FBY0FILGtCQUFrQkksWUFBbEIsR0FBaUM7QUFDL0JILFFBQU1JLFNBRHlCO0FBRS9CSCxVQUFRRyxTQUZ1QjtBQUcvQkYsU0FBT0U7QUFId0IsQ0FBakM7O2tCQU1lTCxpQiIsImZpbGUiOiJsYXlvdXQtYmFzaWMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZUhlYWRlciB9IGZyb20gJy4uL3ByaW1pdGl2ZXMnO1xuXG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgJi5jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5jb25zdCBMYXlvdXRCYXNpY0hlYWRlciA9ICh7IGxlZnQsIGNlbnRlciwgcmlnaHQgfSkgPT4gKFxuICA8UHJpbWl0aXZlSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfT57bGVmdH08L0hlYWRlclNlY3Rpb24+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gY2VudGVyYH0+e2NlbnRlcn08L0hlYWRlclNlY3Rpb24+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfT57cmlnaHR9PC9IZWFkZXJTZWN0aW9uPlxuICA8L1ByaW1pdGl2ZUhlYWRlcj5cbik7XG5cbkxheW91dEJhc2ljSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkxheW91dEJhc2ljSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEJhc2ljSGVhZGVyO1xuIl19