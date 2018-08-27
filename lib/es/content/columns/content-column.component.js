var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
  return props.grow;
}, theme.column.minWidth, theme.halfGutterWidth);

var ContentColumn = function ContentColumn(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      grow = _ref.grow,
      id = _ref.id,
      className = _ref.className;
  return React.createElement(
    Column,
    {
      grow: grow,
      isLastItem: isLastItem,
      className: classPrefix + '_column ' + className,
      ref: function ref(elem) {
        _this.column = elem;
      },
      id: id
    },
    React.Children.map(children, function (child, i) {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child;

      // If it's a React component (e.g. Content.Card)
      return React.cloneElement(child, {
        parent: _this.column,
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

export default ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJDb2x1bW4iLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJpZCIsImNsYXNzTmFtZSIsImVsZW0iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksR0FBaEIsa0JBQ1c7QUFBQSxTQUFTQyxNQUFNQyxJQUFmO0FBQUEsQ0FEWCxFQU9XSixNQUFNSyxNQUFOLENBQWFDLFFBUHhCLEVBUVdOLE1BQU1PLGVBUmpCLENBQU47O0FBV0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUVwQkMsVUFGb0IsUUFFcEJBLFVBRm9CO0FBQUEsTUFHcEJOLElBSG9CLFFBR3BCQSxJQUhvQjtBQUFBLE1BSXBCTyxFQUpvQixRQUlwQkEsRUFKb0I7QUFBQSxNQUtwQkMsU0FMb0IsUUFLcEJBLFNBTG9CO0FBQUEsU0FPcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNUixJQURSO0FBRUUsa0JBQVlNLFVBRmQ7QUFHRSxpQkFBY1gsV0FBZCxnQkFBb0NhLFNBSHRDO0FBSUUsV0FBSyxhQUFDQyxJQUFELEVBQVU7QUFDYixjQUFLUixNQUFMLEdBQWNRLElBQWQ7QUFDRCxPQU5IO0FBT0UsVUFBSUY7QUFQTjtBQVNHZixVQUFNa0IsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGFBQU9wQixNQUFNdUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLE1BQUtmLE1BRGtCO0FBRS9CSyxvQkFBWU8sTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGOUIsT0FBMUIsQ0FBUDtBQUlELEtBVEE7QUFUSCxHQVBvQjtBQUFBLENBQXRCOztBQXFDQWQsY0FBY2UsWUFBZCxHQUE2QjtBQUMzQmQsWUFBVWEsU0FEaUI7QUFFM0JaLGNBQVksS0FGZTtBQUczQk4sUUFBTSxDQUhxQjtBQUkzQk8sTUFBSSxFQUp1QjtBQUszQkMsYUFBVztBQUxnQixDQUE3Qjs7QUFRQSxlQUFlSixhQUFmIiwiZmlsZSI6ImNvbnRlbnQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gcHJvcHMuZ3Jvd307XHJcbiAgICBmbGV4LXNocmluazogMTtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogJHt0aGVtZS5jb2x1bW4ubWluV2lkdGh9O1xyXG4gICAgcGFkZGluZzogMCAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29sdW1uID0gKHtcclxuICBjaGlsZHJlbixcclxuICBpc0xhc3RJdGVtLFxyXG4gIGdyb3csXHJcbiAgaWQsXHJcbiAgY2xhc3NOYW1lLFxyXG59KSA9PiAoXHJcbiAgPENvbHVtblxyXG4gICAgZ3Jvdz17Z3Jvd31cclxuICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XHJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9jb2x1bW4gJHtjbGFzc05hbWV9YH1cclxuICAgIHJlZj17KGVsZW0pID0+IHtcclxuICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xyXG4gICAgfX1cclxuICAgIGlkPXtpZH1cclxuICA+XHJcbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcclxuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcclxuICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xyXG5cclxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoZS5nLiBDb250ZW50LkNhcmQpXHJcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxyXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSl9XHJcbiAgPC9Db2x1bW4+XHJcbik7XHJcblxyXG5Db250ZW50Q29sdW1uLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZ3JvdzogUHJvcFR5cGVzLm51bWJlcixcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5Db250ZW50Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxyXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxyXG4gIGdyb3c6IDEsXHJcbiAgaWQ6ICcnLFxyXG4gIGNsYXNzTmFtZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q29sdW1uO1xyXG4iXX0=