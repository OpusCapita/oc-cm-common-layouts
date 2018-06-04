var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    margin-right: ', ' \n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    margin-right: ', ' \n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
  return props.grow;
}, theme.column.minWidth, function (props) {
  return props.isLastItem ? 0 : theme.gutterWidth;
});

var LayoutColumn = function LayoutColumn(_ref) {
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

LayoutColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1
};

export default LayoutColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIkNvbHVtbiIsImRpdiIsInByb3BzIiwiZ3JvdyIsImNvbHVtbiIsIm1pbldpZHRoIiwiaXNMYXN0SXRlbSIsImd1dHRlcldpZHRoIiwiTGF5b3V0Q29sdW1uIiwiY2hpbGRyZW4iLCJlbGVtIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksR0FBaEIsa0JBQ1c7QUFBQSxTQUFTQyxNQUFNQyxJQUFmO0FBQUEsQ0FEWCxFQU9XSixNQUFNSyxNQUFOLENBQWFDLFFBUHhCLEVBUWM7QUFBQSxTQUFTSCxNQUFNSSxVQUFOLEdBQW1CLENBQW5CLEdBQXVCUCxNQUFNUSxXQUF0QztBQUFBLENBUmQsQ0FBTjs7QUFXQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhSCxVQUFiLFFBQWFBLFVBQWI7QUFBQSxNQUF5QkgsSUFBekIsUUFBeUJBLElBQXpCO0FBQUEsU0FDbkI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNQSxJQURSO0FBRUUsa0JBQVlHLFVBRmQ7QUFHRSxpQkFBY1IsV0FBZCxZQUhGO0FBSUUsV0FBSyxhQUFDWSxJQUFELEVBQVU7QUFDYixjQUFLTixNQUFMLEdBQWNNLElBQWQ7QUFDRDtBQU5IO0FBUUdmLFVBQU1nQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJILFFBQW5CLEVBQTZCLFVBQUNJLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsVUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsYUFBT2xCLE1BQU1xQixZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUMvQkksZ0JBQVEsTUFBS2IsTUFEa0I7QUFFL0JFLG9CQUFZUSxNQUFNTCxTQUFTUyxNQUFULEdBQWtCLENBQXhCLElBQTZCVCxTQUFTUyxNQUFULEtBQW9CQztBQUY5QixPQUExQixDQUFQO0FBSUQsS0FUQTtBQVJILEdBRG1CO0FBQUEsQ0FBckI7O0FBNEJBWCxhQUFhWSxZQUFiLEdBQTRCO0FBQzFCWCxZQUFVVSxTQURnQjtBQUUxQmIsY0FBWSxLQUZjO0FBRzFCSCxRQUFNO0FBSG9CLENBQTVCOztBQU1BLGVBQWVLLFlBQWYiLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAke3RoZW1lLmNvbHVtbi5taW5XaWR0aH07XG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGh9IFxuYDtcblxuY29uc3QgTGF5b3V0Q29sdW1uID0gKHsgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIGdyb3cgfSkgPT4gKFxuICA8Q29sdW1uXG4gICAgZ3Jvdz17Z3Jvd31cbiAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2NvbHVtbmB9XG4gICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xuICAgIH19XG4gID5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGUuZy4gQ29udGVudC5DYXJkKVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfSl9XG4gIDwvQ29sdW1uPlxuKTtcblxuTGF5b3V0Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ3JvdzogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkxheW91dENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICBncm93OiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Q29sdW1uO1xuIl19