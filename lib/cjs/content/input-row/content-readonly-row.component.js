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
      value = _ref.value;
  return _react2.default.createElement(
    _contentInputRow2.default,
    { label: label, showError: false },
    _react2.default.createElement(
      'span',
      null,
      value
    )
  );
}; /* eslint-disable no-confusing-arrow */


ContentReadonlyRow.defaultProps = {
  label: '',
  value: null
};

exports.default = ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsU0FDekI7QUFBQyw2QkFBRDtBQUFBLE1BQVUsT0FBT0QsS0FBakIsRUFBd0IsV0FBVyxLQUFuQztBQUNFO0FBQUE7QUFBQTtBQUFPQztBQUFQO0FBREYsR0FEeUI7QUFBQSxDQUEzQixDLENBTEE7OztBQWdCQUYsbUJBQW1CRyxZQUFuQixHQUFrQztBQUNoQ0YsU0FBTyxFQUR5QjtBQUVoQ0MsU0FBTztBQUZ5QixDQUFsQzs7a0JBS2VGLGtCIiwiZmlsZSI6ImNvbnRlbnQtcmVhZG9ubHktcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoeyBsYWJlbCwgdmFsdWUgfSkgPT4gKFxuICA8SW5wdXRSb3cgbGFiZWw9e2xhYmVsfSBzaG93RXJyb3I9e2ZhbHNlfT5cbiAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICA8L0lucHV0Um93PlxuKTtcblxuQ29udGVudFJlYWRvbmx5Um93LnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59O1xuXG5Db250ZW50UmVhZG9ubHlSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHZhbHVlOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJlYWRvbmx5Um93O1xuIl19