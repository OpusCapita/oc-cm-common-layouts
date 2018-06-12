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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZCIsImRpdiIsImd1dHRlcldpZHRoIiwiY2FyZCIsImJhY2tncm91bmRDb2xvciIsInByb3BzIiwiaXNMYXN0SXRlbSIsImhlaWdodCIsIkNvbnRlbnRDYXJkIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJjYXJkQ2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7MEZBUEE7O0FBS0E7OztBQUlBLElBQU1BLE9BQU8sMkJBQU9DLEdBQWQsa0JBQ08saUJBQU1DLFdBRGIsRUFFVSxpQkFBTUMsSUFBTixDQUFXQyxlQUZyQixFQUdhO0FBQUEsU0FBU0MsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QixpQkFBTUosV0FBdEM7QUFBQSxDQUhiLEVBSUk7QUFBQSxTQUFTRyxNQUFNQyxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDLFVBQXpDO0FBQUEsQ0FKSixFQU1NO0FBQUEsU0FBU0QsTUFBTUUsTUFBTixHQUFlRixNQUFNRSxNQUFyQixHQUE4QixNQUF2QztBQUFBLENBTk4sQ0FBTjs7QUFVQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsT0FBbUQ7QUFBQSxNQUFoREMsUUFBZ0QsUUFBaERBLFFBQWdEO0FBQUEsTUFBdENILFVBQXNDLFFBQXRDQSxVQUFzQztBQUFBLE1BQTFCSSxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkgsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEksSUFBVyxRQUFYQSxJQUFXOztBQUNyRSxNQUFNQyxrREFBTjtBQUNBLFNBQ0U7QUFBQyxRQUFEO0FBQUE7QUFDRSxjQUFRTCxNQURWO0FBRUUsc0JBQWNLLGVBRmhCO0FBR0Usa0JBQVlOO0FBSGQ7QUFLR0ksYUFBUyw2REFBWSxPQUFPQSxLQUFuQixFQUEwQixNQUFNQyxJQUFoQyxHQUxaO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBY0MsZUFBZCxhQUFMO0FBQStDSDtBQUEvQztBQU5GLEdBREY7QUFVRCxDQVpEOztBQXdCQUQsWUFBWUssWUFBWixHQUEyQjtBQUN6QkosWUFBVUssU0FEZTtBQUV6QlIsY0FBWSxLQUZhO0FBR3pCSSxTQUFPSSxTQUhrQjtBQUl6QlAsVUFBUU8sU0FKaUI7QUFLekJILFFBQU1HO0FBTG1CLENBQTNCOztrQkFRZU4sVyIsImZpbGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY2FyZC5iYWNrZ3JvdW5kQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGh9OyBcbiAgZmxleDogJHtwcm9wcyA9PiBwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0byd9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJ307XG4gIGA7XG5cblxuY29uc3QgQ29udGVudENhcmQgPSAoeyBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiB9KSA9PiB7XG4gIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1gfVxuICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICA+XG4gICAgICB7dGl0bGUgJiYgPENhcmRIZWFkZXIgdGl0bGU9e3RpdGxlfSBpY29uPXtpY29ufSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19