'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return props.grow;
}, _constants.theme.column.minWidth, _constants.theme.halfGutterWidth);

var ContentColumn = function ContentColumn(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      grow = _ref.grow,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    Column,
    {
      grow: grow,
      isLastItem: isLastItem,
      className: _constants.classPrefix + '_column ' + className,
      ref: function ref(elem) {
        undefined.column = elem;
      },
      id: id
    },
    _react2.default.Children.map(children, function (child, i) {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child;

      // If it's a React component (e.g. Content.Card)
      return _react2.default.cloneElement(child, {
        parent: undefined.column,
        isLastItem: i === children.length - 1 || children.length === undefined
      });
    })
  );
};

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

exports.default = ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImlkIiwiY2xhc3NOYW1lIiwiY2xhc3NQcmVmaXgiLCJlbGVtIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsU0FBU0MsMkJBQU9DLEdBQWhCLGtCQUNXO0FBQUEsU0FBU0MsTUFBTUMsSUFBZjtBQUFBLENBRFgsRUFPV0MsaUJBQU1DLE1BQU4sQ0FBYUMsUUFQeEIsRUFRV0YsaUJBQU1HLGVBUmpCLENBQU47O0FBV0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUVwQkMsVUFGb0IsUUFFcEJBLFVBRm9CO0FBQUEsTUFHcEJQLElBSG9CLFFBR3BCQSxJQUhvQjtBQUFBLE1BSXBCUSxFQUpvQixRQUlwQkEsRUFKb0I7QUFBQSxNQUtwQkMsU0FMb0IsUUFLcEJBLFNBTG9CO0FBQUEsU0FPcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNVCxJQURSO0FBRUUsa0JBQVlPLFVBRmQ7QUFHRSxpQkFBY0csc0JBQWQsZ0JBQW9DRCxTQUh0QztBQUlFLFdBQUssYUFBQ0UsSUFBRCxFQUFVO0FBQ2Isa0JBQUtULE1BQUwsR0FBY1MsSUFBZDtBQUNELE9BTkg7QUFPRSxVQUFJSDtBQVBOO0FBU0dJLG9CQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLFVBQUNTLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsVUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsYUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxnQkFBUSxVQUFLakIsTUFEa0I7QUFFL0JLLG9CQUFZUyxNQUFNVixTQUFTYyxNQUFULEdBQWtCLENBQXhCLElBQTZCZCxTQUFTYyxNQUFULEtBQW9CQztBQUY5QixPQUExQixDQUFQO0FBSUQsS0FUQTtBQVRILEdBUG9CO0FBQUEsQ0FBdEI7O0FBcUNBaEIsY0FBY2lCLFlBQWQsR0FBNkI7QUFDM0JoQixZQUFVZSxTQURpQjtBQUUzQmQsY0FBWSxLQUZlO0FBRzNCUCxRQUFNLENBSHFCO0FBSTNCUSxNQUFJLEVBSnVCO0FBSzNCQyxhQUFXO0FBTGdCLENBQTdCOztrQkFRZUosYSIsImZpbGUiOiJjb250ZW50LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIEFwcCBpbXBvcnRzXHJcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6ICR7dGhlbWUuY29sdW1uLm1pbldpZHRofTtcclxuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudENvbHVtbiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaXNMYXN0SXRlbSxcclxuICBncm93LFxyXG4gIGlkLFxyXG4gIGNsYXNzTmFtZSxcclxufSkgPT4gKFxyXG4gIDxDb2x1bW5cclxuICAgIGdyb3c9e2dyb3d9XHJcbiAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxyXG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uICR7Y2xhc3NOYW1lfWB9XHJcbiAgICByZWY9eyhlbGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuY29sdW1uID0gZWxlbTtcclxuICAgIH19XHJcbiAgICBpZD17aWR9XHJcbiAgPlxyXG4gICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XHJcbiAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXHJcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcclxuXHJcbiAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGUuZy4gQ29udGVudC5DYXJkKVxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbHVtbixcclxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxyXG4gICAgICB9KTtcclxuICAgIH0pfVxyXG4gIDwvQ29sdW1uPlxyXG4pO1xyXG5cclxuQ29udGVudENvbHVtbi5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxyXG4gIGdyb3c6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuQ29udGVudENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcclxuICBpc0xhc3RJdGVtOiBmYWxzZSxcclxuICBncm93OiAxLFxyXG4gIGlkOiAnJyxcclxuICBjbGFzc05hbWU6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENvbHVtbjtcclxuIl19