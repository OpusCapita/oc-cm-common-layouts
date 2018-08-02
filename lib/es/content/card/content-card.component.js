var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  ']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

var Card = Primitive.Block.extend(_templateObject, function (props) {
  return props.isLastItem ? 0 : theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = styled.div(_templateObject2, theme.card.headerHeight, theme.card.headerHeight);

var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      title = _ref.title,
      height = _ref.height,
      icon = _ref.icon,
      iconClickCallback = _ref.iconClickCallback,
      className = _ref.className,
      id = _ref.id;

  var cardClassPrefix = classPrefix + '_card';

  return React.createElement(
    Card,
    {
      height: height,
      className: cardClassPrefix + ' ' + className,
      isLastItem: isLastItem,
      id: id
    },
    title && React.createElement(CardHeader, { title: title, icon: icon, iconClickCallback: iconClickCallback }),
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
  icon: undefined,
  iconClickCallback: null,
  id: '',
  className: ''
};

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQ2FyZEhlYWRlciIsIlByaW1pdGl2ZSIsIkNhcmQiLCJCbG9jayIsImV4dGVuZCIsInByb3BzIiwiaXNMYXN0SXRlbSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJjYXJkIiwiaGVhZGVySGVpZ2h0IiwiQ29udGVudENhcmQiLCJjaGlsZHJlbiIsInRpdGxlIiwiaWNvbiIsImljb25DbGlja0NhbGxiYWNrIiwiY2xhc3NOYW1lIiwiaWQiLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7QUFDQSxPQUFPLEtBQUtDLFNBQVosTUFBMkIsa0JBQTNCOztBQUVBLElBQU1DLE9BQU9ELFVBQVVFLEtBQVYsQ0FBZ0JDLE1BQXZCLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QlAsTUFBTVEsV0FBdkM7QUFBQSxDQUZiLEVBR0k7QUFBQSxTQUFVRixNQUFNQyxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDLFVBQTFDO0FBQUEsQ0FISixFQUtNO0FBQUEsU0FBVUQsTUFBTUcsTUFBTixHQUFlSCxNQUFNRyxNQUFyQixHQUE4QixNQUF4QztBQUFBLENBTE4sQ0FBTjs7QUFTQSxJQUFNQyxjQUFjWixPQUFPYSxHQUFyQixtQkFDb0JYLE1BQU1ZLElBQU4sQ0FBV0MsWUFEL0IsRUFFc0JiLE1BQU1ZLElBQU4sQ0FBV0MsWUFGakMsQ0FBTjs7QUFPQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsT0FTZDtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpSLFVBT0ksUUFQSkEsVUFPSTtBQUFBLE1BTkpTLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpQLE1BS0ksUUFMSkEsTUFLSTtBQUFBLE1BSkpRLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLGlCQUdJLFFBSEpBLGlCQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsRUFDSSxRQURKQSxFQUNJOztBQUNKLE1BQU1DLGtCQUFxQnRCLFdBQXJCLFVBQU47O0FBRUEsU0FDRTtBQUFDLFFBQUQ7QUFBQTtBQUNFLGNBQVFVLE1BRFY7QUFFRSxpQkFBY1ksZUFBZCxTQUFpQ0YsU0FGbkM7QUFHRSxrQkFBWVosVUFIZDtBQUlFLFVBQUlhO0FBSk47QUFNR0osYUFBUyxvQkFBQyxVQUFELElBQVksT0FBT0EsS0FBbkIsRUFBMEIsTUFBTUMsSUFBaEMsRUFBc0MsbUJBQW1CQyxpQkFBekQsR0FOWjtBQU9FO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNHLGVBQWQsYUFBYjtBQUF1RE47QUFBdkQ7QUFQRixHQURGO0FBV0QsQ0F2QkQ7O0FBc0NBRCxZQUFZUSxZQUFaLEdBQTJCO0FBQ3pCUCxZQUFVUSxTQURlO0FBRXpCaEIsY0FBWSxLQUZhO0FBR3pCUyxTQUFPTyxTQUhrQjtBQUl6QmQsVUFBUWMsU0FKaUI7QUFLekJOLFFBQU1NLFNBTG1CO0FBTXpCTCxxQkFBbUIsSUFOTTtBQU96QkUsTUFBSSxFQVBxQjtBQVF6QkQsYUFBVztBQVJjLENBQTNCOztBQVdBLGVBQWVMLFdBQWYiLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkID0gUHJpbWl0aXZlLkJsb2NrLmV4dGVuZGBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCl9OyBcbiAgZmxleDogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJyl9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGA7XG5cbmNvbnN0IENvbnRlbnRDYXJkID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzTGFzdEl0ZW0sXG4gIHRpdGxlLFxuICBoZWlnaHQsXG4gIGljb24sXG4gIGljb25DbGlja0NhbGxiYWNrLFxuICBjbGFzc05hbWUsXG4gIGlkLFxufSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICBpZD17aWR9XG4gICAgPlxuICAgICAge3RpdGxlICYmIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gaWNvbj17aWNvbn0gaWNvbkNsaWNrQ2FsbGJhY2s9e2ljb25DbGlja0NhbGxiYWNrfSAvPn1cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbkNvbnRlbnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBpY29uQ2xpY2tDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgaWNvbkNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19