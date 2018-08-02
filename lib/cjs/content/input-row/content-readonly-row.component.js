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
      normalize = _ref.normalize;
  return _react2.default.createElement(
    _contentInputRow2.default,
    { label: label, showError: false },
    _react2.default.createElement(
      'span',
      null,
      normalize ? normalize(value) : value
    )
  );
};

ContentReadonlyRow.defaultProps = {
  label: '',
  value: null,
  normalize: null
};

exports.default = ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsTUFBaUJDLFNBQWpCLFFBQWlCQSxTQUFqQjtBQUFBLFNBQ3pCO0FBQUMsNkJBQUQ7QUFBQSxNQUFVLE9BQU9GLEtBQWpCLEVBQXdCLFdBQVcsS0FBbkM7QUFDRTtBQUFBO0FBQUE7QUFDR0Usa0JBQVlBLFVBQVVELEtBQVYsQ0FBWixHQUErQkE7QUFEbEM7QUFERixHQUR5QjtBQUFBLENBQTNCOztBQWNBRixtQkFBbUJJLFlBQW5CLEdBQWtDO0FBQ2hDSCxTQUFPLEVBRHlCO0FBRWhDQyxTQUFPLElBRnlCO0FBR2hDQyxhQUFXO0FBSHFCLENBQWxDOztrQkFNZUgsa0IiLCJmaWxlIjoiY29udGVudC1yZWFkb25seS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoeyBsYWJlbCwgdmFsdWUsIG5vcm1hbGl6ZSB9KSA9PiAoXG4gIDxJbnB1dFJvdyBsYWJlbD17bGFiZWx9IHNob3dFcnJvcj17ZmFsc2V9PlxuICAgIDxzcGFuPlxuICAgICAge25vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZX1cbiAgICA8L3NwYW4+XG4gIDwvSW5wdXRSb3c+XG4pO1xuXG5Db250ZW50UmVhZG9ubHlSb3cucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBub3JtYWxpemU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQ29udGVudFJlYWRvbmx5Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogbnVsbCxcbiAgbm9ybWFsaXplOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJlYWRvbmx5Um93O1xuIl19