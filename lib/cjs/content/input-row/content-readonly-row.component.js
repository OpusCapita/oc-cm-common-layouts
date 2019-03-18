'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contentInputRow = require('./content-input-row.component');

var _contentInputRow2 = _interopRequireDefault(_contentInputRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['label', 'value', 'normalize', 'asColumn', 'id']);

  return _react2.default.createElement(
    _contentInputRow2.default,
    _extends({ asColumn: asColumn, label: label, showError: false }, rest),
    _react2.default.createElement(
      'span',
      { id: id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJhc0NvbHVtbiIsImlkIiwicmVzdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFDekJDLEtBRHlCLFFBQ3pCQSxLQUR5QjtBQUFBLE1BQ2xCQyxLQURrQixRQUNsQkEsS0FEa0I7QUFBQSxNQUNYQyxTQURXLFFBQ1hBLFNBRFc7QUFBQSxNQUNBQyxRQURBLFFBQ0FBLFFBREE7QUFBQSxNQUNVQyxFQURWLFFBQ1VBLEVBRFY7QUFBQSxNQUNpQkMsSUFEakI7O0FBQUEsU0FHekI7QUFBQyw2QkFBRDtBQUFBLGVBQVUsVUFBVUYsUUFBcEIsRUFBOEIsT0FBT0gsS0FBckMsRUFBNEMsV0FBVyxLQUF2RCxJQUFrRUssSUFBbEU7QUFDRTtBQUFBO0FBQUEsUUFBTSxJQUFJRCxFQUFWO0FBQ0dGLGtCQUFZQSxVQUFVRCxLQUFWLENBQVosR0FBK0JBO0FBRGxDO0FBREYsR0FIeUI7QUFBQSxDQUEzQjs7QUFrQkFGLG1CQUFtQk8sWUFBbkIsR0FBa0M7QUFDaENILFlBQVUsS0FEc0I7QUFFaENILFNBQU8sRUFGeUI7QUFHaENDLFNBQU8sSUFIeUI7QUFJaENDLGFBQVc7QUFKcUIsQ0FBbEM7O2tCQU9lSCxrQiIsImZpbGUiOiJjb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbnB1dFJvdyBmcm9tICcuL2NvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IENvbnRlbnRSZWFkb25seVJvdyA9ICh7XG4gIGxhYmVsLCB2YWx1ZSwgbm9ybWFsaXplLCBhc0NvbHVtbiwgaWQsIC4uLnJlc3Rcbn0pID0+IChcbiAgPElucHV0Um93IGFzQ29sdW1uPXthc0NvbHVtbn0gbGFiZWw9e2xhYmVsfSBzaG93RXJyb3I9e2ZhbHNlfSB7Li4ucmVzdH0+XG4gICAgPHNwYW4gaWQ9e2lkfT5cbiAgICAgIHtub3JtYWxpemUgPyBub3JtYWxpemUodmFsdWUpIDogdmFsdWV9XG4gICAgPC9zcGFuPlxuICA8L0lucHV0Um93PlxuKTtcblxuQ29udGVudFJlYWRvbmx5Um93LnByb3BUeXBlcyA9IHtcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBub3JtYWxpemU6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuQ29udGVudFJlYWRvbmx5Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbDogJycsXG4gIHZhbHVlOiBudWxsLFxuICBub3JtYWxpemU6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UmVhZG9ubHlSb3c7XG4iXX0=