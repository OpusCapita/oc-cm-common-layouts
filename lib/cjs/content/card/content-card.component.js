"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../../constants");

var _contentCardHeader = _interopRequireDefault(require("./content-card-header.component"));

var Primitive = _interopRequireWildcard(require("../../primitives"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 calc(100% - ", "); \n  min-height: calc(100% - ", ");\n  display: flex;\n  flex-direction: column;\n "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-bottom: ", "; \n  flex: ", ";\n  width: 100%;\n  height: ", ";\n  flex-direction: column;\n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Card = (0, _styledComponents["default"])(Primitive.Block)(_templateObject(), function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
});

var ContentCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentCard, _React$PureComponent);

  function ContentCard(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "onExpandClick", function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          id = _this$props.id;

      _this.setState({
        isExpanded: !_this.state.isExpanded
      }, function () {
        if (onExpand) onExpand(id, _this.state.isExpanded);
      });
    });

    _this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable
    };
    return _this;
  }

  var _proto = ContentCard.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({
        isExpanded: nextProps.isExpanded
      });
    }
  };

  _proto.render = function render() {
    var cardClassPrefix = _constants.classPrefix + "_card";
    var _this$props2 = this.props,
        children = _this$props2.children,
        isLastItem = _this$props2.isLastItem,
        title = _this$props2.title,
        height = _this$props2.height,
        icon = _this$props2.icon,
        onIconClick = _this$props2.onIconClick,
        className = _this$props2.className,
        id = _this$props2.id,
        isExpandable = _this$props2.isExpandable,
        loading = _this$props2.loading,
        header = _this$props2.header;
    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;
    return _react["default"].createElement(Card, {
      height: height,
      className: cardClassPrefix + " " + className,
      isLastItem: isLastItem,
      id: id
    }, header && header, title && !header && _react["default"].createElement(_contentCardHeader["default"], {
      title: title,
      icon: icon,
      onIconClick: resolvedOnIconClick,
      isExpanded: this.state.isExpanded,
      isExpandable: isExpandable,
      loading: loading
    }), (!isExpandable || this.state.isExpanded) && _react["default"].createElement(CardContent, {
      className: cardClassPrefix + "_content"
    }, children));
  };

  return ContentCard;
}(_react["default"].PureComponent);

ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  onIconClick: null,
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined,
  loading: false,
  header: undefined
};
var _default = ContentCard;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQ2FyZCIsIlByaW1pdGl2ZSIsIkJsb2NrIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2xhc3NQcmVmaXgiLCJjaGlsZHJlbiIsInRpdGxlIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwiY2xhc3NOYW1lIiwibG9hZGluZyIsInJlc29sdmVkT25JY29uQ2xpY2siLCJvbkV4cGFuZENsaWNrIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsa0NBQU9DLFNBQVMsQ0FBQ0MsS0FBakIsQ0FBSCxvQkFFUyxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxVQUFOLEdBQW1CLENBQW5CLEdBQXVCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsV0FBeEM7QUFBQSxDQUZkLEVBR0EsVUFBQUgsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQixVQUFuQixHQUFnQyxVQUFyQztBQUFBLENBSEwsRUFLRSxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxNQUFOLEdBQWVKLEtBQUssQ0FBQ0ksTUFBckIs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QUFBLFNBQVMsRUFBS00sZUFBTDtBQUF0QixPQUF1REUsUUFBdkQsQ0FuQkwsQ0FERjtBQXVCRCxHOzs7RUFyRHVCUSxrQkFBTUMsYTs7QUEwRWhDckIsV0FBVyxDQUFDc0IsWUFBWixHQUEyQjtBQUN6QlYsRUFBQUEsUUFBUSxFQUFFVyxTQURlO0FBRXpCL0IsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJxQixFQUFBQSxLQUFLLEVBQUVVLFNBSGtCO0FBSXpCNUIsRUFBQUEsTUFBTSxFQUFFNEIsU0FKaUI7QUFLekJULEVBQUFBLElBQUksRUFBRVMsU0FMbUI7QUFNekJSLEVBQUFBLFdBQVcsRUFBRSxJQU5ZO0FBT3pCQyxFQUFBQSxTQUFTLEVBQUUsRUFQYztBQVF6QlosRUFBQUEsVUFBVSxFQUFFbUIsU0FSYTtBQVN6QmpCLEVBQUFBLFlBQVksRUFBRSxLQVRXO0FBVXpCTCxFQUFBQSxRQUFRLEVBQUVzQixTQVZlO0FBV3pCTixFQUFBQSxPQUFPLEVBQUUsS0FYZ0I7QUFZekJsQixFQUFBQSxNQUFNLEVBQUV3QjtBQVppQixDQUEzQjtlQWVldkIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChQcmltaXRpdmUuQmxvY2spYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jbGFzcyBDb250ZW50Q2FyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNFeHBhbmRlZDogISFwcm9wcy5pc0V4cGFuZGVkICYmICEhcHJvcHMuaXNFeHBhbmRhYmxlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaXNFeHBhbmRlZCAhPT0gdGhpcy5wcm9wcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogbmV4dFByb3BzLmlzRXhwYW5kZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25FeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uRXhwYW5kLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogIXRoaXMuc3RhdGUuaXNFeHBhbmRlZCB9LCAoKSA9PiB7XG4gICAgICBpZiAob25FeHBhbmQpIG9uRXhwYW5kKGlkLCB0aGlzLnN0YXRlLmlzRXhwYW5kZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIHRpdGxlLCBoZWlnaHQsIGljb24sIG9uSWNvbkNsaWNrLCBjbGFzc05hbWUsIGlkLCBpc0V4cGFuZGFibGUsXG4gICAgICBsb2FkaW5nLCBoZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZXNvbHZlZE9uSWNvbkNsaWNrID0gaXNFeHBhbmRhYmxlID8gdGhpcy5vbkV4cGFuZENsaWNrIDogb25JY29uQ2xpY2s7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICB7dGl0bGUgJiYgIWhlYWRlclxuICAgICAgICAmJiAoXG4gICAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBvbkljb25DbGljaz17cmVzb2x2ZWRPbkljb25DbGlja31cbiAgICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUuaXNFeHBhbmRlZH1cbiAgICAgICAgICAgIGlzRXhwYW5kYWJsZT17aXNFeHBhbmRhYmxlfVxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKVxuICAgICAgICAmJiA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiBudWxsLFxuICBjbGFzc05hbWU6ICcnLFxuICBpc0V4cGFuZGVkOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIG9uRXhwYW5kOiB1bmRlZmluZWQsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBoZWFkZXI6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19