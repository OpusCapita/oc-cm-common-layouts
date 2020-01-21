"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// App imports
var HeaderCustom = function HeaderCustom(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return _react["default"].createElement(_.Primitive.Header, {
    className: _constants.classPrefix + "_header " + className,
    id: id
  }, children);
};

HeaderCustom.defaultProps = {
  children: null,
  id: '',
  className: ''
};
var _default = HeaderCustom;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWN1c3RvbS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlckN1c3RvbSIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUZBO0FBSUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxFQUFiLFFBQWFBLEVBQWI7QUFBQSxNQUFpQkMsU0FBakIsUUFBaUJBLFNBQWpCO0FBQUEsU0FDbkIsZ0NBQUMsV0FBRCxDQUFXLE1BQVg7QUFBa0IsSUFBQSxTQUFTLEVBQUtDLHNCQUFMLGdCQUEyQkQsU0FBdEQ7QUFBbUUsSUFBQSxFQUFFLEVBQUVEO0FBQXZFLEtBQTRFRCxRQUE1RSxDQURtQjtBQUFBLENBQXJCOztBQVVBRCxZQUFZLENBQUNLLFlBQWIsR0FBNEI7QUFDMUJKLEVBQUFBLFFBQVEsRUFBRSxJQURnQjtBQUUxQkMsRUFBQUEsRUFBRSxFQUFFLEVBRnNCO0FBRzFCQyxFQUFBQSxTQUFTLEVBQUU7QUFIZSxDQUE1QjtlQU1lSCxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlIH0gZnJvbSAnLi4nO1xuXG5jb25zdCBIZWFkZXJDdXN0b20gPSAoeyBjaGlsZHJlbiwgaWQsIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxQcmltaXRpdmUuSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlciAke2NsYXNzTmFtZX1gfSBpZD17aWR9PntjaGlsZHJlbn08L1ByaW1pdGl2ZS5IZWFkZXI+XG4pO1xuXG5IZWFkZXJDdXN0b20ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5IZWFkZXJDdXN0b20uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ3VzdG9tO1xuIl19