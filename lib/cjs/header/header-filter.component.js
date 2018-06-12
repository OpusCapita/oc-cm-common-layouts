'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _primitives = require('../primitives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var ProductTitle = _primitives.PrimitiveHeaderTitle.extend(_templateObject, _constants.theme.gutterWidth);

var HeaderTabFilter = function HeaderTabFilter(_ref) {
  var title = _ref.title;
  return (// eslint-disable-line
    _react2.default.createElement(
      _primitives.PrimitiveHeader,
      { className: _constants.classPrefix + '_filter-header' },
      title && _react2.default.createElement(
        ProductTitle,
        null,
        title
      )
    )
  );
};

HeaderTabFilter.defaultProps = {
  title: null
};

exports.default = HeaderTabFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWZpbHRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZSIsImV4dGVuZCIsImd1dHRlcldpZHRoIiwiSGVhZGVyVGFiRmlsdGVyIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7QUFGQTs7O0FBSUEsSUFBTUEsZUFBZSxpQ0FBcUJDLE1BQXBDLGtCQUNZLGlCQUFNQyxXQURsQixDQUFOOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFpQjtBQUN2QztBQUFBO0FBQUEsUUFBaUIsb0RBQWpCO0FBQ0dBLGVBQVM7QUFBQyxvQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQURzQjtBQUFBLENBQXhCOztBQVVBRCxnQkFBZ0JFLFlBQWhCLEdBQStCO0FBQzdCRCxTQUFPO0FBRHNCLENBQS9COztrQkFJZUQsZSIsImZpbGUiOiJoZWFkZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmVIZWFkZXIsIFByaW1pdGl2ZUhlYWRlclRpdGxlIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IFByb2R1Y3RUaXRsZSA9IFByaW1pdGl2ZUhlYWRlclRpdGxlLmV4dGVuZGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEhlYWRlclRhYkZpbHRlciA9ICh7IHRpdGxlIH0pID0+ICggLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICA8UHJpbWl0aXZlSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2ZpbHRlci1oZWFkZXJgfT5cbiAgICB7dGl0bGUgJiYgPFByb2R1Y3RUaXRsZT57dGl0bGV9PC9Qcm9kdWN0VGl0bGU+fVxuICA8L1ByaW1pdGl2ZUhlYWRlcj5cbik7XG5cbkhlYWRlclRhYkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSGVhZGVyVGFiRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUYWJGaWx0ZXI7XG4iXX0=