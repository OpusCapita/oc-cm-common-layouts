'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  display: flex;\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 auto;\n  '], ['\n  flex: 1 1 auto;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _contentCardHeader = require('./content-card-header.component');

var _contentCardHeader2 = _interopRequireDefault(_contentCardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Card = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, _constants.theme.card.backgroundColor, function (props) {
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents2.default.div(_templateObject2);

var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      title = _ref.title,
      height = _ref.height,
      icon = _ref.icon;

  var cardClassPrefix = _constants.classPrefix + '_card';
  return _react2.default.createElement(
    Card,
    {
      height: height,
      className: '' + cardClassPrefix,
      isLastItem: isLastItem
    },
    title && _react2.default.createElement(_contentCardHeader2.default, { title: title, icon: icon }),
    _react2.default.createElement(
      CardContent,
      { className: cardClassPrefix + '_content' },
      children
    )
  );
};

ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJDb250ZW50Q2FyZCIsImNoaWxkcmVuIiwidGl0bGUiLCJpY29uIiwiY2FyZENsYXNzUHJlZml4IiwiY2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxPQUFPQywyQkFBT0MsR0FBZCxrQkFFT0MsaUJBQU1DLFdBRmIsRUFHVUQsaUJBQU1FLElBQU4sQ0FBV0MsZUFIckIsRUFJYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJMLGlCQUFNQyxXQUF2QztBQUFBLENBSmIsRUFLSTtBQUFBLFNBQVVHLE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUxKLEVBT007QUFBQSxTQUFVRCxNQUFNRSxNQUFOLEdBQWVGLE1BQU1FLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FQTixDQUFOOztBQVVBLElBQU1DLGNBQWNULDJCQUFPQyxHQUFyQixrQkFBTjs7QUFJQSxJQUFNUyxjQUFjLFNBQWRBLFdBQWMsT0FNZDtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpKLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpLLEtBR0ksUUFISkEsS0FHSTtBQUFBLE1BRkpKLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpLLElBQ0ksUUFESkEsSUFDSTs7QUFDSixNQUFNQyxrQkFBcUJDLHNCQUFyQixVQUFOO0FBQ0EsU0FDRTtBQUFDLFFBQUQ7QUFBQTtBQUNFLGNBQVFQLE1BRFY7QUFFRSxzQkFBY00sZUFGaEI7QUFHRSxrQkFBWVA7QUFIZDtBQUtHSyxhQUFTLDhCQUFDLDJCQUFELElBQVksT0FBT0EsS0FBbkIsRUFBMEIsTUFBTUMsSUFBaEMsR0FMWjtBQU1FO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNDLGVBQWQsYUFBYjtBQUF1REg7QUFBdkQ7QUFORixHQURGO0FBVUQsQ0FsQkQ7O0FBOEJBRCxZQUFZTSxZQUFaLEdBQTJCO0FBQ3pCTCxZQUFVTSxTQURlO0FBRXpCVixjQUFZLEtBRmE7QUFHekJLLFNBQU9LLFNBSGtCO0FBSXpCVCxVQUFRUyxTQUppQjtBQUt6QkosUUFBTUk7QUFMbUIsQ0FBM0I7O2tCQVFlUCxXIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNhcmQuYmFja2dyb3VuZENvbG9yfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCl9OyBcbiAgZmxleDogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJyl9O1xuICBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBgO1xuXG5jb25zdCBDb250ZW50Q2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxuICBpc0xhc3RJdGVtLFxuICB0aXRsZSxcbiAgaGVpZ2h0LFxuICBpY29uLFxufSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9YH1cbiAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgPlxuICAgICAge3RpdGxlICYmIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gaWNvbj17aWNvbn0gLz59XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmQ7XG4iXX0=