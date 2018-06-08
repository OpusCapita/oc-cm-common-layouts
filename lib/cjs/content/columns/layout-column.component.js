'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    margin-right: ', ' \n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    margin-right: ', ' \n']);

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
}, _constants.theme.column.minWidth, function (props) {
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

LayoutColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1
};

exports.default = LayoutColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNvbHVtbiIsImRpdiIsInByb3BzIiwiZ3JvdyIsImNvbHVtbiIsIm1pbldpZHRoIiwiaXNMYXN0SXRlbSIsImd1dHRlcldpZHRoIiwiTGF5b3V0Q29sdW1uIiwiY2hpbGRyZW4iLCJlbGVtIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OzswRkFOQTs7O0FBS0E7OztBQUdBLElBQU1BLFNBQVMsMkJBQU9DLEdBQWhCLGtCQUNXO0FBQUEsU0FBU0MsTUFBTUMsSUFBZjtBQUFBLENBRFgsRUFPVyxpQkFBTUMsTUFBTixDQUFhQyxRQVB4QixFQVFjO0FBQUEsU0FBU0gsTUFBTUksVUFBTixHQUFtQixDQUFuQixHQUF1QixpQkFBTUMsV0FBdEM7QUFBQSxDQVJkLENBQU47O0FBV0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUgsVUFBYixRQUFhQSxVQUFiO0FBQUEsTUFBeUJILElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLFNBQ25CO0FBQUMsVUFBRDtBQUFBO0FBQ0UsWUFBTUEsSUFEUjtBQUVFLGtCQUFZRyxVQUZkO0FBR0UsbURBSEY7QUFJRSxXQUFLLGFBQUNJLElBQUQsRUFBVTtBQUNiLGtCQUFLTixNQUFMLEdBQWNNLElBQWQ7QUFDRDtBQU5IO0FBUUcsb0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkgsUUFBbkIsRUFBNkIsVUFBQ0ksS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxVQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxhQUFPLGdCQUFNRyxZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkksZ0JBQVEsVUFBS2IsTUFEa0I7QUFFL0JFLG9CQUFZUSxNQUFNTCxTQUFTUyxNQUFULEdBQWtCLENBQXhCLElBQTZCVCxTQUFTUyxNQUFULEtBQW9CQztBQUY5QixPQUExQixDQUFQO0FBSUQsS0FUQTtBQVJILEdBRG1CO0FBQUEsQ0FBckI7O0FBNEJBWCxhQUFhWSxZQUFiLEdBQTRCO0FBQzFCWCxZQUFVVSxTQURnQjtBQUUxQmIsY0FBWSxLQUZjO0FBRzFCSCxRQUFNO0FBSG9CLENBQTVCOztrQkFNZUssWSIsImZpbGUiOiJsYXlvdXQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7dGhlbWUuY29sdW1uLm1pbldpZHRofTtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXNMYXN0SXRlbSA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aH0gXG5gO1xuXG5jb25zdCBMYXlvdXRDb2x1bW4gPSAoeyBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgZ3JvdyB9KSA9PiAoXG4gIDxDb2x1bW5cbiAgICBncm93PXtncm93fVxuICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uYH1cbiAgICByZWY9eyhlbGVtKSA9PiB7XG4gICAgICB0aGlzLmNvbHVtbiA9IGVsZW07XG4gICAgfX1cbiAgPlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoZS5nLiBDb250ZW50LkNhcmQpXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9KX1cbiAgPC9Db2x1bW4+XG4pO1xuXG5MYXlvdXRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTGF5b3V0Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIGdyb3c6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb2x1bW47XG4iXX0=