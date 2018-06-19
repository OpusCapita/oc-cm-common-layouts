'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsiveNavbar = require('@opuscapita/react-responsive-navbar');

var _reactResponsiveNavbar2 = _interopRequireDefault(_reactResponsiveNavbar);

var _constants = require('../constants');

var _primitives = require('../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var ProductTitle = Primitive.Title.extend(_templateObject, _constants.theme.gutterWidth);

var HeaderNavigation = function HeaderNavigation(_ref) {
  var onSelect = _ref.onSelect,
      title = _ref.title,
      list = _ref.list,
      activeKey = _ref.activeKey,
      showNavItemBorder = _ref.showNavItemBorder,
      showNavItemTooltip = _ref.showNavItemTooltip;
  return (// eslint-disable-line
    _react2.default.createElement(
      Primitive.Header,
      { className: _constants.classPrefix + '_product-header' },
      title && _react2.default.createElement(
        ProductTitle,
        null,
        title
      ),
      !!list.length && _react2.default.createElement(_reactResponsiveNavbar2.default, {
        activeKey: activeKey,
        list: list,
        showNavItemBorder: showNavItemBorder,
        showNavItemTooltip: showNavItemTooltip,
        onSelect: onSelect
      })
    )
  );
};

HeaderNavigation.defaultProps = {
  title: null,
  activeKey: 0,
  list: [],
  showNavItemBorder: false,
  showNavItemTooltip: true,
  onSelect: null
};

exports.default = HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLXRhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiUHJvZHVjdFRpdGxlIiwiVGl0bGUiLCJleHRlbmQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiSGVhZGVyTmF2aWdhdGlvbiIsIm9uU2VsZWN0IiwidGl0bGUiLCJsaXN0IiwiYWN0aXZlS2V5Iiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJjbGFzc1ByZWZpeCIsImxlbmd0aCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7QUFGWjs7O0FBSUEsSUFBTUMsZUFBZUQsVUFBVUUsS0FBVixDQUFnQkMsTUFBL0Isa0JBQ1lDLGlCQUFNQyxXQURsQixDQUFOOztBQUlBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsTUFBb0JDLElBQXBCLFFBQW9CQSxJQUFwQjtBQUFBLE1BQTBCQyxTQUExQixRQUEwQkEsU0FBMUI7QUFBQSxNQUFxQ0MsaUJBQXJDLFFBQXFDQSxpQkFBckM7QUFBQSxNQUF3REMsa0JBQXhELFFBQXdEQSxrQkFBeEQ7QUFBQSxTQUFtRjtBQUMxRztBQUFDLGVBQUQsQ0FBVyxNQUFYO0FBQUEsUUFBa0IsV0FBY0Msc0JBQWQsb0JBQWxCO0FBQ0dMLGVBQVM7QUFBQyxvQkFBRDtBQUFBO0FBQWVBO0FBQWYsT0FEWjtBQUVHLE9BQUMsQ0FBQ0MsS0FBS0ssTUFBUCxJQUNELDhCQUFDLCtCQUFEO0FBQ0UsbUJBQVdKLFNBRGI7QUFFRSxjQUFNRCxJQUZSO0FBR0UsMkJBQW1CRSxpQkFIckI7QUFJRSw0QkFBb0JDLGtCQUp0QjtBQUtFLGtCQUFVTDtBQUxaO0FBSEY7QUFEdUI7QUFBQSxDQUF6Qjs7QUF1QkFELGlCQUFpQlMsWUFBakIsR0FBZ0M7QUFDOUJQLFNBQU8sSUFEdUI7QUFFOUJFLGFBQVcsQ0FGbUI7QUFHOUJELFFBQU0sRUFId0I7QUFJOUJFLHFCQUFtQixLQUpXO0FBSzlCQyxzQkFBb0IsSUFMVTtBQU05QkwsWUFBVTtBQU5vQixDQUFoQzs7a0JBU2VELGdCIiwiZmlsZSI6ImhlYWRlci10YWItbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZXNwb25zaXZlTmF2YmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXJlc3BvbnNpdmUtbmF2YmFyJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBQcm9kdWN0VGl0bGUgPSBQcmltaXRpdmUuVGl0bGUuZXh0ZW5kYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgSGVhZGVyTmF2aWdhdGlvbiA9ICh7IG9uU2VsZWN0LCB0aXRsZSwgbGlzdCwgYWN0aXZlS2V5LCBzaG93TmF2SXRlbUJvcmRlciwgc2hvd05hdkl0ZW1Ub29sdGlwIH0pID0+ICggLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICA8UHJpbWl0aXZlLkhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9wcm9kdWN0LWhlYWRlcmB9PlxuICAgIHt0aXRsZSAmJiA8UHJvZHVjdFRpdGxlPnt0aXRsZX08L1Byb2R1Y3RUaXRsZT59XG4gICAgeyEhbGlzdC5sZW5ndGggJiZcbiAgICA8UmVzcG9uc2l2ZU5hdmJhclxuICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICBsaXN0PXtsaXN0fVxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXI9e3Nob3dOYXZJdGVtQm9yZGVyfVxuICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgLz59XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlck5hdmlnYXRpb24ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgc2hvd05hdkl0ZW1Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaG93TmF2SXRlbVRvb2x0aXA6IFByb3BUeXBlcy5ib29sLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5IZWFkZXJOYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIGFjdGl2ZUtleTogMCxcbiAgbGlzdDogW10sXG4gIHNob3dOYXZJdGVtQm9yZGVyOiBmYWxzZSxcbiAgc2hvd05hdkl0ZW1Ub29sdGlwOiB0cnVlLFxuICBvblNlbGVjdDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XG4iXX0=