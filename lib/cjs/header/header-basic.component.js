"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-basis: ", ";\n  flex-shrink: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display:flex;\n  align-items: center;\n  height: ", ";\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var HeaderSection = _styledComponents["default"].section(_templateObject(), function (props) {
  return props.theme.header.height;
});

var CenterSection = (0, _styledComponents["default"])(HeaderSection)(_templateObject2());
var SideSection = (0, _styledComponents["default"])(HeaderSection)(_templateObject3(), function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return _react["default"].createElement(_index.Primitive.Header, {
    id: id,
    className: _constants.classPrefix + "_header " + className
  }, _react["default"].createElement(SideSection, {
    className: _constants.classPrefix + "_header_section left",
    basis: sideSectionBasis
  }, left), _react["default"].createElement(CenterSection, {
    className: _constants.classPrefix + "_header_section center"
  }, center), _react["default"].createElement(SideSection, {
    className: _constants.classPrefix + "_header_section right",
    basis: sideSectionBasis
  }, right));
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px'
};
var _default = HeaderBasic;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyIiwiaGVpZ2h0IiwiQ2VudGVyU2VjdGlvbiIsIlNpZGVTZWN0aW9uIiwiYmFzaXMiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImNsYXNzTmFtZSIsImlkIiwic2lkZVNlY3Rpb25CYXNpcyIsImNsYXNzUHJlZml4IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxPQUFWLG9CQUdQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBdkI7QUFBQSxDQUhFLENBQW5COztBQVlBLElBQU1DLGFBQWEsR0FBRyxrQ0FBT1AsYUFBUCxDQUFILG9CQUFuQjtBQUlBLElBQU1RLFdBQVcsR0FBRyxrQ0FBT1IsYUFBUCxDQUFILHFCQUNELFVBQUFHLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLEtBQVY7QUFBQSxDQURKLENBQWpCOztBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFDbEJDLElBRGtCLFFBQ2xCQSxJQURrQjtBQUFBLE1BQ1pDLE1BRFksUUFDWkEsTUFEWTtBQUFBLE1BQ0pDLEtBREksUUFDSkEsS0FESTtBQUFBLE1BQ0dDLFNBREgsUUFDR0EsU0FESDtBQUFBLE1BQ2NDLEVBRGQsUUFDY0EsRUFEZDtBQUFBLE1BQ2tCQyxnQkFEbEIsUUFDa0JBLGdCQURsQjtBQUFBLFNBR2xCLGdDQUFDLGdCQUFELENBQVcsTUFBWDtBQUFrQixJQUFBLEVBQUUsRUFBRUQsRUFBdEI7QUFBMEIsSUFBQSxTQUFTLEVBQUtFLHNCQUFMLGdCQUEyQkg7QUFBOUQsS0FDRSxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUtHLHNCQUFMLHlCQUF0QjtBQUE4RCxJQUFBLEtBQUssRUFBRUQ7QUFBckUsS0FBd0ZMLElBQXhGLENBREYsRUFFRSxnQ0FBQyxhQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUtNLHNCQUFMO0FBQXhCLEtBQW1FTCxNQUFuRSxDQUZGLEVBR0UsZ0NBQUMsV0FBRDtBQUFhLElBQUEsU0FBUyxFQUFLSyxzQkFBTCwwQkFBdEI7QUFBK0QsSUFBQSxLQUFLLEVBQUVEO0FBQXRFLEtBQXlGSCxLQUF6RixDQUhGLENBSGtCO0FBQUEsQ0FBcEI7O0FBbUJBSCxXQUFXLENBQUNRLFlBQVosR0FBMkI7QUFDekJQLEVBQUFBLElBQUksRUFBRVEsU0FEbUI7QUFFekJQLEVBQUFBLE1BQU0sRUFBRU8sU0FGaUI7QUFHekJOLEVBQUFBLEtBQUssRUFBRU0sU0FIa0I7QUFJekJMLEVBQUFBLFNBQVMsRUFBRSxFQUpjO0FBS3pCQyxFQUFBQSxFQUFFLEVBQUUsRUFMcUI7QUFNekJDLEVBQUFBLGdCQUFnQixFQUFFO0FBTk8sQ0FBM0I7ZUFTZU4sVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICAmLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgJi5yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuYDtcblxuY29uc3QgQ2VudGVyU2VjdGlvbiA9IHN0eWxlZChIZWFkZXJTZWN0aW9uKWBcbiAgZmxleC1ncm93OiAxO1xuYDtcblxuY29uc3QgU2lkZVNlY3Rpb24gPSBzdHlsZWQoSGVhZGVyU2VjdGlvbilgXG4gIGZsZXgtYmFzaXM6ICR7cHJvcHMgPT4gcHJvcHMuYmFzaXN9O1xuICBmbGV4LXNocmluazogMTtcbmA7XG5cbmNvbnN0IEhlYWRlckJhc2ljID0gKHtcbiAgbGVmdCwgY2VudGVyLCByaWdodCwgY2xhc3NOYW1lLCBpZCwgc2lkZVNlY3Rpb25CYXNpcyxcbn0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e2xlZnR9PC9TaWRlU2VjdGlvbj5cbiAgICA8Q2VudGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvQ2VudGVyU2VjdGlvbj5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e3JpZ2h0fTwvU2lkZVNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2VudGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICByaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2lkZVNlY3Rpb25CYXNpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIHNpZGVTZWN0aW9uQmFzaXM6ICcyMDBweCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXNpYztcbiJdfQ==