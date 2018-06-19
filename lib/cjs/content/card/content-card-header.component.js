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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsInRoZW1lIiwiY2FyZCIsImhlYWRlckhlaWdodCIsIkNhcmRUaXRsZSIsIlN1YnRpdGxlIiwiZ3V0dGVyV2lkdGgiLCJDYXJkSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwiQ29udGVudENhcmRIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztJQUFZQSxTOzs7Ozs7MEZBUFo7O0FBS0E7OztBQUlBLElBQU1DLFdBQVdELFVBQVVFLGdCQUFWLENBQTJCQyxNQUF0QyxrQkFDTUMsaUJBQU1DLElBQU4sQ0FBV0MsWUFEakIsQ0FBTjs7QUFNQSxJQUFNQyxZQUFZUCxVQUFVUSxRQUFWLENBQW1CTCxNQUEvQixtQkFDYUMsaUJBQU1LLFdBRG5CLENBQU47O0FBSUEsSUFBTUMsYUFBYUMsMkJBQU9DLE1BQXBCLG1CQUNNUixpQkFBTUMsSUFBTixDQUFXQyxZQURqQixDQUFOOztBQU1BLElBQU1PLG9CQUFvQixTQUFwQkEsaUJBQW9CLE9BQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUMxRCxNQUFNQyxrQkFBcUJDLHNCQUFyQixVQUFOO0FBQ0EsU0FDRTtBQUFDLGNBQUQ7QUFBQSxNQUFZLFdBQWNELGVBQWQsWUFBWjtBQUNFO0FBQUMsZUFBRDtBQUFBO0FBQVlIO0FBQVosS0FERjtBQUVHQyxZQUFRO0FBQUMsY0FBRDtBQUFBLFFBQVUsVUFBVSxDQUFDQyxXQUFyQjtBQUFtQ0Q7QUFBbkM7QUFGWCxHQURGO0FBTUQsQ0FSRDs7QUFlQUYsa0JBQWtCTSxZQUFsQixHQUFpQztBQUMvQkwsU0FBT00sU0FEd0I7QUFFL0JMLFFBQU1LLFNBRnlCO0FBRy9CSixlQUFhSTtBQUhrQixDQUFqQzs7a0JBTWVQLGlCIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZEljb24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5jYXJkLmhlYWRlckhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5gO1xuXG5jb25zdCBDYXJkVGl0bGUgPSBQcmltaXRpdmUuU3VidGl0bGUuZXh0ZW5kYFxuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7dGhlbWUuY2FyZC5oZWFkZXJIZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgQ29udGVudENhcmRIZWFkZXIgPSAoeyB0aXRsZSwgaWNvbiwgb25JY29uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gIHJldHVybiAoXG4gICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICB7aWNvbiAmJiA8Q2FyZEljb24gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e2ljb259PC9DYXJkSWNvbj59XG4gICAgPC9DYXJkSGVhZGVyPlxuICApO1xufTtcblxuQ29udGVudENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19