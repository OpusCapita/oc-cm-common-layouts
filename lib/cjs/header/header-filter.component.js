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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWZpbHRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZSIsIlByaW1pdGl2ZUhlYWRlclRpdGxlIiwiZXh0ZW5kIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkhlYWRlclRhYkZpbHRlciIsInRpdGxlIiwiY2xhc3NQcmVmaXgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7QUFGQTs7O0FBSUEsSUFBTUEsZUFBZUMsaUNBQXFCQyxNQUFwQyxrQkFDWUMsaUJBQU1DLFdBRGxCLENBQU47O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWlCO0FBQ3ZDO0FBQUMsaUNBQUQ7QUFBQSxRQUFpQixXQUFjQyxzQkFBZCxtQkFBakI7QUFDR0QsZUFBUztBQUFDLG9CQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBRHNCO0FBQUEsQ0FBeEI7O0FBVUFELGdCQUFnQkcsWUFBaEIsR0FBK0I7QUFDN0JGLFNBQU87QUFEc0IsQ0FBL0I7O2tCQUllRCxlIiwiZmlsZSI6ImhlYWRlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZUhlYWRlciwgUHJpbWl0aXZlSGVhZGVyVGl0bGUgfSBmcm9tICcuLi9wcmltaXRpdmVzJztcblxuY29uc3QgUHJvZHVjdFRpdGxlID0gUHJpbWl0aXZlSGVhZGVyVGl0bGUuZXh0ZW5kYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgSGVhZGVyVGFiRmlsdGVyID0gKHsgdGl0bGUgfSkgPT4gKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIDxQcmltaXRpdmVIZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fZmlsdGVyLWhlYWRlcmB9PlxuICAgIHt0aXRsZSAmJiA8UHJvZHVjdFRpdGxlPnt0aXRsZX08L1Byb2R1Y3RUaXRsZT59XG4gIDwvUHJpbWl0aXZlSGVhZGVyPlxuKTtcblxuSGVhZGVyVGFiRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5IZWFkZXJUYWJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRhYkZpbHRlcjtcbiJdfQ==