"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    flex-grow: ", ";\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ", ";\n    padding: 0 ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Column = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.grow;
}, function (props) {
  return props.theme.column.minWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentColumn =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentColumn, _React$PureComponent);

  function ContentColumn() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ContentColumn.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        children = _this$props.children,
        isLastItem = _this$props.isLastItem,
        grow = _this$props.grow,
        id = _this$props.id,
        className = _this$props.className;
    return _react["default"].createElement(Column, {
      grow: grow,
      isLastItem: isLastItem,
      className: _constants.classPrefix + "_column " + className,
      ref: function ref(elem) {
        _this.column = elem;
      },
      id: id
    }, _react["default"].Children.map(children, function (child, i) {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child; // If it's a React component (e.g. Content.Card)

      return _react["default"].cloneElement(child, {
        parent: _this.column,
        isLastItem: i === children.length - 1 || children.length === undefined
      });
    }));
  };

  return ContentColumn;
}(_react["default"].PureComponent);

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};
var _default = ContentColumn;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsInJlbmRlciIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImlkIiwiY2xhc3NOYW1lIiwiY2xhc3NQcmVmaXgiLCJlbGVtIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNLLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxDQURWLEVBT0ssVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxRQUF2QjtBQUFBLENBUFYsRUFRSyxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlHLGVBQWhCO0FBQUEsQ0FSVixDQUFaOztJQVdNQyxhOzs7Ozs7Ozs7OztTQUNKQyxNLEdBQUEsa0JBQVM7QUFBQTs7QUFBQSxzQkFPSCxLQUFLUCxLQVBGO0FBQUEsUUFFTFEsUUFGSyxlQUVMQSxRQUZLO0FBQUEsUUFHTEMsVUFISyxlQUdMQSxVQUhLO0FBQUEsUUFJTFIsSUFKSyxlQUlMQSxJQUpLO0FBQUEsUUFLTFMsRUFMSyxlQUtMQSxFQUxLO0FBQUEsUUFNTEMsU0FOSyxlQU1MQSxTQU5LO0FBUVAsV0FDRSxnQ0FBQyxNQUFEO0FBQ0UsTUFBQSxJQUFJLEVBQUVWLElBRFI7QUFFRSxNQUFBLFVBQVUsRUFBRVEsVUFGZDtBQUdFLE1BQUEsU0FBUyxFQUFLRyxzQkFBTCxnQkFBMkJELFNBSHRDO0FBSUUsTUFBQSxHQUFHLEVBQUUsYUFBQ0UsSUFBRCxFQUFVO0FBQ2IsUUFBQSxLQUFJLENBQUNWLE1BQUwsR0FBY1UsSUFBZDtBQUNELE9BTkg7QUFPRSxNQUFBLEVBQUUsRUFBRUg7QUFQTixPQVNHSSxrQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixVQUFDUyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsS0FBSyxDQUFDRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVAsQ0FGTSxDQUkxQzs7QUFDQSxhQUFPSCxrQkFBTU0sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLFFBQUFBLE1BQU0sRUFBRSxLQUFJLENBQUNsQixNQURrQjtBQUUvQk0sUUFBQUEsVUFBVSxFQUFFUyxDQUFDLEtBQUtWLFFBQVEsQ0FBQ2MsTUFBVCxHQUFrQixDQUF4QixJQUE2QmQsUUFBUSxDQUFDYyxNQUFULEtBQW9CQztBQUY5QixPQUExQixDQUFQO0FBSUQsS0FUQSxDQVRILENBREY7QUFzQkQsRzs7O0VBL0J5QlQsa0JBQU1VLGE7O0FBMENsQ2xCLGFBQWEsQ0FBQ21CLFlBQWQsR0FBNkI7QUFDM0JqQixFQUFBQSxRQUFRLEVBQUVlLFNBRGlCO0FBRTNCZCxFQUFBQSxVQUFVLEVBQUUsS0FGZTtBQUczQlIsRUFBQUEsSUFBSSxFQUFFLENBSHFCO0FBSTNCUyxFQUFBQSxFQUFFLEVBQUUsRUFKdUI7QUFLM0JDLEVBQUFBLFNBQVMsRUFBRTtBQUxnQixDQUE3QjtlQVFlTCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gcHJvcHMuZ3Jvd307XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2x1bW4ubWluV2lkdGh9O1xuICAgIHBhZGRpbmc6IDAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuY2xhc3MgQ29udGVudENvbHVtbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpc0xhc3RJdGVtLFxuICAgICAgZ3JvdyxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGdyb3c9e2dyb3d9XG4gICAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2NvbHVtbiAke2NsYXNzTmFtZX1gfVxuICAgICAgICByZWY9eyhlbGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoZS5nLiBDb250ZW50LkNhcmQpXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmNvbHVtbixcbiAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ3JvdzogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgZ3JvdzogMSxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENvbHVtbjtcbiJdfQ==