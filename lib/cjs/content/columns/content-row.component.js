'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

// App imports


var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + _constants.theme.gutterWidth + '))';
};

var Row = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, _constants.theme.halfGutterWidth, function (props) {
  return calculateHeight(props);
});

var ContentRow = function ContentRow(_ref) {
  var children = _ref.children,
      topOffset = _ref.topOffset,
      stretch = _ref.stretch;
  return _react2.default.createElement(
    _reactPerfectScrollbar2.default,
    null,
    _react2.default.createElement(
      Row,
      {
        topOffset: topOffset,
        stretch: stretch,
        className: _constants.classPrefix + '_row',
        innerRef: function innerRef(element) {
          undefined.colContainer = element;
        }
      },
      _react2.default.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return _react2.default.cloneElement(child, {
          parent: undefined.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsImNoaWxkcmVuIiwiY2xhc3NQcmVmaXgiLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7MEZBUkE7O0FBT0E7OztBQUdBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0RDLGlCQUFNQyxXQUFyRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTUMsMkJBQU9DLEdBQWIsa0JBQ01KLGlCQUFNQyxXQURaLEVBQzJCRCxpQkFBTUssZUFEakMsRUFJTTtBQUFBLFNBQVNULGdCQUFnQkMsS0FBaEIsQ0FBVDtBQUFBLENBSk4sQ0FBTjs7QUFPQSxJQUFNUyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhUixTQUFiLFFBQWFBLFNBQWI7QUFBQSxNQUF3QkQsT0FBeEIsUUFBd0JBLE9BQXhCO0FBQUEsU0FDakI7QUFBQyxtQ0FBRDtBQUFBO0FBQ0U7QUFBQyxTQUFEO0FBQUE7QUFDRSxtQkFBV0MsU0FEYjtBQUVFLGlCQUFTRCxPQUZYO0FBR0UsbUJBQWNVLHNCQUFkLFNBSEY7QUFJRSxrQkFBVSxrQkFBQ0MsT0FBRCxFQUFhO0FBQ3JCLG9CQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNEO0FBTkg7QUFRR0Usc0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxZQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxlQUFPSCxnQkFBTU0sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLFVBQUtSLFlBRGtCO0FBRS9CUyxzQkFBWUosTUFBTVIsU0FBU2EsTUFBVCxHQUFrQixDQUF4QixJQUE2QmIsU0FBU2EsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFkLFNBQVNhO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBK0JBZCxXQUFXZ0IsWUFBWCxHQUEwQjtBQUN4QmYsWUFBVWdCLFNBRGM7QUFFeEJ4QixhQUFXLEVBRmE7QUFHeEJELFdBQVM7QUFIZSxDQUExQjs7a0JBTWVRLFUiLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuc3RyZXRjaCkgcmV0dXJuICdhdXRvJztcbiAgcmV0dXJuIGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xufTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofSAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jb25zdCBDb250ZW50Um93ID0gKHsgY2hpbGRyZW4sIHRvcE9mZnNldCwgc3RyZXRjaCB9KSA9PiAoXG4gIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgIDxSb3dcbiAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3Jvd2B9XG4gICAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sQ29udGFpbmVyLFxuICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIH0pO1xuICAgICAgfSl9XG4gICAgPC9Sb3c+XG4gIDwvUGVyZmVjdFNjcm9sbGJhcj5cbik7XG5cbkNvbnRlbnRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBzdHJldGNoOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=