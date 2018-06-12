var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */
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
      grow = _ref.grow;
  return React.createElement(
    Column,
    {
      grow: grow,
      isLastItem: isLastItem,
      className: classPrefix + '_column',
      ref: function ref(elem) {
        _this.column = elem;
      }
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
  grow: 1
};

export default ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJDb2x1bW4iLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJlbGVtIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksR0FBaEIsa0JBQ1c7QUFBQSxTQUFTQyxNQUFNQyxJQUFmO0FBQUEsQ0FEWCxFQU9XSixNQUFNSyxNQUFOLENBQWFDLFFBUHhCLEVBUVdOLE1BQU1PLGVBUmpCLENBQU47O0FBV0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLFVBQWIsUUFBYUEsVUFBYjtBQUFBLE1BQXlCTixJQUF6QixRQUF5QkEsSUFBekI7QUFBQSxTQUNwQjtBQUFDLFVBQUQ7QUFBQTtBQUNFLFlBQU1BLElBRFI7QUFFRSxrQkFBWU0sVUFGZDtBQUdFLGlCQUFjWCxXQUFkLFlBSEY7QUFJRSxXQUFLLGFBQUNZLElBQUQsRUFBVTtBQUNiLGNBQUtOLE1BQUwsR0FBY00sSUFBZDtBQUNEO0FBTkg7QUFRR2YsVUFBTWdCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkIsVUFBQ0ssS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxVQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxhQUFPbEIsTUFBTXFCLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxnQkFBUSxNQUFLYixNQURrQjtBQUUvQkssb0JBQVlLLE1BQU1OLFNBQVNVLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJWLFNBQVNVLE1BQVQsS0FBb0JDO0FBRjlCLE9BQTFCLENBQVA7QUFJRCxLQVRBO0FBUkgsR0FEb0I7QUFBQSxDQUF0Qjs7QUE0QkFaLGNBQWNhLFlBQWQsR0FBNkI7QUFDM0JaLFlBQVVXLFNBRGlCO0FBRTNCVixjQUFZLEtBRmU7QUFHM0JOLFFBQU07QUFIcUIsQ0FBN0I7O0FBTUEsZUFBZUksYUFBZiIsImZpbGUiOiJjb250ZW50LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAke3RoZW1lLmNvbHVtbi5taW5XaWR0aH07XG4gICAgcGFkZGluZzogMCAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBDb250ZW50Q29sdW1uID0gKHsgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIGdyb3cgfSkgPT4gKFxuICA8Q29sdW1uXG4gICAgZ3Jvdz17Z3Jvd31cbiAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2NvbHVtbmB9XG4gICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xuICAgIH19XG4gID5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGUuZy4gQ29udGVudC5DYXJkKVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfSl9XG4gIDwvQ29sdW1uPlxuKTtcblxuQ29udGVudENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIGdyb3c6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Db250ZW50Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIGdyb3c6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q29sdW1uO1xuIl19