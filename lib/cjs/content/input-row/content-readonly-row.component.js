'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contentInputRow = require('./content-input-row.component');

var _contentInputRow2 = _interopRequireDefault(_contentInputRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn;
  return _react2.default.createElement(
    _contentInputRow2.default,
    { asColumn: asColumn, label: label, showError: false },
    _react2.default.createElement(
      'span',
      null,
      normalize ? normalize(value) : value
    )
  );
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};

exports.default = ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJhc0NvbHVtbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUN6QkMsS0FEeUIsUUFDekJBLEtBRHlCO0FBQUEsTUFDbEJDLEtBRGtCLFFBQ2xCQSxLQURrQjtBQUFBLE1BQ1hDLFNBRFcsUUFDWEEsU0FEVztBQUFBLE1BQ0FDLFFBREEsUUFDQUEsUUFEQTtBQUFBLFNBR3pCO0FBQUMsNkJBQUQ7QUFBQSxNQUFVLFVBQVVBLFFBQXBCLEVBQThCLE9BQU9ILEtBQXJDLEVBQTRDLFdBQVcsS0FBdkQ7QUFDRTtBQUFBO0FBQUE7QUFDR0Usa0JBQVlBLFVBQVVELEtBQVYsQ0FBWixHQUErQkE7QUFEbEM7QUFERixHQUh5QjtBQUFBLENBQTNCOztBQWlCQUYsbUJBQW1CSyxZQUFuQixHQUFrQztBQUNoQ0QsWUFBVSxLQURzQjtBQUVoQ0gsU0FBTyxFQUZ5QjtBQUdoQ0MsU0FBTyxJQUh5QjtBQUloQ0MsYUFBVztBQUpxQixDQUFsQzs7a0JBT2VILGtCIiwiZmlsZSI6ImNvbnRlbnQtcmVhZG9ubHktcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0Um93IGZyb20gJy4vY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50JztcblxuY29uc3QgQ29udGVudFJlYWRvbmx5Um93ID0gKHtcbiAgbGFiZWwsIHZhbHVlLCBub3JtYWxpemUsIGFzQ29sdW1uLFxufSkgPT4gKFxuICA8SW5wdXRSb3cgYXNDb2x1bW49e2FzQ29sdW1ufSBsYWJlbD17bGFiZWx9IHNob3dFcnJvcj17ZmFsc2V9PlxuICAgIDxzcGFuPlxuICAgICAge25vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZX1cbiAgICA8L3NwYW4+XG4gIDwvSW5wdXRSb3c+XG4pO1xuXG5Db250ZW50UmVhZG9ubHlSb3cucHJvcFR5cGVzID0ge1xuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5ib29sXSksXG4gIG5vcm1hbGl6ZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5Db250ZW50UmVhZG9ubHlSb3cuZGVmYXVsdFByb3BzID0ge1xuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsOiAnJyxcbiAgdmFsdWU6IG51bGwsXG4gIG5vcm1hbGl6ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSZWFkb25seVJvdztcbiJdfQ==