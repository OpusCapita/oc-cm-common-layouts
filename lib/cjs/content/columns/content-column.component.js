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
      grow = _ref.grow;
  return _react2.default.createElement(
    Column,
    {
      grow: grow,
      isLastItem: isLastItem,
      className: _constants.classPrefix + '_column',
      ref: function ref(elem) {
        undefined.column = elem;
      }
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
  grow: 1
};

exports.default = ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImNsYXNzUHJlZml4IiwiZWxlbSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBREE7OztBQUdBLElBQU1BLFNBQVNDLDJCQUFPQyxHQUFoQixrQkFDVztBQUFBLFNBQVNDLE1BQU1DLElBQWY7QUFBQSxDQURYLEVBT1dDLGlCQUFNQyxNQUFOLENBQWFDLFFBUHhCLEVBUVdGLGlCQUFNRyxlQVJqQixDQUFOOztBQVdBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxVQUFiLFFBQWFBLFVBQWI7QUFBQSxNQUF5QlAsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsU0FDcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNQSxJQURSO0FBRUUsa0JBQVlPLFVBRmQ7QUFHRSxpQkFBY0Msc0JBQWQsWUFIRjtBQUlFLFdBQUssYUFBQ0MsSUFBRCxFQUFVO0FBQ2Isa0JBQUtQLE1BQUwsR0FBY08sSUFBZDtBQUNEO0FBTkg7QUFRR0Msb0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxVQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxhQUFPSCxnQkFBTU0sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLFVBQUtmLE1BRGtCO0FBRS9CSyxvQkFBWU8sTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGOUIsT0FBMUIsQ0FBUDtBQUlELEtBVEE7QUFSSCxHQURvQjtBQUFBLENBQXRCOztBQTRCQWQsY0FBY2UsWUFBZCxHQUE2QjtBQUMzQmQsWUFBVWEsU0FEaUI7QUFFM0JaLGNBQVksS0FGZTtBQUczQlAsUUFBTTtBQUhxQixDQUE3Qjs7a0JBTWVLLGEiLCJmaWxlIjoiY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7dGhlbWUuY29sdW1uLm1pbldpZHRofTtcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IENvbnRlbnRDb2x1bW4gPSAoeyBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgZ3JvdyB9KSA9PiAoXG4gIDxDb2x1bW5cbiAgICBncm93PXtncm93fVxuICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uYH1cbiAgICByZWY9eyhlbGVtKSA9PiB7XG4gICAgICB0aGlzLmNvbHVtbiA9IGVsZW07XG4gICAgfX1cbiAgPlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoZS5nLiBDb250ZW50LkNhcmQpXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9KX1cbiAgPC9Db2x1bW4+XG4pO1xuXG5Db250ZW50Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ3JvdzogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkNvbnRlbnRDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgZ3JvdzogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDb2x1bW47XG4iXX0=