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
      asColumn = _ref.asColumn,
      id = _ref.id;
  return _react2.default.createElement(
    _contentInputRow2.default,
    { id: id, asColumn: asColumn, label: label, showError: false },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJhc0NvbHVtbiIsImlkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLE1BQ3pCQyxLQUR5QixRQUN6QkEsS0FEeUI7QUFBQSxNQUNsQkMsS0FEa0IsUUFDbEJBLEtBRGtCO0FBQUEsTUFDWEMsU0FEVyxRQUNYQSxTQURXO0FBQUEsTUFDQUMsUUFEQSxRQUNBQSxRQURBO0FBQUEsTUFDVUMsRUFEVixRQUNVQSxFQURWO0FBQUEsU0FHekI7QUFBQyw2QkFBRDtBQUFBLE1BQVUsSUFBSUEsRUFBZCxFQUFrQixVQUFVRCxRQUE1QixFQUFzQyxPQUFPSCxLQUE3QyxFQUFvRCxXQUFXLEtBQS9EO0FBQ0U7QUFBQTtBQUFBO0FBQ0dFLGtCQUFZQSxVQUFVRCxLQUFWLENBQVosR0FBK0JBO0FBRGxDO0FBREYsR0FIeUI7QUFBQSxDQUEzQjs7QUFrQkFGLG1CQUFtQk0sWUFBbkIsR0FBa0M7QUFDaENGLFlBQVUsS0FEc0I7QUFFaENILFNBQU8sRUFGeUI7QUFHaENDLFNBQU8sSUFIeUI7QUFJaENDLGFBQVc7QUFKcUIsQ0FBbEM7O2tCQU9lSCxrQiIsImZpbGUiOiJjb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbnB1dFJvdyBmcm9tICcuL2NvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IENvbnRlbnRSZWFkb25seVJvdyA9ICh7XG4gIGxhYmVsLCB2YWx1ZSwgbm9ybWFsaXplLCBhc0NvbHVtbiwgaWQsXG59KSA9PiAoXG4gIDxJbnB1dFJvdyBpZD17aWR9IGFzQ29sdW1uPXthc0NvbHVtbn0gbGFiZWw9e2xhYmVsfSBzaG93RXJyb3I9e2ZhbHNlfT5cbiAgICA8c3Bhbj5cbiAgICAgIHtub3JtYWxpemUgPyBub3JtYWxpemUodmFsdWUpIDogdmFsdWV9XG4gICAgPC9zcGFuPlxuICA8L0lucHV0Um93PlxuKTtcblxuQ29udGVudFJlYWRvbmx5Um93LnByb3BUeXBlcyA9IHtcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBub3JtYWxpemU6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuQ29udGVudFJlYWRvbmx5Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbDogJycsXG4gIHZhbHVlOiBudWxsLFxuICBub3JtYWxpemU6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UmVhZG9ubHlSb3c7XG4iXX0=