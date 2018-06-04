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

var LayoutTabFilterHeader = function LayoutTabFilterHeader(_ref) {
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

LayoutTabFilterHeader.defaultProps = {
  title: null
};

exports.default = LayoutTabFilterHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LWZpbHRlci1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0VGl0bGUiLCJleHRlbmQiLCJndXR0ZXJXaWR0aCIsIkxheW91dFRhYkZpbHRlckhlYWRlciIsInRpdGxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7O0FBRkE7OztBQUlBLElBQU1BLGVBQWUsaUNBQXFCQyxNQUFwQyxrQkFDWSxpQkFBTUMsV0FEbEIsQ0FBTjs7QUFJQSxJQUFNQyx3QkFBd0IsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWlCO0FBQzdDO0FBQUE7QUFBQSxRQUFpQixvREFBakI7QUFDR0EsZUFBUztBQUFDLG9CQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBRDRCO0FBQUEsQ0FBOUI7O0FBVUFELHNCQUFzQkUsWUFBdEIsR0FBcUM7QUFDbkNELFNBQU87QUFENEIsQ0FBckM7O2tCQUllRCxxQiIsImZpbGUiOiJsYXlvdXQtZmlsdGVyLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlSGVhZGVyLCBQcmltaXRpdmVIZWFkZXJUaXRsZSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBQcm9kdWN0VGl0bGUgPSBQcmltaXRpdmVIZWFkZXJUaXRsZS5leHRlbmRgXG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBMYXlvdXRUYWJGaWx0ZXJIZWFkZXIgPSAoeyB0aXRsZSB9KSA9PiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgPFByaW1pdGl2ZUhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9maWx0ZXItaGVhZGVyYH0+XG4gICAge3RpdGxlICYmIDxQcm9kdWN0VGl0bGU+e3RpdGxlfTwvUHJvZHVjdFRpdGxlPn1cbiAgPC9QcmltaXRpdmVIZWFkZXI+XG4pO1xuXG5MYXlvdXRUYWJGaWx0ZXJIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkxheW91dFRhYkZpbHRlckhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0VGFiRmlsdGVySGVhZGVyO1xuIl19