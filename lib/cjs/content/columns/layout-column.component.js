'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    margin-right: ', ' \n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    margin-right: ', ' \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */


// App imports


var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return props.grow;
}, function (props) {
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
});

var LayoutColumn = function LayoutColumn(_ref) {
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
    !!children.length && _react2.default.Children.map(children, function (child, i) {
      return _react2.default.cloneElement(child, {
        parent: undefined.column,
        isLastItem: i === children.length - 1 || children.length === undefined
      });
    })
  );
};

LayoutColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1
};

exports.default = LayoutColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbHVtbiIsImRpdiIsInByb3BzIiwiZ3JvdyIsImlzTGFzdEl0ZW0iLCJndXR0ZXJXaWR0aCIsIkxheW91dENvbHVtbiIsImNoaWxkcmVuIiwiZWxlbSIsImNvbHVtbiIsImxlbmd0aCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OzswRkFOQTs7O0FBS0E7OztBQUdBLElBQU1BLFNBQVMsMkJBQU9DLEdBQWhCLGtCQUNXO0FBQUEsU0FBU0MsTUFBTUMsSUFBZjtBQUFBLENBRFgsRUFPYztBQUFBLFNBQVNELE1BQU1FLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUIsaUJBQU1DLFdBQXRDO0FBQUEsQ0FQZCxDQUFOOztBQVVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFILFVBQWIsUUFBYUEsVUFBYjtBQUFBLE1BQXlCRCxJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxTQUNuQjtBQUFDLFVBQUQ7QUFBQTtBQUNFLFlBQU1BLElBRFI7QUFFRSxrQkFBWUMsVUFGZDtBQUdFLG1EQUhGO0FBSUUsV0FBSyxhQUFDSSxJQUFELEVBQVU7QUFDYixrQkFBS0MsTUFBTCxHQUFjRCxJQUFkO0FBQ0Q7QUFOSDtBQVFHLEtBQUMsQ0FBQ0QsU0FBU0csTUFBWCxJQUFxQixnQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CTCxRQUFuQixFQUE2QixVQUFDTSxLQUFELEVBQVFDLENBQVI7QUFBQSxhQUNqRCxnQkFBTUMsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDeEJHLGdCQUFRLFVBQUtQLE1BRFc7QUFFeEJMLG9CQUFZVSxNQUFNUCxTQUFTRyxNQUFULEdBQWtCLENBQXhCLElBQTZCSCxTQUFTRyxNQUFULEtBQW9CTztBQUZyQyxPQUExQixDQURpRDtBQUFBLEtBQTdCO0FBUnhCLEdBRG1CO0FBQUEsQ0FBckI7O0FBd0JBWCxhQUFhWSxZQUFiLEdBQTRCO0FBQzFCWCxZQUFVVSxTQURnQjtBQUUxQmIsY0FBWSxLQUZjO0FBRzFCRCxRQUFNO0FBSG9CLENBQTVCOztrQkFNZUcsWSIsImZpbGUiOiJsYXlvdXQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aH0gXG5gO1xuXG5jb25zdCBMYXlvdXRDb2x1bW4gPSAoeyBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgZ3JvdyB9KSA9PiAoXG4gIDxDb2x1bW5cbiAgICBncm93PXtncm93fVxuICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uYH1cbiAgICByZWY9eyhlbGVtKSA9PiB7XG4gICAgICB0aGlzLmNvbHVtbiA9IGVsZW07XG4gICAgfX1cbiAgPlxuICAgIHshIWNoaWxkcmVuLmxlbmd0aCAmJiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICB9KVxuICAgICkpfVxuICA8L0NvbHVtbj5cbik7XG5cbkxheW91dENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIGdyb3c6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5MYXlvdXRDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgZ3JvdzogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dENvbHVtbjtcbiJdfQ==