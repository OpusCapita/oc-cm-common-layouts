'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n'], ['\n  height: ', ';\n  margin-right: 0;\n  margin-left: auto;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-bottom: ', ';\n'], ['\n  margin-bottom: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var CardIcon = Primitive.BorderlessButton.extend(_templateObject, _constants.theme.card.headerHeight);

var CardTitle = Primitive.Subtitle.extend(_templateObject2, _constants.theme.gutterWidth);

var CardHeader = _styledComponents2.default.header(_templateObject3, _constants.theme.card.headerHeight);

var ContentCardHeader = function ContentCardHeader(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      onIconClick = _ref.onIconClick;

  var cardClassPrefix = _constants.classPrefix + '_card';
  return _react2.default.createElement(
    CardHeader,
    { className: cardClassPrefix + '_header' },
    _react2.default.createElement(
      CardTitle,
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

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined
};

exports.default = ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsInRoZW1lIiwiY2FyZCIsImhlYWRlckhlaWdodCIsIkNhcmRUaXRsZSIsIlN1YnRpdGxlIiwiZ3V0dGVyV2lkdGgiLCJDYXJkSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwiQ29udGVudENhcmRIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztJQUFZQSxTOzs7Ozs7O0FBRlo7OztBQUlBLElBQU1DLFdBQVdELFVBQVVFLGdCQUFWLENBQTJCQyxNQUF0QyxrQkFDTUMsaUJBQU1DLElBQU4sQ0FBV0MsWUFEakIsQ0FBTjs7QUFNQSxJQUFNQyxZQUFZUCxVQUFVUSxRQUFWLENBQW1CTCxNQUEvQixtQkFDYUMsaUJBQU1LLFdBRG5CLENBQU47O0FBSUEsSUFBTUMsYUFBYUMsMkJBQU9DLE1BQXBCLG1CQUNNUixpQkFBTUMsSUFBTixDQUFXQyxZQURqQixDQUFOOztBQU1BLElBQU1PLG9CQUFvQixTQUFwQkEsaUJBQW9CLE9BQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUMxRCxNQUFNQyxrQkFBcUJDLHNCQUFyQixVQUFOO0FBQ0EsU0FDRTtBQUFDLGNBQUQ7QUFBQSxNQUFZLFdBQWNELGVBQWQsWUFBWjtBQUNFO0FBQUMsZUFBRDtBQUFBO0FBQVlIO0FBQVosS0FERjtBQUVHQyxZQUFRO0FBQUMsY0FBRDtBQUFBLFFBQVUsVUFBVSxDQUFDQyxXQUFyQjtBQUFtQ0Q7QUFBbkM7QUFGWCxHQURGO0FBTUQsQ0FSRDs7QUFlQUYsa0JBQWtCTSxZQUFsQixHQUFpQztBQUMvQkwsU0FBT00sU0FEd0I7QUFFL0JMLFFBQU1LLFNBRnlCO0FBRy9CSixlQUFhSTtBQUhrQixDQUFqQzs7a0JBTWVQLGlCIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmNhcmQuaGVhZGVySGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IFByaW1pdGl2ZS5TdWJ0aXRsZS5leHRlbmRgXG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGhlaWdodDogJHt0aGVtZS5jYXJkLmhlYWRlckhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBDb250ZW50Q2FyZEhlYWRlciA9ICh7IHRpdGxlLCBpY29uLCBvbkljb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICA8Q2FyZFRpdGxlPnt0aXRsZX08L0NhcmRUaXRsZT5cbiAgICAgIHtpY29uICYmIDxDYXJkSWNvbiBkaXNhYmxlZD17IW9uSWNvbkNsaWNrfT57aWNvbn08L0NhcmRJY29uPn1cbiAgICA8L0NhcmRIZWFkZXI+XG4gICk7XG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmRIZWFkZXI7XG4iXX0=