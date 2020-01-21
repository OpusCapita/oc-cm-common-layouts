"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fa = require("react-icons/fa");

var _constants = require("../../constants");

var Primitive = _interopRequireWildcard(require("../../primitives"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  align-items: center;\n  display: flex;\n  margin-bottom: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ", ";\n    width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var CardIcon = (0, _styledComponents["default"])(Primitive.BorderlessButton)(_templateObject(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});
var CardTitle = (0, _styledComponents["default"])(Primitive.Subtitle)(_templateObject2());

var CardHeader = _styledComponents["default"].header(_templateObject3(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

var ContentCardHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentCardHeader, _React$PureComponent);

  function ContentCardHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getExpandedIcon", function () {
      return _this.props.isExpanded ? _react["default"].createElement(_fa.FaMinus, null) : _react["default"].createElement(_fa.FaPlus, null);
    });

    return _this;
  }

  var _proto = ContentCardHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        icon = _this$props.icon,
        title = _this$props.title,
        onIconClick = _this$props.onIconClick,
        isExpanded = _this$props.isExpanded,
        isExpandable = _this$props.isExpandable,
        loading = _this$props.loading;
    var cardClassPrefix = _constants.classPrefix + "_card";
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;
    return _react["default"].createElement(CardHeader, {
      className: cardClassPrefix + "_header"
    }, _react["default"].createElement(CardTitle, null, title), loading && _react["default"].createElement(Primitive.Spinner, null), resolvedIcon && _react["default"].createElement(CardIcon, {
      onClick: onIconClick,
      disabled: !onIconClick
    }, resolvedIcon));
  };

  return ContentCardHeader;
}(_react["default"].PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false,
  loading: false
};
var _default = ContentCardHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNhcmRJY29uIiwiUHJpbWl0aXZlIiwiQm9yZGVybGVzc0J1dHRvbiIsInByb3BzIiwidGhlbWUiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJzdHlsZWQiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiaXNFeHBhbmRlZCIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsIm9uSWNvbkNsaWNrIiwiaXNFeHBhbmRhYmxlIiwibG9hZGluZyIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwicmVzb2x2ZWRJY29uIiwiZ2V0RXhwYW5kZWRJY29uIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLGtDQUFPQyxTQUFTLENBQUNDLGdCQUFqQixDQUFILG9CQUNGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBdkI7QUFBQSxDQURILEVBRUgsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUF2QjtBQUFBLENBRkYsRUFNQSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUE5QjtBQUFBLENBTkwsRUFPRCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUE5QjtBQUFBLENBUEosQ0FBZDtBQVdBLElBQU1FLFNBQVMsR0FBRyxrQ0FBT1AsU0FBUyxDQUFDUSxRQUFqQixDQUFILG9CQUFmOztBQUlBLElBQU1DLFVBQVUsR0FBR0MsNkJBQU9OLE1BQVYscUJBQ0osVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUF2QjtBQUFBLENBREQsRUFJRyxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlRLFdBQWhCO0FBQUEsQ0FKUixDQUFoQjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7Ozs7O3NFQUNjO0FBQUEsYUFBUSxNQUFLVixLQUFMLENBQVdXLFVBQVgsR0FBd0IsZ0NBQUMsV0FBRCxPQUF4QixHQUFzQyxnQ0FBQyxVQUFELE9BQTlDO0FBQUEsSzs7Ozs7OztTQUVsQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBR0gsS0FBS1osS0FIRjtBQUFBLFFBRUxhLElBRkssZUFFTEEsSUFGSztBQUFBLFFBRUNDLEtBRkQsZUFFQ0EsS0FGRDtBQUFBLFFBRVFDLFdBRlIsZUFFUUEsV0FGUjtBQUFBLFFBRXFCSixVQUZyQixlQUVxQkEsVUFGckI7QUFBQSxRQUVpQ0ssWUFGakMsZUFFaUNBLFlBRmpDO0FBQUEsUUFFK0NDLE9BRi9DLGVBRStDQSxPQUYvQztBQUlQLFFBQU1DLGVBQWUsR0FBTUMsc0JBQU4sVUFBckI7QUFDQSxRQUFNQyxZQUFZLEdBQUdKLFlBQVksR0FBRyxLQUFLSyxlQUFMLENBQXFCVixVQUFyQixDQUFILEdBQXNDRSxJQUF2RTtBQUVBLFdBQ0UsZ0NBQUMsVUFBRDtBQUFZLE1BQUEsU0FBUyxFQUFLSyxlQUFMO0FBQXJCLE9BQ0UsZ0NBQUMsU0FBRCxRQUFZSixLQUFaLENBREYsRUFFR0csT0FBTyxJQUFJLGdDQUFDLFNBQUQsQ0FBVyxPQUFYLE9BRmQsRUFHR0csWUFBWSxJQUNWLGdDQUFDLFFBQUQ7QUFBVSxNQUFBLE9BQU8sRUFBRUwsV0FBbkI7QUFBZ0MsTUFBQSxRQUFRLEVBQUUsQ0FBQ0E7QUFBM0MsT0FBeURLLFlBQXpELENBSkwsQ0FERjtBQVFELEc7OztFQWxCNkJFLGtCQUFNQyxhOztBQThCdENiLGlCQUFpQixDQUFDYyxZQUFsQixHQUFpQztBQUMvQlYsRUFBQUEsS0FBSyxFQUFFVyxTQUR3QjtBQUUvQlosRUFBQUEsSUFBSSxFQUFFWSxTQUZ5QjtBQUcvQlYsRUFBQUEsV0FBVyxFQUFFVSxTQUhrQjtBQUkvQlQsRUFBQUEsWUFBWSxFQUFFLEtBSmlCO0FBSy9CQyxFQUFBQSxPQUFPLEVBQUU7QUFMc0IsQ0FBakM7ZUFRZVAsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmFQbHVzLCBGYU1pbnVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IHN0eWxlZChQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZChQcmltaXRpdmUuU3VidGl0bGUpYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSwgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtsb2FkaW5nICYmIDxQcmltaXRpdmUuU3Bpbm5lciAvPn1cbiAgICAgICAge3Jlc29sdmVkSWNvblxuICAgICAgICAmJiA8Q2FyZEljb24gb25DbGljaz17b25JY29uQ2xpY2t9IGRpc2FibGVkPXshb25JY29uQ2xpY2t9PntyZXNvbHZlZEljb259PC9DYXJkSWNvbj59XG4gICAgICA8L0NhcmRIZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19