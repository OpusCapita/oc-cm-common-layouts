'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _layoutCardHeader = require('./layout-card-header.component');

var _layoutCardHeader2 = _interopRequireDefault(_layoutCardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

// App imports


var Card = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, _constants.theme.card.backgroundColor, function (props) {
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var LayoutCard = function LayoutCard(_ref) {
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
    title && _react2.default.createElement(_layoutCardHeader2.default, { title: title, icon: icon }),
    _react2.default.createElement(
      'div',
      { className: cardClassPrefix + '_content' },
      children
    )
  );
};

LayoutCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined
};

exports.default = LayoutCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvbGF5b3V0LWNhcmQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDYXJkIiwiZGl2IiwiZ3V0dGVyV2lkdGgiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwiaGVpZ2h0IiwiTGF5b3V0Q2FyZCIsImNoaWxkcmVuIiwidGl0bGUiLCJpY29uIiwiY2FyZENsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7OzBGQVBBOztBQUtBOzs7QUFJQSxJQUFNQSxPQUFPLDJCQUFPQyxHQUFkLGtCQUNPLGlCQUFNQyxXQURiLEVBRVUsaUJBQU1DLElBQU4sQ0FBV0MsZUFGckIsRUFHYTtBQUFBLFNBQVNDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUIsaUJBQU1KLFdBQXRDO0FBQUEsQ0FIYixFQUlJO0FBQUEsU0FBU0csTUFBTUMsVUFBTixHQUFtQixVQUFuQixHQUFnQyxVQUF6QztBQUFBLENBSkosRUFNTTtBQUFBLFNBQVNELE1BQU1FLE1BQU4sR0FBZUYsTUFBTUUsTUFBckIsR0FBOEIsTUFBdkM7QUFBQSxDQU5OLENBQU47O0FBVUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLE9BQW1EO0FBQUEsTUFBaERDLFFBQWdELFFBQWhEQSxRQUFnRDtBQUFBLE1BQXRDSCxVQUFzQyxRQUF0Q0EsVUFBc0M7QUFBQSxNQUExQkksS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJILE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhJLElBQVcsUUFBWEEsSUFBVzs7QUFDcEUsTUFBTUMsa0RBQU47QUFDQSxTQUNFO0FBQUMsUUFBRDtBQUFBO0FBQ0UsY0FBUUwsTUFEVjtBQUVFLHNCQUFjSyxlQUZoQjtBQUdFLGtCQUFZTjtBQUhkO0FBS0dJLGFBQVMsNERBQVksT0FBT0EsS0FBbkIsRUFBMEIsTUFBTUMsSUFBaEMsR0FMWjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQWNDLGVBQWQsYUFBTDtBQUErQ0g7QUFBL0M7QUFORixHQURGO0FBVUQsQ0FaRDs7QUF3QkFELFdBQVdLLFlBQVgsR0FBMEI7QUFDeEJKLFlBQVVLLFNBRGM7QUFFeEJSLGNBQVksS0FGWTtBQUd4QkksU0FBT0ksU0FIaUI7QUFJeEJQLFVBQVFPLFNBSmdCO0FBS3hCSCxRQUFNRztBQUxrQixDQUExQjs7a0JBUWVOLFUiLCJmaWxlIjoibGF5b3V0LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vbGF5b3V0LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jYXJkLmJhY2tncm91bmRDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aH07IFxuICBmbGV4OiAke3Byb3BzID0+IHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJ307XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nfTtcbiAgYDtcblxuXG5jb25zdCBMYXlvdXRDYXJkID0gKHsgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIHRpdGxlLCBoZWlnaHQsIGljb24gfSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9YH1cbiAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgPlxuICAgICAge3RpdGxlICYmIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gaWNvbj17aWNvbn0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbkxheW91dENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuTGF5b3V0Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Q2FyZDtcbiJdfQ==