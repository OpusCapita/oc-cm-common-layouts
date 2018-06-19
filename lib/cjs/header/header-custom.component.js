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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWN1c3RvbS5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkhlYWRlckN1c3RvbSIsImNoaWxkcmVuIiwiY2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFGQTtBQUlBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ25CO0FBQUMsZUFBRCxDQUFXLE1BQVg7QUFBQSxNQUFrQixXQUFjQyxzQkFBZCxZQUFsQjtBQUF1REQ7QUFBdkQsR0FEbUI7QUFBQSxDQUFyQjs7QUFRQUQsYUFBYUcsWUFBYixHQUE0QjtBQUMxQkYsWUFBVTtBQURnQixDQUE1Qjs7a0JBSWVELFkiLCJmaWxlIjoiaGVhZGVyLWN1c3RvbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBIZWFkZXJDdXN0b20gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxQcmltaXRpdmUuSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcmB9PntjaGlsZHJlbn08L1ByaW1pdGl2ZS5IZWFkZXI+XG4pO1xuXG5IZWFkZXJDdXN0b20ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5IZWFkZXJDdXN0b20uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckN1c3RvbTtcbiJdfQ==