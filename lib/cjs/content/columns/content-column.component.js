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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImNsYXNzUHJlZml4IiwiZWxlbSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OzswRkFOQTs7O0FBS0E7OztBQUdBLElBQU1BLFNBQVNDLDJCQUFPQyxHQUFoQixrQkFDVztBQUFBLFNBQVNDLE1BQU1DLElBQWY7QUFBQSxDQURYLEVBT1dDLGlCQUFNQyxNQUFOLENBQWFDLFFBUHhCLEVBUVdGLGlCQUFNRyxlQVJqQixDQUFOOztBQVdBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxVQUFiLFFBQWFBLFVBQWI7QUFBQSxNQUF5QlAsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsU0FDcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNQSxJQURSO0FBRUUsa0JBQVlPLFVBRmQ7QUFHRSxpQkFBY0Msc0JBQWQsWUFIRjtBQUlFLFdBQUssYUFBQ0MsSUFBRCxFQUFVO0FBQ2Isa0JBQUtQLE1BQUwsR0FBY08sSUFBZDtBQUNEO0FBTkg7QUFRR0Msb0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxVQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxhQUFPSCxnQkFBTU0sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLFVBQUtmLE1BRGtCO0FBRS9CSyxvQkFBWU8sTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGOUIsT0FBMUIsQ0FBUDtBQUlELEtBVEE7QUFSSCxHQURvQjtBQUFBLENBQXRCOztBQTRCQWQsY0FBY2UsWUFBZCxHQUE2QjtBQUMzQmQsWUFBVWEsU0FEaUI7QUFFM0JaLGNBQVksS0FGZTtBQUczQlAsUUFBTTtBQUhxQixDQUE3Qjs7a0JBTWVLLGEiLCJmaWxlIjoiY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gcHJvcHMuZ3Jvd307XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogJHt0aGVtZS5jb2x1bW4ubWluV2lkdGh9O1xuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQ29udGVudENvbHVtbiA9ICh7IGNoaWxkcmVuLCBpc0xhc3RJdGVtLCBncm93IH0pID0+IChcbiAgPENvbHVtblxuICAgIGdyb3c9e2dyb3d9XG4gICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9jb2x1bW5gfVxuICAgIHJlZj17KGVsZW0pID0+IHtcbiAgICAgIHRoaXMuY29sdW1uID0gZWxlbTtcbiAgICB9fVxuICA+XG4gICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChlLmcuIENvbnRlbnQuQ2FyZClcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbHVtbixcbiAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH0pfVxuICA8L0NvbHVtbj5cbik7XG5cbkNvbnRlbnRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuQ29udGVudENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICBncm93OiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENvbHVtbjtcbiJdfQ==