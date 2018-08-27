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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJDb2x1bW4iLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJpZCIsImNsYXNzTmFtZSIsImVsZW0iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksR0FBaEIsa0JBQ1c7QUFBQSxTQUFTQyxNQUFNQyxJQUFmO0FBQUEsQ0FEWCxFQU9XSixNQUFNSyxNQUFOLENBQWFDLFFBUHhCLEVBUVdOLE1BQU1PLGVBUmpCLENBQU47O0FBV0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUVwQkMsVUFGb0IsUUFFcEJBLFVBRm9CO0FBQUEsTUFHcEJOLElBSG9CLFFBR3BCQSxJQUhvQjtBQUFBLE1BSXBCTyxFQUpvQixRQUlwQkEsRUFKb0I7QUFBQSxNQUtwQkMsU0FMb0IsUUFLcEJBLFNBTG9CO0FBQUEsU0FPcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNUixJQURSO0FBRUUsa0JBQVlNLFVBRmQ7QUFHRSxpQkFBY1gsV0FBZCxnQkFBb0NhLFNBSHRDO0FBSUUsV0FBSyxhQUFDQyxJQUFELEVBQVU7QUFDYixjQUFLUixNQUFMLEdBQWNRLElBQWQ7QUFDRCxPQU5IO0FBT0UsVUFBSUY7QUFQTjtBQVNHZixVQUFNa0IsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGFBQU9wQixNQUFNdUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLE1BQUtmLE1BRGtCO0FBRS9CSyxvQkFBWU8sTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGOUIsT0FBMUIsQ0FBUDtBQUlELEtBVEE7QUFUSCxHQVBvQjtBQUFBLENBQXRCOztBQXFDQWQsY0FBY2UsWUFBZCxHQUE2QjtBQUMzQmQsWUFBVWEsU0FEaUI7QUFFM0JaLGNBQVksS0FGZTtBQUczQk4sUUFBTSxDQUhxQjtBQUkzQk8sTUFBSSxFQUp1QjtBQUszQkMsYUFBVztBQUxnQixDQUE3Qjs7QUFRQSxlQUFlSixhQUFmIiwiZmlsZSI6ImNvbnRlbnQtY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAke3RoZW1lLmNvbHVtbi5taW5XaWR0aH07XG4gICAgcGFkZGluZzogMCAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBDb250ZW50Q29sdW1uID0gKHtcbiAgY2hpbGRyZW4sXG4gIGlzTGFzdEl0ZW0sXG4gIGdyb3csXG4gIGlkLFxuICBjbGFzc05hbWUsXG59KSA9PiAoXG4gIDxDb2x1bW5cbiAgICBncm93PXtncm93fVxuICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uICR7Y2xhc3NOYW1lfWB9XG4gICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xuICAgIH19XG4gICAgaWQ9e2lkfVxuICA+XG4gICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChlLmcuIENvbnRlbnQuQ2FyZClcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbHVtbixcbiAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgIH0pfVxuICA8L0NvbHVtbj5cbik7XG5cbkNvbnRlbnRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICBncm93OiAxLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q29sdW1uO1xuIl19