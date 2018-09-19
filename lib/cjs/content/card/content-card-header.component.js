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


var CardIcon = Primitive.BorderlessButton.extend(_templateObject, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = Primitive.Subtitle.extend(_templateObject2);

var CardHeader = _styledComponents2.default.header(_templateObject3, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

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
      resolvedIcon && _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsInByb3BzIiwidGhlbWUiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJzdHlsZWQiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiZ2V0RXhwYW5kZWRJY29uIiwiaXNFeHBhbmRlZCIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsIm9uSWNvbkNsaWNrIiwiaXNFeHBhbmRhYmxlIiwiY2FyZENsYXNzUHJlZml4IiwiY2xhc3NQcmVmaXgiLCJyZXNvbHZlZEljb24iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7OztBQUZaOzs7QUFJQSxJQUFNQyxXQUFXRCxVQUFVRSxnQkFBVixDQUEyQkMsTUFBdEMsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUVLO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRkwsRUFNUTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsTUFBbkIsQ0FBMEJELE1BQW5DO0FBQUEsQ0FOUixFQU9PO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUFuQixDQUEwQkQsTUFBbkM7QUFBQSxDQVBQLENBQU47O0FBV0EsSUFBTUUsWUFBWVQsVUFBVVUsUUFBVixDQUFtQlAsTUFBL0Isa0JBQU47O0FBR0EsSUFBTVEsYUFBYUMsMkJBQU9OLE1BQXBCLG1CQUNNO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRE4sRUFJYTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWVEsV0FBckI7QUFBQSxDQUpiLENBQU47O0lBUU1DLGlCOzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGUsR0FBa0I7QUFBQSxhQUFRLE1BQUtYLEtBQUwsQ0FBV1ksVUFBWCxHQUF3Qiw4QkFBQyxlQUFELE9BQXhCLEdBQXNDLDhCQUFDLGNBQUQsT0FBOUM7QUFBQSxLOzs7OEJBRWxCQyxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS2IsS0FIRjtBQUFBLFFBRUxjLElBRkssVUFFTEEsSUFGSztBQUFBLFFBRUNDLEtBRkQsVUFFQ0EsS0FGRDtBQUFBLFFBRVFDLFdBRlIsVUFFUUEsV0FGUjtBQUFBLFFBRXFCSixVQUZyQixVQUVxQkEsVUFGckI7QUFBQSxRQUVpQ0ssWUFGakMsVUFFaUNBLFlBRmpDOztBQUlQLFFBQU1DLGtCQUFxQkMsc0JBQXJCLFVBQU47QUFDQSxRQUFNQyxlQUFlSCxlQUFlLEtBQUtOLGVBQUwsQ0FBcUJDLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ksZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlIO0FBQVosT0FERjtBQUVHSyxzQkFDRDtBQUFDLGdCQUFEO0FBQUEsVUFBVSxTQUFTSixXQUFuQixFQUFnQyxVQUFVLENBQUNBLFdBQTNDO0FBQXlESTtBQUF6RDtBQUhGLEtBREY7QUFPRCxHOzs7RUFqQjZCQyxnQkFBTUMsYTs7QUE0QnRDWixrQkFBa0JhLFlBQWxCLEdBQWlDO0FBQy9CUixTQUFPUyxTQUR3QjtBQUUvQlYsUUFBTVUsU0FGeUI7QUFHL0JSLGVBQWFRLFNBSGtCO0FBSS9CUCxnQkFBYztBQUppQixDQUFqQzs7a0JBT2VQLGlCIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGYVBsdXMgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3BsdXMnO1xuaW1wb3J0IEZhTWludXMgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL21pbnVzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZEljb24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IFByaW1pdGl2ZS5TdWJ0aXRsZS5leHRlbmRgXG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cblxuY2xhc3MgQ29udGVudENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0RXhwYW5kZWRJY29uID0gKCkgPT4gKCh0aGlzLnByb3BzLmlzRXhwYW5kZWQgPyA8RmFNaW51cyAvPiA6IDxGYVBsdXMgLz4pKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWNvbiwgdGl0bGUsIG9uSWNvbkNsaWNrLCBpc0V4cGFuZGVkLCBpc0V4cGFuZGFibGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHJlc29sdmVkSWNvbiA9IGlzRXhwYW5kYWJsZSA/IHRoaXMuZ2V0RXhwYW5kZWRJY29uKGlzRXhwYW5kZWQpIDogaWNvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICAgIDxDYXJkVGl0bGU+e3RpdGxlfTwvQ2FyZFRpdGxlPlxuICAgICAgICB7cmVzb2x2ZWRJY29uICYmXG4gICAgICAgIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19