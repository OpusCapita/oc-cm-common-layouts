'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _contentCardHeader = require('./content-card-header.component');

var _contentCardHeader2 = _interopRequireDefault(_contentCardHeader);

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Card = Primitive.Block.extend(_templateObject, function (props) {
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents2.default.div(_templateObject2, _constants.theme.card.headerHeight, _constants.theme.card.headerHeight);

var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      title = _ref.title,
      height = _ref.height,
      icon = _ref.icon,
      iconClickCallback = _ref.iconClickCallback,
      className = _ref.className,
      id = _ref.id;

  var cardClassPrefix = _constants.classPrefix + '_card';

  return _react2.default.createElement(
    Card,
    {
      height: height,
      className: cardClassPrefix + ' ' + className,
      isLastItem: isLastItem,
      id: id
    },
    title && _react2.default.createElement(_contentCardHeader2.default, { title: title, icon: icon, iconClickCallback: iconClickCallback }),
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
  icon: undefined,
  iconClickCallback: null,
  id: '',
  className: ''
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwiZXh0ZW5kIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiY2FyZCIsImhlYWRlckhlaWdodCIsIkNvbnRlbnRDYXJkIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJpY29uQ2xpY2tDYWxsYmFjayIsImNsYXNzTmFtZSIsImlkIiwiY2FyZENsYXNzUHJlZml4IiwiY2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7O0FBSFo7OztBQUtBLElBQU1DLE9BQU9ELFVBQVVFLEtBQVYsQ0FBZ0JDLE1BQXZCLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkMsaUJBQU1DLFdBQXZDO0FBQUEsQ0FGYixFQUdJO0FBQUEsU0FBVUgsTUFBTUMsVUFBTixHQUFtQixVQUFuQixHQUFnQyxVQUExQztBQUFBLENBSEosRUFLTTtBQUFBLFNBQVVELE1BQU1JLE1BQU4sR0FBZUosTUFBTUksTUFBckIsR0FBOEIsTUFBeEM7QUFBQSxDQUxOLENBQU47O0FBU0EsSUFBTUMsY0FBY0MsMkJBQU9DLEdBQXJCLG1CQUNvQkwsaUJBQU1NLElBQU4sQ0FBV0MsWUFEL0IsRUFFc0JQLGlCQUFNTSxJQUFOLENBQVdDLFlBRmpDLENBQU47O0FBT0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLE9BU2Q7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKVixVQU9JLFFBUEpBLFVBT0k7QUFBQSxNQU5KVyxLQU1JLFFBTkpBLEtBTUk7QUFBQSxNQUxKUixNQUtJLFFBTEpBLE1BS0k7QUFBQSxNQUpKUyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxpQkFHSSxRQUhKQSxpQkFHSTtBQUFBLE1BRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLE1BREpDLEVBQ0ksUUFESkEsRUFDSTs7QUFDSixNQUFNQyxrQkFBcUJDLHNCQUFyQixVQUFOOztBQUVBLFNBQ0U7QUFBQyxRQUFEO0FBQUE7QUFDRSxjQUFRZCxNQURWO0FBRUUsaUJBQWNhLGVBQWQsU0FBaUNGLFNBRm5DO0FBR0Usa0JBQVlkLFVBSGQ7QUFJRSxVQUFJZTtBQUpOO0FBTUdKLGFBQVMsOEJBQUMsMkJBQUQsSUFBWSxPQUFPQSxLQUFuQixFQUEwQixNQUFNQyxJQUFoQyxFQUFzQyxtQkFBbUJDLGlCQUF6RCxHQU5aO0FBT0U7QUFBQyxpQkFBRDtBQUFBLFFBQWEsV0FBY0csZUFBZCxhQUFiO0FBQXVETjtBQUF2RDtBQVBGLEdBREY7QUFXRCxDQXZCRDs7QUFzQ0FELFlBQVlTLFlBQVosR0FBMkI7QUFDekJSLFlBQVVTLFNBRGU7QUFFekJuQixjQUFZLEtBRmE7QUFHekJXLFNBQU9RLFNBSGtCO0FBSXpCaEIsVUFBUWdCLFNBSmlCO0FBS3pCUCxRQUFNTyxTQUxtQjtBQU16Qk4scUJBQW1CLElBTk07QUFPekJFLE1BQUksRUFQcUI7QUFRekJELGFBQVc7QUFSYyxDQUEzQjs7a0JBV2VMLFciLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkID0gUHJpbWl0aXZlLkJsb2NrLmV4dGVuZGBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCl9OyBcbiAgZmxleDogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJyl9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGA7XG5cbmNvbnN0IENvbnRlbnRDYXJkID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzTGFzdEl0ZW0sXG4gIHRpdGxlLFxuICBoZWlnaHQsXG4gIGljb24sXG4gIGljb25DbGlja0NhbGxiYWNrLFxuICBjbGFzc05hbWUsXG4gIGlkLFxufSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICBpZD17aWR9XG4gICAgPlxuICAgICAge3RpdGxlICYmIDxDYXJkSGVhZGVyIHRpdGxlPXt0aXRsZX0gaWNvbj17aWNvbn0gaWNvbkNsaWNrQ2FsbGJhY2s9e2ljb25DbGlja0NhbGxiYWNrfSAvPn1cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbkNvbnRlbnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBpY29uQ2xpY2tDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgaWNvbkNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19