'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n'], ['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

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

var _spinner = require('react-icons/lib/fa/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

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


var Spinner = (0, _styledComponents2.default)(_spinner2.default)(_templateObject);
var CardIcon = (0, _styledComponents2.default)(Primitive.BorderlessButton)(_templateObject2, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = (0, _styledComponents2.default)(Primitive.Subtitle)(_templateObject3);

var CardHeader = _styledComponents2.default.header(_templateObject4, function (props) {
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
        isExpandable = _props.isExpandable,
        loading = _props.loading;

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
      loading && _react2.default.createElement(Spinner, null),
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
  isExpandable: false,
  loading: false
};

exports.default = ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByaW1pdGl2ZSIsIlNwaW5uZXIiLCJGYVNwaW5uZXIiLCJDYXJkSWNvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiYnV0dG9uIiwiQ2FyZFRpdGxlIiwiU3VidGl0bGUiLCJDYXJkSGVhZGVyIiwic3R5bGVkIiwiZ3V0dGVyV2lkdGgiLCJDb250ZW50Q2FyZEhlYWRlciIsImdldEV4cGFuZGVkSWNvbiIsImlzRXhwYW5kZWQiLCJyZW5kZXIiLCJpY29uIiwidGl0bGUiLCJvbkljb25DbGljayIsImlzRXhwYW5kYWJsZSIsImxvYWRpbmciLCJjYXJkQ2xhc3NQcmVmaXgiLCJjbGFzc1ByZWZpeCIsInJlc29sdmVkSWNvbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7O0lBQVlBLFM7Ozs7Ozs7Ozs7Ozs7O0FBRlo7OztBQUlBLElBQU1DLFVBQVUsZ0NBQU9DLGlCQUFQLENBQVYsaUJBQU47QUFVQSxJQUFNQyxXQUFXLGdDQUFPSCxVQUFVSSxnQkFBakIsQ0FBWCxtQkFDTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUROLEVBRUs7QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FGTCxFQU1RO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUFuQixDQUEwQkQsTUFBbkM7QUFBQSxDQU5SLEVBT087QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUFuQztBQUFBLENBUFAsQ0FBTjs7QUFXQSxJQUFNRSxZQUFZLGdDQUFPVixVQUFVVyxRQUFqQixDQUFaLGtCQUFOOztBQUlBLElBQU1DLGFBQWFDLDJCQUFPTixNQUFwQixtQkFDTTtBQUFBLFNBQVNGLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUROLEVBSWE7QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlRLFdBQXJCO0FBQUEsQ0FKYixDQUFOOztJQVFNQyxpQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCO0FBQUEsYUFBUSxNQUFLWCxLQUFMLENBQVdZLFVBQVgsR0FBd0IsOEJBQUMsZUFBRCxPQUF4QixHQUFzQyw4QkFBQyxjQUFELE9BQTlDO0FBQUEsSzs7OzhCQUVsQkMsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtiLEtBSEY7QUFBQSxRQUVMYyxJQUZLLFVBRUxBLElBRks7QUFBQSxRQUVDQyxLQUZELFVBRUNBLEtBRkQ7QUFBQSxRQUVRQyxXQUZSLFVBRVFBLFdBRlI7QUFBQSxRQUVxQkosVUFGckIsVUFFcUJBLFVBRnJCO0FBQUEsUUFFaUNLLFlBRmpDLFVBRWlDQSxZQUZqQztBQUFBLFFBRStDQyxPQUYvQyxVQUUrQ0EsT0FGL0M7O0FBSVAsUUFBTUMsa0JBQXFCQyxzQkFBckIsVUFBTjtBQUNBLFFBQU1DLGVBQWVKLGVBQWUsS0FBS04sZUFBTCxDQUFxQkMsVUFBckIsQ0FBZixHQUFrREUsSUFBdkU7O0FBRUEsV0FDRTtBQUFDLGdCQUFEO0FBQUEsUUFBWSxXQUFjSyxlQUFkLFlBQVo7QUFDRTtBQUFDLGlCQUFEO0FBQUE7QUFBWUo7QUFBWixPQURGO0FBRUdHLGlCQUFXLDhCQUFDLE9BQUQsT0FGZDtBQUdHRyxzQkFDRDtBQUFDLGdCQUFEO0FBQUEsVUFBVSxTQUFTTCxXQUFuQixFQUFnQyxVQUFVLENBQUNBLFdBQTNDO0FBQXlESztBQUF6RDtBQUpGLEtBREY7QUFRRCxHOzs7RUFsQjZCQyxnQkFBTUMsYTs7QUE4QnRDYixrQkFBa0JjLFlBQWxCLEdBQWlDO0FBQy9CVCxTQUFPVSxTQUR3QjtBQUUvQlgsUUFBTVcsU0FGeUI7QUFHL0JULGVBQWFTLFNBSGtCO0FBSS9CUixnQkFBYyxLQUppQjtBQUsvQkMsV0FBUztBQUxzQixDQUFqQzs7a0JBUWVSLGlCIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGYVBsdXMgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3BsdXMnO1xuaW1wb3J0IEZhTWludXMgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL21pbnVzJztcbmltcG9ydCBGYVNwaW5uZXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3NwaW5uZXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkKEZhU3Bpbm5lcilgXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5gO1xuY29uc3QgQ2FyZEljb24gPSBzdHlsZWQoUHJpbWl0aXZlLkJvcmRlcmxlc3NCdXR0b24pYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBzdmcge1xuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB9XG5gO1xuXG5jb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQoUHJpbWl0aXZlLlN1YnRpdGxlKWBcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cblxuY2xhc3MgQ29udGVudENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0RXhwYW5kZWRJY29uID0gKCkgPT4gKCh0aGlzLnByb3BzLmlzRXhwYW5kZWQgPyA8RmFNaW51cyAvPiA6IDxGYVBsdXMgLz4pKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWNvbiwgdGl0bGUsIG9uSWNvbkNsaWNrLCBpc0V4cGFuZGVkLCBpc0V4cGFuZGFibGUsIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHJlc29sdmVkSWNvbiA9IGlzRXhwYW5kYWJsZSA/IHRoaXMuZ2V0RXhwYW5kZWRJY29uKGlzRXhwYW5kZWQpIDogaWNvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICAgIDxDYXJkVGl0bGU+e3RpdGxlfTwvQ2FyZFRpdGxlPlxuICAgICAgICB7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAge3Jlc29sdmVkSWNvbiAmJlxuICAgICAgICA8Q2FyZEljb24gb25DbGljaz17b25JY29uQ2xpY2t9IGRpc2FibGVkPXshb25JY29uQ2xpY2t9PntyZXNvbHZlZEljb259PC9DYXJkSWNvbj59XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19