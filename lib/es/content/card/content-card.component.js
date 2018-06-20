var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  '], ['\n  display: flex;\n  padding: ', ';\n  background: ', ';\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 auto;\n  '], ['\n  flex: 1 1 auto;\n  ']);

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

var CardContent = styled.div(_templateObject2);

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

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQ2FyZEhlYWRlciIsIkNhcmQiLCJkaXYiLCJndXR0ZXJXaWR0aCIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJoZWlnaHQiLCJDYXJkQ29udGVudCIsIkNvbnRlbnRDYXJkIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7O0FBRUEsSUFBTUMsT0FBT0osT0FBT0ssR0FBZCxrQkFFT0gsTUFBTUksV0FGYixFQUdVSixNQUFNSyxJQUFOLENBQVdDLGVBSHJCLEVBSWE7QUFBQSxTQUFVQyxNQUFNQyxVQUFOLEdBQW1CLENBQW5CLEdBQXVCUixNQUFNSSxXQUF2QztBQUFBLENBSmIsRUFLSTtBQUFBLFNBQVVHLE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUxKLEVBT007QUFBQSxTQUFVRCxNQUFNRSxNQUFOLEdBQWVGLE1BQU1FLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FQTixDQUFOOztBQVVBLElBQU1DLGNBQWNaLE9BQU9LLEdBQXJCLGtCQUFOOztBQUlBLElBQU1RLGNBQWMsU0FBZEEsV0FBYyxPQU1kO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkosVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkssS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkosTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkssSUFDSSxRQURKQSxJQUNJOztBQUNKLE1BQU1DLGtCQUFxQmhCLFdBQXJCLFVBQU47QUFDQSxTQUNFO0FBQUMsUUFBRDtBQUFBO0FBQ0UsY0FBUVUsTUFEVjtBQUVFLHNCQUFjTSxlQUZoQjtBQUdFLGtCQUFZUDtBQUhkO0FBS0dLLGFBQVMsb0JBQUMsVUFBRCxJQUFZLE9BQU9BLEtBQW5CLEVBQTBCLE1BQU1DLElBQWhDLEdBTFo7QUFNRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjQyxlQUFkLGFBQWI7QUFBdURIO0FBQXZEO0FBTkYsR0FERjtBQVVELENBbEJEOztBQThCQUQsWUFBWUssWUFBWixHQUEyQjtBQUN6QkosWUFBVUssU0FEZTtBQUV6QlQsY0FBWSxLQUZhO0FBR3pCSyxTQUFPSSxTQUhrQjtBQUl6QlIsVUFBUVEsU0FKaUI7QUFLekJILFFBQU1HO0FBTG1CLENBQTNCOztBQVFBLGVBQWVOLFdBQWYiLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY2FyZC5iYWNrZ3JvdW5kQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGA7XG5cbmNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGF1dG87XG4gIGA7XG5cbmNvbnN0IENvbnRlbnRDYXJkID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzTGFzdEl0ZW0sXG4gIHRpdGxlLFxuICBoZWlnaHQsXG4gIGljb24sXG59KSA9PiB7XG4gIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1gfVxuICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICA+XG4gICAgICB7dGl0bGUgJiYgPENhcmRIZWFkZXIgdGl0bGU9e3RpdGxlfSBpY29uPXtpY29ufSAvPn1cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbkNvbnRlbnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==