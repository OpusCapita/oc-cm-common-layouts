'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items:center;\n  display: flex;\n'], ['\n  height: ', ';\n  align-items:center;\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n'], ['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _layoutPrimitiveBorderlessButton = require('../../primitives/layout-primitive-borderless-button.component');

var _layoutPrimitiveBorderlessButton2 = _interopRequireDefault(_layoutPrimitiveBorderlessButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

// App imports


var CardHeader = _styledComponents2.default.header(_templateObject, _constants.theme.card.headerHeight);

var CardIcon = _layoutPrimitiveBorderlessButton2.default.extend(_templateObject2, _constants.theme.card.headerHeight);

var LayoutCardHeader = function LayoutCardHeader(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick;

  var cardClassPrefix = _constants.classPrefix + '_card';
  return _react2.default.createElement(
    CardHeader,
    { className: cardClassPrefix + '_header' },
    _react2.default.createElement(
      'h4',
      null,
      title
    ),
    icon && _react2.default.createElement(
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

exports.default = LayoutCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvbGF5b3V0LWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZEhlYWRlciIsImhlYWRlciIsImNhcmQiLCJoZWFkZXJIZWlnaHQiLCJDYXJkSWNvbiIsImV4dGVuZCIsIkxheW91dENhcmRIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNhcmRDbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7MEZBUEE7O0FBS0E7OztBQUlBLElBQU1BLGFBQWEsMkJBQU9DLE1BQXBCLGtCQUNNLGlCQUFNQyxJQUFOLENBQVdDLFlBRGpCLENBQU47O0FBTUEsSUFBTUMsV0FBVywwQ0FBaUJDLE1BQTVCLG1CQUNNLGlCQUFNSCxJQUFOLENBQVdDLFlBRGpCLENBQU47O0FBTUEsSUFBTUcsbUJBQW1CLFNBQW5CQSxnQkFBbUIsT0FBa0M7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ3pELE1BQU1DLGtEQUFOO0FBQ0EsU0FDRTtBQUFDLGNBQUQ7QUFBQSxNQUFZLFdBQWNBLGVBQWQsWUFBWjtBQUNFO0FBQUE7QUFBQTtBQUFLSDtBQUFMLEtBREY7QUFFR0MsWUFBUTtBQUFDLGNBQUQ7QUFBQSxRQUFVLFVBQVUsQ0FBQ0MsV0FBckI7QUFBbUNEO0FBQW5DO0FBRlgsR0FERjtBQU1ELENBUkQ7O0FBZUFGLGlCQUFpQkssWUFBakIsR0FBZ0M7QUFDOUJKLFNBQU9LLFNBRHVCO0FBRTlCSixRQUFNSSxTQUZ3QjtBQUc5QkgsZUFBYUc7QUFIaUIsQ0FBaEM7O2tCQU1lTixnQiIsImZpbGUiOiJsYXlvdXQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBCb3JkZXJsZXNzQnV0dG9uIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvbGF5b3V0LXByaW1pdGl2ZS1ib3JkZXJsZXNzLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgQ2FyZEljb24gPSBCb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IExheW91dENhcmRIZWFkZXIgPSAoeyB0aXRsZSwgaWNvbiwgb25JY29uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAge2ljb24gJiYgPENhcmRJY29uIGRpc2FibGVkPXshb25JY29uQ2xpY2t9PntpY29ufTwvQ2FyZEljb24+fVxuICAgIDwvQ2FyZEhlYWRlcj5cbiAgKTtcbn07XG5cbkxheW91dENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5MYXlvdXRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Q2FyZEhlYWRlcjtcbiJdfQ==