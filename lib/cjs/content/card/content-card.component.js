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

var _contentCardHeader = require('./content-card-header.component');

var _contentCardHeader2 = _interopRequireDefault(_contentCardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Card = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, _constants.theme.card.backgroundColor, function (props) {
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
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

  var cardClassPrefix = _constants.classPrefix + '_card';
  return _react2.default.createElement(
    Card,
    {
      height: height,
      className: '' + cardClassPrefix,
      isLastItem: isLastItem
    },
    title && _react2.default.createElement(_contentCardHeader2.default, { title: title, icon: icon }),
    _react2.default.createElement(
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

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwiaGVpZ2h0IiwiQ29udGVudENhcmQiLCJjaGlsZHJlbiIsInRpdGxlIiwiaWNvbiIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7OztBQUZBOzs7QUFJQSxJQUFNQSxPQUFPQywyQkFBT0MsR0FBZCxrQkFDT0MsaUJBQU1DLFdBRGIsRUFFVUQsaUJBQU1FLElBQU4sQ0FBV0MsZUFGckIsRUFHYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJMLGlCQUFNQyxXQUF2QztBQUFBLENBSGIsRUFJSTtBQUFBLFNBQVVHLE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUpKLEVBTU07QUFBQSxTQUFVRCxNQUFNRSxNQUFOLEdBQWVGLE1BQU1FLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FOTixDQUFOOztBQVVBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxPQU1kO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkgsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkksS0FHSSxRQUhKQSxLQUdJO0FBQUEsTUFGSkgsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkksSUFDSSxRQURKQSxJQUNJOztBQUNKLE1BQU1DLGtCQUFxQkMsc0JBQXJCLFVBQU47QUFDQSxTQUNFO0FBQUMsUUFBRDtBQUFBO0FBQ0UsY0FBUU4sTUFEVjtBQUVFLHNCQUFjSyxlQUZoQjtBQUdFLGtCQUFZTjtBQUhkO0FBS0dJLGFBQVMsOEJBQUMsMkJBQUQsSUFBWSxPQUFPQSxLQUFuQixFQUEwQixNQUFNQyxJQUFoQyxHQUxaO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBY0MsZUFBZCxhQUFMO0FBQStDSDtBQUEvQztBQU5GLEdBREY7QUFVRCxDQWxCRDs7QUE4QkFELFlBQVlNLFlBQVosR0FBMkI7QUFDekJMLFlBQVVNLFNBRGU7QUFFekJULGNBQVksS0FGYTtBQUd6QkksU0FBT0ssU0FIa0I7QUFJekJSLFVBQVFRLFNBSmlCO0FBS3pCSixRQUFNSTtBQUxtQixDQUEzQjs7a0JBUWVQLFciLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY2FyZC5iYWNrZ3JvdW5kQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGA7XG5cblxuY29uc3QgQ29udGVudENhcmQgPSAoe1xuICBjaGlsZHJlbixcbiAgaXNMYXN0SXRlbSxcbiAgdGl0bGUsXG4gIGhlaWdodCxcbiAgaWNvbixcbn0pID0+IHtcbiAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fWB9XG4gICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgID5cbiAgICAgIHt0aXRsZSAmJiA8Q2FyZEhlYWRlciB0aXRsZT17dGl0bGV9IGljb249e2ljb259IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1fY29udGVudGB9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmQ7XG4iXX0=