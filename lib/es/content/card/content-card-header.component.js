var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n'], ['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-bottom: ', ';\n'], ['\n  margin-bottom: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImNhcmQiLCJoZWFkZXJIZWlnaHQiLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsImd1dHRlcldpZHRoIiwiQ2FyZEhlYWRlciIsImhlYWRlciIsIkNvbnRlbnRDYXJkSGVhZGVyIiwidGl0bGUiLCJpY29uIiwib25JY29uQ2xpY2siLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7O0FBRUEsSUFBTUMsV0FBV0QsVUFBVUUsZ0JBQVYsQ0FBMkJDLE1BQXRDLGtCQUNNSixNQUFNSyxJQUFOLENBQVdDLFlBRGpCLENBQU47O0FBTUEsSUFBTUMsWUFBWU4sVUFBVU8sUUFBVixDQUFtQkosTUFBL0IsbUJBQ2FKLE1BQU1TLFdBRG5CLENBQU47O0FBSUEsSUFBTUMsYUFBYVosT0FBT2EsTUFBcEIsbUJBQ01YLE1BQU1LLElBQU4sQ0FBV0MsWUFEakIsQ0FBTjs7QUFNQSxJQUFNTSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUFrQztBQUFBLE1BQS9CQyxLQUErQixRQUEvQkEsS0FBK0I7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFDMUQsTUFBTUMsa0JBQXFCakIsV0FBckIsVUFBTjtBQUNBLFNBQ0U7QUFBQyxjQUFEO0FBQUEsTUFBWSxXQUFjaUIsZUFBZCxZQUFaO0FBQ0U7QUFBQyxlQUFEO0FBQUE7QUFBWUg7QUFBWixLQURGO0FBRUdDLFlBQVE7QUFBQyxjQUFEO0FBQUEsUUFBVSxVQUFVLENBQUNDLFdBQXJCO0FBQW1DRDtBQUFuQztBQUZYLEdBREY7QUFNRCxDQVJEOztBQWVBRixrQkFBa0JLLFlBQWxCLEdBQWlDO0FBQy9CSixTQUFPSyxTQUR3QjtBQUUvQkosUUFBTUksU0FGeUI7QUFHL0JILGVBQWFHO0FBSGtCLENBQWpDOztBQU1BLGVBQWVOLGlCQUFmIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZEljb24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5jYXJkLmhlYWRlckhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBDYXJkVGl0bGUgPSBQcmltaXRpdmUuU3VidGl0bGUuZXh0ZW5kYFxuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7dGhlbWUuY2FyZC5oZWFkZXJIZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgQ29udGVudENhcmRIZWFkZXIgPSAoeyB0aXRsZSwgaWNvbiwgb25JY29uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICB7aWNvbiAmJiA8Q2FyZEljb24gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e2ljb259PC9DYXJkSWNvbj59XG4gICAgPC9DYXJkSGVhZGVyPlxuICApO1xufTtcblxuQ29udGVudENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19