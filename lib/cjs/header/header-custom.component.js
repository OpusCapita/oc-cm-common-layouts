'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App imports
var HeaderCustom = function HeaderCustom(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _.Primitive.Header,
    { className: _constants.classPrefix + '_header' },
    children
  );
};

HeaderCustom.defaultProps = {
  children: null
};

exports.default = HeaderCustom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWN1c3RvbS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlckN1c3RvbSIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRkE7QUFJQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNuQjtBQUFBLGdCQUFXLE1BQVg7QUFBQSxNQUFrQiw2Q0FBbEI7QUFBdURBO0FBQXZELEdBRG1CO0FBQUEsQ0FBckI7O0FBUUFELGFBQWFFLFlBQWIsR0FBNEI7QUFDMUJELFlBQVU7QUFEZ0IsQ0FBNUI7O2tCQUllRCxZIiwiZmlsZSI6ImhlYWRlci1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlIH0gZnJvbSAnLi4vJztcblxuY29uc3QgSGVhZGVyQ3VzdG9tID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8UHJpbWl0aXZlLkhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJgfT57Y2hpbGRyZW59PC9QcmltaXRpdmUuSGVhZGVyPlxuKTtcblxuSGVhZGVyQ3VzdG9tLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuSGVhZGVyQ3VzdG9tLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDdXN0b207XG4iXX0=