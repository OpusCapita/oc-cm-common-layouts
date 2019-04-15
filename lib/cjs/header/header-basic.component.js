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

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var HeaderSection = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = (0, _styledComponents2.default)(HeaderSection)(_templateObject2);

var SideSection = (0, _styledComponents2.default)(HeaderSection)(_templateObject3, function (props) {
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
    _index.Primitive.Header,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiQ2VudGVyU2VjdGlvbiIsIlNpZGVTZWN0aW9uIiwiYmFzaXMiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImNsYXNzTmFtZSIsImlkIiwic2lkZVNlY3Rpb25CYXNpcyIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFJQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxPQUF2QixrQkFHTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUhOLENBQU47O0FBWUEsSUFBTUMsZ0JBQWdCLGdDQUFPUCxhQUFQLENBQWhCLGtCQUFOOztBQUlBLElBQU1RLGNBQWMsZ0NBQU9SLGFBQVAsQ0FBZCxtQkFDVTtBQUFBLFNBQVNHLE1BQU1NLEtBQWY7QUFBQSxDQURWLENBQU47O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLE1BQ1pDLE1BRFksUUFDWkEsTUFEWTtBQUFBLE1BQ0pDLEtBREksUUFDSkEsS0FESTtBQUFBLE1BQ0dDLFNBREgsUUFDR0EsU0FESDtBQUFBLE1BQ2NDLEVBRGQsUUFDY0EsRUFEZDtBQUFBLE1BQ2tCQyxnQkFEbEIsUUFDa0JBLGdCQURsQjtBQUFBLFNBR2xCO0FBQUMsb0JBQUQsQ0FBVyxNQUFYO0FBQUEsTUFBa0IsSUFBSUQsRUFBdEIsRUFBMEIsV0FBY0Usc0JBQWQsZ0JBQW9DSCxTQUE5RDtBQUNFO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNHLHNCQUFkLHlCQUFiLEVBQThELE9BQU9ELGdCQUFyRTtBQUF3Rkw7QUFBeEYsS0FERjtBQUVFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNNLHNCQUFkLDJCQUFmO0FBQW1FTDtBQUFuRSxLQUZGO0FBR0U7QUFBQyxpQkFBRDtBQUFBLFFBQWEsV0FBY0ssc0JBQWQsMEJBQWIsRUFBK0QsT0FBT0QsZ0JBQXRFO0FBQXlGSDtBQUF6RjtBQUhGLEdBSGtCO0FBQUEsQ0FBcEI7O0FBbUJBSCxZQUFZUSxZQUFaLEdBQTJCO0FBQ3pCUCxRQUFNUSxTQURtQjtBQUV6QlAsVUFBUU8sU0FGaUI7QUFHekJOLFNBQU9NLFNBSGtCO0FBSXpCTCxhQUFXLEVBSmM7QUFLekJDLE1BQUksRUFMcUI7QUFNekJDLG9CQUFrQjtBQU5PLENBQTNCOztrQkFTZU4sVyIsImZpbGUiOiJoZWFkZXItYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLi9pbmRleCc7XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5jb25zdCBDZW50ZXJTZWN0aW9uID0gc3R5bGVkKEhlYWRlclNlY3Rpb24pYFxuICBmbGV4LWdyb3c6IDE7XG5gO1xuXG5jb25zdCBTaWRlU2VjdGlvbiA9IHN0eWxlZChIZWFkZXJTZWN0aW9uKWBcbiAgZmxleC1iYXNpczogJHtwcm9wcyA9PiBwcm9wcy5iYXNpc307XG4gIGZsZXgtc2hyaW5rOiAxO1xuYDtcblxuY29uc3QgSGVhZGVyQmFzaWMgPSAoe1xuICBsZWZ0LCBjZW50ZXIsIHJpZ2h0LCBjbGFzc05hbWUsIGlkLCBzaWRlU2VjdGlvbkJhc2lzLFxufSkgPT4gKFxuICA8UHJpbWl0aXZlLkhlYWRlciBpZD17aWR9IGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlciAke2NsYXNzTmFtZX1gfT5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gbGVmdGB9IGJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfT57bGVmdH08L1NpZGVTZWN0aW9uPlxuICAgIDxDZW50ZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGNlbnRlcmB9PntjZW50ZXJ9PC9DZW50ZXJTZWN0aW9uPlxuICAgIDxTaWRlU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiByaWdodGB9IGJhc2lzPXtzaWRlU2VjdGlvbkJhc2lzfT57cmlnaHR9PC9TaWRlU2VjdGlvbj5cbiAgPC9QcmltaXRpdmUuSGVhZGVyPlxuKTtcblxuSGVhZGVyQmFzaWMucHJvcFR5cGVzID0ge1xuICBsZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjZW50ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaWRlU2VjdGlvbkJhc2lzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuXG5IZWFkZXJCYXNpYy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxlZnQ6IHVuZGVmaW5lZCxcbiAgY2VudGVyOiB1bmRlZmluZWQsXG4gIHJpZ2h0OiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlkOiAnJyxcbiAgc2lkZVNlY3Rpb25CYXNpczogJzIwMHB4Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckJhc2ljO1xuIl19