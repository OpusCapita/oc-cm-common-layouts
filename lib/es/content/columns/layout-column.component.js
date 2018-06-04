var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    margin-right: ', ' \n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    margin-right: ', ' \n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
  return props.grow;
}, function (props) {
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
    !!children.length && React.Children.map(children, function (child, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIkNvbHVtbiIsImRpdiIsInByb3BzIiwiZ3JvdyIsImlzTGFzdEl0ZW0iLCJndXR0ZXJXaWR0aCIsIkxheW91dENvbHVtbiIsImNoaWxkcmVuIiwiZWxlbSIsImNvbHVtbiIsImxlbmd0aCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwidW5kZWZpbmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsU0FBU0gsT0FBT0ksR0FBaEIsa0JBQ1c7QUFBQSxTQUFTQyxNQUFNQyxJQUFmO0FBQUEsQ0FEWCxFQU9jO0FBQUEsU0FBU0QsTUFBTUUsVUFBTixHQUFtQixDQUFuQixHQUF1QkwsTUFBTU0sV0FBdEM7QUFBQSxDQVBkLENBQU47O0FBVUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUgsVUFBYixRQUFhQSxVQUFiO0FBQUEsTUFBeUJELElBQXpCLFFBQXlCQSxJQUF6QjtBQUFBLFNBQ25CO0FBQUMsVUFBRDtBQUFBO0FBQ0UsWUFBTUEsSUFEUjtBQUVFLGtCQUFZQyxVQUZkO0FBR0UsaUJBQWNOLFdBQWQsWUFIRjtBQUlFLFdBQUssYUFBQ1UsSUFBRCxFQUFVO0FBQ2IsY0FBS0MsTUFBTCxHQUFjRCxJQUFkO0FBQ0Q7QUFOSDtBQVFHLEtBQUMsQ0FBQ0QsU0FBU0csTUFBWCxJQUFxQmYsTUFBTWdCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkwsUUFBbkIsRUFBNkIsVUFBQ00sS0FBRCxFQUFRQyxDQUFSO0FBQUEsYUFDakRuQixNQUFNb0IsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDeEJHLGdCQUFRLE1BQUtQLE1BRFc7QUFFeEJMLG9CQUFZVSxNQUFNUCxTQUFTRyxNQUFULEdBQWtCLENBQXhCLElBQTZCSCxTQUFTRyxNQUFULEtBQW9CTztBQUZyQyxPQUExQixDQURpRDtBQUFBLEtBQTdCO0FBUnhCLEdBRG1CO0FBQUEsQ0FBckI7O0FBd0JBWCxhQUFhWSxZQUFiLEdBQTRCO0FBQzFCWCxZQUFVVSxTQURnQjtBQUUxQmIsY0FBWSxLQUZjO0FBRzFCRCxRQUFNO0FBSG9CLENBQTVCOztBQU1BLGVBQWVHLFlBQWYiLCJmaWxlIjoibGF5b3V0LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGh9IFxuYDtcblxuY29uc3QgTGF5b3V0Q29sdW1uID0gKHsgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIGdyb3cgfSkgPT4gKFxuICA8Q29sdW1uXG4gICAgZ3Jvdz17Z3Jvd31cbiAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2NvbHVtbmB9XG4gICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgdGhpcy5jb2x1bW4gPSBlbGVtO1xuICAgIH19XG4gID5cbiAgICB7ISFjaGlsZHJlbi5sZW5ndGggJiYgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICApKX1cbiAgPC9Db2x1bW4+XG4pO1xuXG5MYXlvdXRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTGF5b3V0Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIGdyb3c6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRDb2x1bW47XG4iXX0=