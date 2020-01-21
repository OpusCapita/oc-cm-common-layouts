"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height:100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledWrapper = _styledComponents["default"].div(_templateObject());

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return _react["default"].createElement(StyledWrapper, {
    className: _constants.classPrefix + "_wrapper " + className,
    id: id
  }, children);
};

Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: ''
};
var _default = Wrapper;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXlvdXQvbGF5b3V0LXdyYXBwZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlciIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQW5COztBQUdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJDLFNBQWpCLFFBQWlCQSxTQUFqQjtBQUFBLFNBQ2QsZ0NBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFLQyxzQkFBTCxpQkFBNEJELFNBRHZDO0FBRUUsSUFBQSxFQUFFLEVBQUVEO0FBRk4sS0FJR0QsUUFKSCxDQURjO0FBQUEsQ0FBaEI7O0FBY0FELE9BQU8sQ0FBQ0ssWUFBUixHQUF1QjtBQUNyQkosRUFBQUEsUUFBUSxFQUFFSyxTQURXO0FBRXJCSixFQUFBQSxFQUFFLEVBQUUsRUFGaUI7QUFHckJDLEVBQUFBLFNBQVMsRUFBRTtBQUhVLENBQXZCO2VBTWVILE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDoxMDB2aDtcbmA7XG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4sIGlkLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8U3R5bGVkV3JhcHBlclxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3dyYXBwZXIgJHtjbGFzc05hbWV9YH1cbiAgICBpZD17aWR9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkV3JhcHBlcj5cbik7XG5cbldyYXBwZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iXX0=