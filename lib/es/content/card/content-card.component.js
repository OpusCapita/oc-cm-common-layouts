var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQ2FyZEhlYWRlciIsIkNhcmQiLCJkaXYiLCJndXR0ZXJXaWR0aCIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJoZWlnaHQiLCJDb250ZW50Q2FyZCIsImNoaWxkcmVuIiwidGl0bGUiLCJpY29uIiwiY2FyZENsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7O0FBRUEsSUFBTUMsT0FBT0osT0FBT0ssR0FBZCxrQkFDT0gsTUFBTUksV0FEYixFQUVVSixNQUFNSyxJQUFOLENBQVdDLGVBRnJCLEVBR2E7QUFBQSxTQUFTQyxNQUFNQyxVQUFOLEdBQW1CLENBQW5CLEdBQXVCUixNQUFNSSxXQUF0QztBQUFBLENBSGIsRUFJSTtBQUFBLFNBQVNHLE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBekM7QUFBQSxDQUpKLEVBTU07QUFBQSxTQUFTRCxNQUFNRSxNQUFOLEdBQWVGLE1BQU1FLE1BQXJCLEdBQThCLE1BQXZDO0FBQUEsQ0FOTixDQUFOOztBQVVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxPQUFtRDtBQUFBLE1BQWhEQyxRQUFnRCxRQUFoREEsUUFBZ0Q7QUFBQSxNQUF0Q0gsVUFBc0MsUUFBdENBLFVBQXNDO0FBQUEsTUFBMUJJLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CSCxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYSSxJQUFXLFFBQVhBLElBQVc7O0FBQ3JFLE1BQU1DLGtCQUFxQmYsV0FBckIsVUFBTjtBQUNBLFNBQ0U7QUFBQyxRQUFEO0FBQUE7QUFDRSxjQUFRVSxNQURWO0FBRUUsc0JBQWNLLGVBRmhCO0FBR0Usa0JBQVlOO0FBSGQ7QUFLR0ksYUFBUyxvQkFBQyxVQUFELElBQVksT0FBT0EsS0FBbkIsRUFBMEIsTUFBTUMsSUFBaEMsR0FMWjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQWNDLGVBQWQsYUFBTDtBQUErQ0g7QUFBL0M7QUFORixHQURGO0FBVUQsQ0FaRDs7QUF3QkFELFlBQVlLLFlBQVosR0FBMkI7QUFDekJKLFlBQVVLLFNBRGU7QUFFekJSLGNBQVksS0FGYTtBQUd6QkksU0FBT0ksU0FIa0I7QUFJekJQLFVBQVFPLFNBSmlCO0FBS3pCSCxRQUFNRztBQUxtQixDQUEzQjs7QUFRQSxlQUFlTixXQUFmIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9jb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jYXJkLmJhY2tncm91bmRDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aH07IFxuICBmbGV4OiAke3Byb3BzID0+IHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJ307XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nfTtcbiAgYDtcblxuXG5jb25zdCBDb250ZW50Q2FyZCA9ICh7IGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uIH0pID0+IHtcbiAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fWB9XG4gICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgID5cbiAgICAgIHt0aXRsZSAmJiA8Q2FyZEhlYWRlciB0aXRsZT17dGl0bGV9IGljb249e2ljb259IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmQ7XG4iXX0=