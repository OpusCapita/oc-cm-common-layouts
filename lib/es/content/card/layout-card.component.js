var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './layout-card-header.component';

var Card = styled.div(_templateObject, theme.gutterWidth, theme.card.backgroundColor, function (props) {
  return props.isLastItem ? 0 : theme.gutterWidth;
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

LayoutCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined
};

export default LayoutCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvbGF5b3V0LWNhcmQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJDYXJkSGVhZGVyIiwiQ2FyZCIsImRpdiIsImd1dHRlcldpZHRoIiwiY2FyZCIsImJhY2tncm91bmRDb2xvciIsInByb3BzIiwiaXNMYXN0SXRlbSIsImhlaWdodCIsIkxheW91dENhcmQiLCJjaGlsZHJlbiIsInRpdGxlIiwiaWNvbiIsImNhcmRDbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU9DLFVBQVAsTUFBdUIsZ0NBQXZCOztBQUVBLElBQU1DLE9BQU9KLE9BQU9LLEdBQWQsa0JBQ09ILE1BQU1JLFdBRGIsRUFFVUosTUFBTUssSUFBTixDQUFXQyxlQUZyQixFQUdhO0FBQUEsU0FBU0MsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QlIsTUFBTUksV0FBdEM7QUFBQSxDQUhiLEVBSUk7QUFBQSxTQUFTRyxNQUFNQyxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDLFVBQXpDO0FBQUEsQ0FKSixFQU1NO0FBQUEsU0FBU0QsTUFBTUUsTUFBTixHQUFlRixNQUFNRSxNQUFyQixHQUE4QixNQUF2QztBQUFBLENBTk4sQ0FBTjs7QUFVQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsT0FBbUQ7QUFBQSxNQUFoREMsUUFBZ0QsUUFBaERBLFFBQWdEO0FBQUEsTUFBdENILFVBQXNDLFFBQXRDQSxVQUFzQztBQUFBLE1BQTFCSSxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkgsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEksSUFBVyxRQUFYQSxJQUFXOztBQUNwRSxNQUFNQyxrQkFBcUJmLFdBQXJCLFVBQU47QUFDQSxTQUNFO0FBQUMsUUFBRDtBQUFBO0FBQ0UsY0FBUVUsTUFEVjtBQUVFLHNCQUFjSyxlQUZoQjtBQUdFLGtCQUFZTjtBQUhkO0FBS0dJLGFBQVMsb0JBQUMsVUFBRCxJQUFZLE9BQU9BLEtBQW5CLEVBQTBCLE1BQU1DLElBQWhDLEdBTFo7QUFNRTtBQUFBO0FBQUEsUUFBSyxXQUFjQyxlQUFkLGFBQUw7QUFBK0NIO0FBQS9DO0FBTkYsR0FERjtBQVVELENBWkQ7O0FBd0JBRCxXQUFXSyxZQUFYLEdBQTBCO0FBQ3hCSixZQUFVSyxTQURjO0FBRXhCUixjQUFZLEtBRlk7QUFHeEJJLFNBQU9JLFNBSGlCO0FBSXhCUCxVQUFRTyxTQUpnQjtBQUt4QkgsUUFBTUc7QUFMa0IsQ0FBMUI7O0FBUUEsZUFBZU4sVUFBZiIsImZpbGUiOiJsYXlvdXQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9sYXlvdXQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNhcmQuYmFja2dyb3VuZENvbG9yfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHRoZW1lLmd1dHRlcldpZHRofTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gcHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0byd9O1xuICBgO1xuXG5cbmNvbnN0IExheW91dENhcmQgPSAoeyBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiB9KSA9PiB7XG4gIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1gfVxuICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICA+XG4gICAgICB7dGl0bGUgJiYgPENhcmRIZWFkZXIgdGl0bGU9e3RpdGxlfSBpY29uPXtpY29ufSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuTGF5b3V0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbn07XG5MYXlvdXRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDYXJkO1xuIl19