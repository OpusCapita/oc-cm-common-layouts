'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n'], ['\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _plus = require('react-icons/lib/fa/plus');

var _plus2 = _interopRequireDefault(_plus);

var _minus = require('react-icons/lib/fa/minus');

var _minus2 = _interopRequireDefault(_minus);

var _constants = require('../../constants');

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var CardIcon = Primitive.BorderlessButton.extend(_templateObject, _constants.theme.header.height, _constants.theme.header.height, _constants.theme.header.button.height, _constants.theme.header.button.height);

var CardTitle = Primitive.Subtitle.extend(_templateObject2);

var CardHeader = _styledComponents2.default.header(_templateObject3, _constants.theme.header.height, _constants.theme.gutterWidth);

var ContentCardHeader = function (_React$PureComponent) {
  _inherits(ContentCardHeader, _React$PureComponent);

  function ContentCardHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, ContentCardHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getExpandedIcon = function () {
      return _this.props.isExpanded ? _react2.default.createElement(_minus2.default, null) : _react2.default.createElement(_plus2.default, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ContentCardHeader.prototype.render = function render() {
    var _props = this.props,
        icon = _props.icon,
        title = _props.title,
        onIconClick = _props.onIconClick,
        isExpanded = _props.isExpanded,
        isExpandable = _props.isExpandable;

    var cardClassPrefix = _constants.classPrefix + '_card';
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;

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
        { onClick: onIconClick, disabled: !onIconClick },
        resolvedIcon
      )
    );
  };

  return ContentCardHeader;
}(_react2.default.PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false
};

exports.default = ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiYnV0dG9uIiwiQ2FyZFRpdGxlIiwiU3VidGl0bGUiLCJDYXJkSGVhZGVyIiwic3R5bGVkIiwiZ3V0dGVyV2lkdGgiLCJDb250ZW50Q2FyZEhlYWRlciIsImdldEV4cGFuZGVkSWNvbiIsInByb3BzIiwiaXNFeHBhbmRlZCIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsIm9uSWNvbkNsaWNrIiwiaXNFeHBhbmRhYmxlIiwiY2FyZENsYXNzUHJlZml4IiwiY2xhc3NQcmVmaXgiLCJyZXNvbHZlZEljb24iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7OztBQUZaOzs7QUFJQSxJQUFNQyxXQUFXRCxVQUFVRSxnQkFBVixDQUEyQkMsTUFBdEMsa0JBQ01DLGlCQUFNQyxNQUFOLENBQWFDLE1BRG5CLEVBRUtGLGlCQUFNQyxNQUFOLENBQWFDLE1BRmxCLEVBTVFGLGlCQUFNQyxNQUFOLENBQWFFLE1BQWIsQ0FBb0JELE1BTjVCLEVBT09GLGlCQUFNQyxNQUFOLENBQWFFLE1BQWIsQ0FBb0JELE1BUDNCLENBQU47O0FBV0EsSUFBTUUsWUFBWVIsVUFBVVMsUUFBVixDQUFtQk4sTUFBL0Isa0JBQU47O0FBR0EsSUFBTU8sYUFBYUMsMkJBQU9OLE1BQXBCLG1CQUNNRCxpQkFBTUMsTUFBTixDQUFhQyxNQURuQixFQUlhRixpQkFBTVEsV0FKbkIsQ0FBTjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQjtBQUFBLGFBQVEsTUFBS0MsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLDhCQUFDLGVBQUQsT0FBeEIsR0FBc0MsOEJBQUMsY0FBRCxPQUE5QztBQUFBLEs7Ozs4QkFFbEJDLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLRixLQUhGO0FBQUEsUUFFTEcsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsUUFFUUMsV0FGUixVQUVRQSxXQUZSO0FBQUEsUUFFcUJKLFVBRnJCLFVBRXFCQSxVQUZyQjtBQUFBLFFBRWlDSyxZQUZqQyxVQUVpQ0EsWUFGakM7O0FBSVAsUUFBTUMsa0JBQXFCQyxzQkFBckIsVUFBTjtBQUNBLFFBQU1DLGVBQWVILGVBQWUsS0FBS1AsZUFBTCxDQUFxQkUsVUFBckIsQ0FBZixHQUFrREUsSUFBdkU7O0FBRUEsV0FDRTtBQUFDLGdCQUFEO0FBQUEsUUFBWSxXQUFjSSxlQUFkLFlBQVo7QUFDRTtBQUFDLGlCQUFEO0FBQUE7QUFBWUg7QUFBWixPQURGO0FBRUdELGNBQ0Q7QUFBQyxnQkFBRDtBQUFBLFVBQVUsU0FBU0UsV0FBbkIsRUFBZ0MsVUFBVSxDQUFDQSxXQUEzQztBQUF5REk7QUFBekQ7QUFIRixLQURGO0FBT0QsRzs7O0VBakI2QkMsZ0JBQU1DLGE7O0FBNEJ0Q2Isa0JBQWtCYyxZQUFsQixHQUFpQztBQUMvQlIsU0FBT1MsU0FEd0I7QUFFL0JWLFFBQU1VLFNBRnlCO0FBRy9CUixlQUFhUSxTQUhrQjtBQUkvQlAsZ0JBQWM7QUFKaUIsQ0FBakM7O2tCQU9lUixpQiIsImZpbGUiOiJjb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmFQbHVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9wbHVzJztcbmltcG9ydCBGYU1pbnVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9taW51cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5oZWlnaHR9O1xuICB3aWR0aDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZFRpdGxlID0gUHJpbWl0aXZlLlN1YnRpdGxlLmV4dGVuZGBcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtpY29uICYmXG4gICAgICAgIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19