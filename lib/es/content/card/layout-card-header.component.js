var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items:center;\n  display: flex;\n'], ['\n  height: ', ';\n  align-items:center;\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n'], ['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import BorderlessButton from '../../primitives/layout-primitive-borderless-button.component';

var CardHeader = styled.header(_templateObject, theme.card.headerHeight);

var CardIcon = BorderlessButton.extend(_templateObject2, theme.card.headerHeight);

var LayoutCardHeader = function LayoutCardHeader(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick;

  var cardClassPrefix = classPrefix + '_card';
  return React.createElement(
    CardHeader,
    { className: cardClassPrefix + '_header' },
    React.createElement(
      'h4',
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

LayoutCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined
};

export default LayoutCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvbGF5b3V0LWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQm9yZGVybGVzc0J1dHRvbiIsIkNhcmRIZWFkZXIiLCJoZWFkZXIiLCJjYXJkIiwiaGVhZGVySGVpZ2h0IiwiQ2FyZEljb24iLCJleHRlbmQiLCJMYXlvdXRDYXJkSGVhZGVyIiwidGl0bGUiLCJpY29uIiwib25JY29uQ2xpY2siLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsK0RBQTdCOztBQUVBLElBQU1DLGFBQWFKLE9BQU9LLE1BQXBCLGtCQUNNSCxNQUFNSSxJQUFOLENBQVdDLFlBRGpCLENBQU47O0FBTUEsSUFBTUMsV0FBV0wsaUJBQWlCTSxNQUE1QixtQkFDTVAsTUFBTUksSUFBTixDQUFXQyxZQURqQixDQUFOOztBQU1BLElBQU1HLG1CQUFtQixTQUFuQkEsZ0JBQW1CLE9BQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUN6RCxNQUFNQyxrQkFBcUJiLFdBQXJCLFVBQU47QUFDQSxTQUNFO0FBQUMsY0FBRDtBQUFBLE1BQVksV0FBY2EsZUFBZCxZQUFaO0FBQ0U7QUFBQTtBQUFBO0FBQUtIO0FBQUwsS0FERjtBQUVHQyxZQUFRO0FBQUMsY0FBRDtBQUFBLFFBQVUsVUFBVSxDQUFDQyxXQUFyQjtBQUFtQ0Q7QUFBbkM7QUFGWCxHQURGO0FBTUQsQ0FSRDs7QUFlQUYsaUJBQWlCSyxZQUFqQixHQUFnQztBQUM5QkosU0FBT0ssU0FEdUI7QUFFOUJKLFFBQU1JLFNBRndCO0FBRzlCSCxlQUFhRztBQUhpQixDQUFoQzs7QUFNQSxlQUFlTixnQkFBZiIsImZpbGUiOiJsYXlvdXQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBCb3JkZXJsZXNzQnV0dG9uIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvbGF5b3V0LXByaW1pdGl2ZS1ib3JkZXJsZXNzLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgQ2FyZEljb24gPSBCb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IExheW91dENhcmRIZWFkZXIgPSAoeyB0aXRsZSwgaWNvbiwgb25JY29uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAge2ljb24gJiYgPENhcmRJY29uIGRpc2FibGVkPXshb25JY29uQ2xpY2t9PntpY29ufTwvQ2FyZEljb24+fVxuICAgIDwvQ2FyZEhlYWRlcj5cbiAgKTtcbn07XG5cbkxheW91dENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5MYXlvdXRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Q2FyZEhlYWRlcjtcbiJdfQ==