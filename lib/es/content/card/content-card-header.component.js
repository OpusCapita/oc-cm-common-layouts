var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n'], ['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-bottom: ', ';\n'], ['\n  margin-bottom: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import * as Primitive from '../../primitives';

var CardIcon = Primitive.BorderlessButton.extend(_templateObject, theme.card.headerHeight);

var CardTitle = Primitive.Subtitle.extend(_templateObject2, theme.gutterWidth);

var CardHeader = styled.header(_templateObject3, theme.card.headerHeight);

var ContentCardHeader = function ContentCardHeader(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick;

  var cardClassPrefix = classPrefix + '_card';
  return React.createElement(
    CardHeader,
    { className: cardClassPrefix + '_header' },
    React.createElement(
      CardTitle,
      null,
      title
    ),
    icon && React.createElement(
      CardIcon,
      { disabled: !onIconClick },
      icon
    )
  );
};

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined
};

export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImNhcmQiLCJoZWFkZXJIZWlnaHQiLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsImd1dHRlcldpZHRoIiwiQ2FyZEhlYWRlciIsImhlYWRlciIsIkNvbnRlbnRDYXJkSGVhZGVyIiwidGl0bGUiLCJpY29uIiwib25JY29uQ2xpY2siLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7O0FBRUEsSUFBTUMsV0FBV0QsVUFBVUUsZ0JBQVYsQ0FBMkJDLE1BQXRDLGtCQUNNSixNQUFNSyxJQUFOLENBQVdDLFlBRGpCLENBQU47O0FBTUEsSUFBTUMsWUFBWU4sVUFBVU8sUUFBVixDQUFtQkosTUFBL0IsbUJBQ2FKLE1BQU1TLFdBRG5CLENBQU47O0FBSUEsSUFBTUMsYUFBYVosT0FBT2EsTUFBcEIsbUJBQ01YLE1BQU1LLElBQU4sQ0FBV0MsWUFEakIsQ0FBTjs7QUFNQSxJQUFNTSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFrQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDMUQsTUFBTUMsa0JBQXFCakIsV0FBckIsVUFBTjtBQUNBLFNBQ0U7QUFBQyxjQUFEO0FBQUEsTUFBWSxXQUFjaUIsZUFBZCxZQUFaO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFBWUg7QUFBWixLQURGO0FBRUdDLFlBQVE7QUFBQyxjQUFEO0FBQUEsUUFBVSxVQUFVLENBQUNDLFdBQXJCO0FBQW1DRDtBQUFuQztBQUZYLEdBREY7QUFNRCxDQVJEOztBQWVBRixrQkFBa0JLLFlBQWxCLEdBQWlDO0FBQy9CSixTQUFPSyxTQUR3QjtBQUUvQkosUUFBTUksU0FGeUI7QUFHL0JILGVBQWFHO0FBSGtCLENBQWpDOztBQU1BLGVBQWVOLGlCQUFmIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IFByaW1pdGl2ZS5TdWJ0aXRsZS5leHRlbmRgXG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogJHt0aGVtZS5jYXJkLmhlYWRlckhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBDb250ZW50Q2FyZEhlYWRlciA9ICh7IHRpdGxlLCBpY29uLCBvbkljb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICA8Q2FyZFRpdGxlPnt0aXRsZX08L0NhcmRUaXRsZT5cbiAgICAgIHtpY29uICYmIDxDYXJkSWNvbiBkaXNhYmxlZD17IW9uSWNvbkNsaWNrfT57aWNvbn08L0NhcmRJY29uPn1cbiAgICA8L0NhcmRIZWFkZXI+XG4gICk7XG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmRIZWFkZXI7XG4iXX0=