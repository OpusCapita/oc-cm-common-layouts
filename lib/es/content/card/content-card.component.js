var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './content-card-header.component';

var Card = styled.div(_templateObject, theme.gutterWidth, theme.card.backgroundColor, function (props) {
  return props.isLastItem ? 0 : theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      title = _ref.title,
      height = _ref.height,
      icon = _ref.icon;

  var cardClassPrefix = classPrefix + '_card';
  return React.createElement(
    Card,
    {
      height: height,
      className: '' + cardClassPrefix,
      isLastItem: isLastItem
    },
    title && React.createElement(CardHeader, { title: title, icon: icon }),
    React.createElement(
      'div',
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

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQ2FyZEhlYWRlciIsIkNhcmQiLCJkaXYiLCJndXR0ZXJXaWR0aCIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJoZWlnaHQiLCJDb250ZW50Q2FyZCIsImNoaWxkcmVuIiwidGl0bGUiLCJpY29uIiwiY2FyZENsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7O0FBRUEsSUFBTUMsT0FBT0osT0FBT0ssR0FBZCxrQkFDT0gsTUFBTUksV0FEYixFQUVVSixNQUFNSyxJQUFOLENBQVdDLGVBRnJCLEVBR2E7QUFBQSxTQUFVQyxNQUFNQyxVQUFOLEdBQW1CLENBQW5CLEdBQXVCUixNQUFNSSxXQUF2QztBQUFBLENBSGIsRUFJSTtBQUFBLFNBQVVHLE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUpKLEVBTU07QUFBQSxTQUFVRCxNQUFNRSxNQUFOLEdBQWVGLE1BQU1FLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FOTixDQUFOOztBQVVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxPQU1kO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkgsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkksS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkgsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkksSUFDSSxRQURKQSxJQUNJOztBQUNKLE1BQU1DLGtCQUFxQmYsV0FBckIsVUFBTjtBQUNBLFNBQ0U7QUFBQyxRQUFEO0FBQUE7QUFDRSxjQUFRVSxNQURWO0FBRUUsc0JBQWNLLGVBRmhCO0FBR0Usa0JBQVlOO0FBSGQ7QUFLR0ksYUFBUyxvQkFBQyxVQUFELElBQVksT0FBT0EsS0FBbkIsRUFBMEIsTUFBTUMsSUFBaEMsR0FMWjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQWNDLGVBQWQsYUFBTDtBQUErQ0g7QUFBL0M7QUFORixHQURGO0FBVUQsQ0FsQkQ7O0FBOEJBRCxZQUFZSyxZQUFaLEdBQTJCO0FBQ3pCSixZQUFVSyxTQURlO0FBRXpCUixjQUFZLEtBRmE7QUFHekJJLFNBQU9JLFNBSGtCO0FBSXpCUCxVQUFRTyxTQUppQjtBQUt6QkgsUUFBTUc7QUFMbUIsQ0FBM0I7O0FBUUEsZUFBZU4sV0FBZiIsImZpbGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9jb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jYXJkLmJhY2tncm91bmRDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgYDtcblxuXG5jb25zdCBDb250ZW50Q2FyZCA9ICh7XG4gIGNoaWxkcmVuLFxuICBpc0xhc3RJdGVtLFxuICB0aXRsZSxcbiAgaGVpZ2h0LFxuICBpY29uLFxufSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9YH1cbiAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgPlxuICAgICAge3RpdGxlICYmIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gaWNvbj17aWNvbn0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbkNvbnRlbnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==