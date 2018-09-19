'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  flex-basis: ', ';\n  flex-shrink: 1;\n'], ['\n  flex-basis: ', ';\n  flex-shrink: 1;\n']);

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


var HeaderSection = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = HeaderSection.extend(_templateObject2);

var SideSection = HeaderSection.extend(_templateObject3, function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return _react2.default.createElement(
    _.Primitive.Header,
    { id: id, className: _constants.classPrefix + '_header ' + className },
    _react2.default.createElement(
      SideSection,
      { className: _constants.classPrefix + '_header_section left', basis: sideSectionBasis },
      left
    ),
    _react2.default.createElement(
      CenterSection,
      { className: _constants.classPrefix + '_header_section center' },
      center
    ),
    _react2.default.createElement(
      SideSection,
      { className: _constants.classPrefix + '_header_section right', basis: sideSectionBasis },
      right
    )
  );
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px'
};

exports.default = HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiQ2VudGVyU2VjdGlvbiIsImV4dGVuZCIsIlNpZGVTZWN0aW9uIiwiYmFzaXMiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImNsYXNzTmFtZSIsImlkIiwic2lkZVNlY3Rpb25CYXNpcyIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFJQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxPQUF2QixrQkFHTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUhOLENBQU47O0FBWUEsSUFBTUMsZ0JBQWdCUCxjQUFjUSxNQUE5QixrQkFBTjs7QUFJQSxJQUFNQyxjQUFjVCxjQUFjUSxNQUE1QixtQkFDVTtBQUFBLFNBQVNMLE1BQU1PLEtBQWY7QUFBQSxDQURWLENBQU47O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLE1BQ1pDLE1BRFksUUFDWkEsTUFEWTtBQUFBLE1BQ0pDLEtBREksUUFDSkEsS0FESTtBQUFBLE1BQ0dDLFNBREgsUUFDR0EsU0FESDtBQUFBLE1BQ2NDLEVBRGQsUUFDY0EsRUFEZDtBQUFBLE1BQ2tCQyxnQkFEbEIsUUFDa0JBLGdCQURsQjtBQUFBLFNBR2xCO0FBQUMsZUFBRCxDQUFXLE1BQVg7QUFBQSxNQUFrQixJQUFJRCxFQUF0QixFQUEwQixXQUFjRSxzQkFBZCxnQkFBb0NILFNBQTlEO0FBQ0U7QUFBQyxpQkFBRDtBQUFBLFFBQWEsV0FBY0csc0JBQWQseUJBQWIsRUFBOEQsT0FBT0QsZ0JBQXJFO0FBQXdGTDtBQUF4RixLQURGO0FBRUU7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY00sc0JBQWQsMkJBQWY7QUFBbUVMO0FBQW5FLEtBRkY7QUFHRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjSyxzQkFBZCwwQkFBYixFQUErRCxPQUFPRCxnQkFBdEU7QUFBeUZIO0FBQXpGO0FBSEYsR0FIa0I7QUFBQSxDQUFwQjs7QUFtQkFILFlBQVlRLFlBQVosR0FBMkI7QUFDekJQLFFBQU1RLFNBRG1CO0FBRXpCUCxVQUFRTyxTQUZpQjtBQUd6Qk4sU0FBT00sU0FIa0I7QUFJekJMLGFBQVcsRUFKYztBQUt6QkMsTUFBSSxFQUxxQjtBQU16QkMsb0JBQWtCO0FBTk8sQ0FBM0I7O2tCQVNlTixXIiwiZmlsZSI6ImhlYWRlci1iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gJy4uLyc7XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5jb25zdCBDZW50ZXJTZWN0aW9uID0gSGVhZGVyU2VjdGlvbi5leHRlbmRgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVTZWN0aW9uID0gSGVhZGVyU2VjdGlvbi5leHRlbmRgXG4gIGZsZXgtYmFzaXM6ICR7cHJvcHMgPT4gcHJvcHMuYmFzaXN9O1xuICBmbGV4LXNocmluazogMTtcbmA7XG5cbmNvbnN0IEhlYWRlckJhc2ljID0gKHtcbiAgbGVmdCwgY2VudGVyLCByaWdodCwgY2xhc3NOYW1lLCBpZCwgc2lkZVNlY3Rpb25CYXNpcyxcbn0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e2xlZnR9PC9TaWRlU2VjdGlvbj5cbiAgICA8Q2VudGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvQ2VudGVyU2VjdGlvbj5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e3JpZ2h0fTwvU2lkZVNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2lkZVNlY3Rpb25CYXNpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIHNpZGVTZWN0aW9uQmFzaXM6ICcyMDBweCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXNpYztcbiJdfQ==