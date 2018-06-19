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
};

ContentReadonlyRow.defaultProps = {
  label: '',
  value: null
};

exports.default = ContentReadonlyRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LXJlYWRvbmx5LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbnRlbnRSZWFkb25seVJvdyIsImxhYmVsIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsS0FBVixRQUFVQSxLQUFWO0FBQUEsU0FDekI7QUFBQyw2QkFBRDtBQUFBLE1BQVUsT0FBT0QsS0FBakIsRUFBd0IsV0FBVyxLQUFuQztBQUNFO0FBQUE7QUFBQTtBQUFPQztBQUFQO0FBREYsR0FEeUI7QUFBQSxDQUEzQjs7QUFXQUYsbUJBQW1CRyxZQUFuQixHQUFrQztBQUNoQ0YsU0FBTyxFQUR5QjtBQUVoQ0MsU0FBTztBQUZ5QixDQUFsQzs7a0JBS2VGLGtCIiwiZmlsZSI6ImNvbnRlbnQtcmVhZG9ubHktcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0Um93IGZyb20gJy4vY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50JztcblxuY29uc3QgQ29udGVudFJlYWRvbmx5Um93ID0gKHsgbGFiZWwsIHZhbHVlIH0pID0+IChcbiAgPElucHV0Um93IGxhYmVsPXtsYWJlbH0gc2hvd0Vycm9yPXtmYWxzZX0+XG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgPC9JbnB1dFJvdz5cbik7XG5cbkNvbnRlbnRSZWFkb25seVJvdy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuQ29udGVudFJlYWRvbmx5Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICB2YWx1ZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSZWFkb25seVJvdztcbiJdfQ==