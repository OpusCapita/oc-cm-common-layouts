function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutPropertiesLoose(_ref, ["label", "value", "normalize", "asColumn", "id"]);

  return React.createElement(InputRow, _extends({
    id: id + "-readonly-row",
    asColumn: asColumn,
    label: label,
    showError: false
  }, rest), React.createElement("span", {
    id: id
  }, normalize ? normalize(value) : value));
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};
export default ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiSW5wdXRSb3ciLCJDb250ZW50UmVhZG9ubHlSb3ciLCJsYWJlbCIsInZhbHVlIiwibm9ybWFsaXplIiwiYXNDb2x1bW4iLCJpZCIsInJlc3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsK0JBQXJCOztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUN6QkMsS0FEeUIsUUFDekJBLEtBRHlCO0FBQUEsTUFDbEJDLEtBRGtCLFFBQ2xCQSxLQURrQjtBQUFBLE1BQ1hDLFNBRFcsUUFDWEEsU0FEVztBQUFBLE1BQ0FDLFFBREEsUUFDQUEsUUFEQTtBQUFBLE1BQ1VDLEVBRFYsUUFDVUEsRUFEVjtBQUFBLE1BQ2lCQyxJQURqQjs7QUFBQSxTQUd6QixvQkFBQyxRQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUtELEVBQUwsa0JBREo7QUFFRSxJQUFBLFFBQVEsRUFBRUQsUUFGWjtBQUdFLElBQUEsS0FBSyxFQUFFSCxLQUhUO0FBSUUsSUFBQSxTQUFTLEVBQUU7QUFKYixLQUtNSyxJQUxOLEdBT0U7QUFBTSxJQUFBLEVBQUUsRUFBRUQ7QUFBVixLQUNHRixTQUFTLEdBQUdBLFNBQVMsQ0FBQ0QsS0FBRCxDQUFaLEdBQXNCQSxLQURsQyxDQVBGLENBSHlCO0FBQUEsQ0FBM0I7O0FBd0JBRixrQkFBa0IsQ0FBQ08sWUFBbkIsR0FBa0M7QUFDaENILEVBQUFBLFFBQVEsRUFBRSxLQURzQjtBQUVoQ0gsRUFBQUEsS0FBSyxFQUFFLEVBRnlCO0FBR2hDQyxFQUFBQSxLQUFLLEVBQUUsSUFIeUI7QUFJaENDLEVBQUFBLFNBQVMsRUFBRTtBQUpxQixDQUFsQztBQU9BLGVBQWVILGtCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW5wdXRSb3cgZnJvbSAnLi9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQnO1xuXG5jb25zdCBDb250ZW50UmVhZG9ubHlSb3cgPSAoe1xuICBsYWJlbCwgdmFsdWUsIG5vcm1hbGl6ZSwgYXNDb2x1bW4sIGlkLCAuLi5yZXN0XG59KSA9PiAoXG4gIDxJbnB1dFJvd1xuICAgIGlkPXtgJHtpZH0tcmVhZG9ubHktcm93YH1cbiAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgbGFiZWw9e2xhYmVsfVxuICAgIHNob3dFcnJvcj17ZmFsc2V9XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICA8c3BhbiBpZD17aWR9PlxuICAgICAge25vcm1hbGl6ZSA/IG5vcm1hbGl6ZSh2YWx1ZSkgOiB2YWx1ZX1cbiAgICA8L3NwYW4+XG4gIDwvSW5wdXRSb3c+XG4pO1xuXG5Db250ZW50UmVhZG9ubHlSb3cucHJvcFR5cGVzID0ge1xuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5ib29sXSksXG4gIG5vcm1hbGl6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5Db250ZW50UmVhZG9ubHlSb3cuZGVmYXVsdFByb3BzID0ge1xuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsOiAnJyxcbiAgdmFsdWU6IG51bGwsXG4gIG5vcm1hbGl6ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSZWFkb25seVJvdztcbiJdfQ==