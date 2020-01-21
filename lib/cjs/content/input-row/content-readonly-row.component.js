"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _contentInputRow = _interopRequireDefault(require("./content-input-row.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutPropertiesLoose(_ref, ["label", "value", "normalize", "asColumn", "id"]);

  return _react["default"].createElement(_contentInputRow["default"], _extends({
    id: id + "-readonly-row",
    asColumn: asColumn,
    label: label,
    showError: false
  }, rest), _react["default"].createElement("span", {
    id: id
  }, normalize ? normalize(value) : value));
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};
var _default = ContentReadonlyRow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJhc0NvbHVtbiIsImlkIiwicmVzdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFDekJDLEtBRHlCLFFBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxLQURrQixRQUNsQkEsS0FEa0I7QUFBQSxNQUNYQyxTQURXLFFBQ1hBLFNBRFc7QUFBQSxNQUNBQyxRQURBLFFBQ0FBLFFBREE7QUFBQSxNQUNVQyxFQURWLFFBQ1VBLEVBRFY7QUFBQSxNQUNpQkMsSUFEakI7O0FBQUEsU0FHekIsZ0NBQUMsMkJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBS0QsRUFBTCxrQkFESjtBQUVFLElBQUEsUUFBUSxFQUFFRCxRQUZaO0FBR0UsSUFBQSxLQUFLLEVBQUVILEtBSFQ7QUFJRSxJQUFBLFNBQVMsRUFBRTtBQUpiLEtBS01LLElBTE4sR0FPRTtBQUFNLElBQUEsRUFBRSxFQUFFRDtBQUFWLEtBQ0dGLFNBQVMsR0FBR0EsU0FBUyxDQUFDRCxLQUFELENBQVosR0FBc0JBLEtBRGxDLENBUEYsQ0FIeUI7QUFBQSxDQUEzQjs7QUF3QkFGLGtCQUFrQixDQUFDTyxZQUFuQixHQUFrQztBQUNoQ0gsRUFBQUEsUUFBUSxFQUFFLEtBRHNCO0FBRWhDSCxFQUFBQSxLQUFLLEVBQUUsRUFGeUI7QUFHaENDLEVBQUFBLEtBQUssRUFBRSxJQUh5QjtBQUloQ0MsRUFBQUEsU0FBUyxFQUFFO0FBSnFCLENBQWxDO2VBT2VILGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoe1xuICBsYWJlbCwgdmFsdWUsIG5vcm1hbGl6ZSwgYXNDb2x1bW4sIGlkLCAuLi5yZXN0XG59KSA9PiAoXG4gIDxJbnB1dFJvd1xuICAgIGlkPXtgJHtpZH0tcmVhZG9ubHktcm93YH1cbiAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgbGFiZWw9e2xhYmVsfVxuICAgIHNob3dFcnJvcj17ZmFsc2V9XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8c3BhbiBpZD17aWR9PlxuICAgICAge25vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZX1cbiAgICA8L3NwYW4+XG4gIDwvSW5wdXRSb3c+XG4pO1xuXG5Db250ZW50UmVhZG9ubHlSb3cucHJvcFR5cGVzID0ge1xuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5ib29sXSksXG4gIG5vcm1hbGl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5Db250ZW50UmVhZG9ubHlSb3cuZGVmYXVsdFByb3BzID0ge1xuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsOiAnJyxcbiAgdmFsdWU6IG51bGwsXG4gIG5vcm1hbGl6ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSZWFkb25seVJvdztcbiJdfQ==