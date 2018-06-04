var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../../constants';

var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + theme.gutterWidth + '))';
};

var Row = styled.div(_templateObject, theme.gutterWidth, function (props) {
  return calculateHeight(props);
});

var LayoutRow = function LayoutRow(_ref) {
  var children = _ref.children,
      topOffset = _ref.topOffset,
      stretch = _ref.stretch;
  return React.createElement(
    PerfectScrollbar,
    null,
    React.createElement(
      Row,
      {
        topOffset: topOffset,
        stretch: stretch,
        className: classPrefix + '_row',
        innerRef: function innerRef(element) {
          _this.colContainer = element;
        }
      },
      React.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return React.cloneElement(child, {
          parent: _this.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

LayoutRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

export default LayoutRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiUGVyZmVjdFNjcm9sbGJhciIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsIkxheW91dFJvdyIsImNoaWxkcmVuIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFDQUE3Qjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQzs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFVLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFWO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStETixNQUFNTyxXQUFyRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTVgsT0FBT1ksR0FBYixrQkFDTVQsTUFBTU8sV0FEWixFQUlNO0FBQUEsU0FBU0osZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1NLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFMLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNoQjtBQUFDLG9CQUFEO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXQyxTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxtQkFBY04sV0FBZCxTQUhGO0FBSUUsa0JBQVUsa0JBQUNhLE9BQUQsRUFBYTtBQUNyQixnQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdqQixZQUFNbUIsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFDSyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU9yQixNQUFNd0IsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFaLFNBQVNXO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGdCO0FBQUEsQ0FBbEI7O0FBK0JBWixVQUFVYyxZQUFWLEdBQXlCO0FBQ3ZCYixZQUFVYyxTQURhO0FBRXZCbkIsYUFBVyxFQUZZO0FBR3ZCRCxXQUFTO0FBSGMsQ0FBekI7O0FBTUEsZUFBZUssU0FBZiIsImZpbGUiOiJsYXlvdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+IHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YDtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnN0cmV0Y2gpIHJldHVybiAnYXV0byc7XG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcbn07XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jb25zdCBMYXlvdXRSb3cgPSAoeyBjaGlsZHJlbiwgdG9wT2Zmc2V0LCBzdHJldGNoIH0pID0+IChcbiAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgPFJvd1xuICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93YH1cbiAgICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICB9KX1cbiAgICA8L1Jvdz5cbiAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuKTtcblxuTGF5b3V0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5MYXlvdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBzdHJldGNoOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFJvdztcbiJdfQ==